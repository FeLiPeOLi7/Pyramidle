var x2=Object.defineProperty;var b2=(e,r,i)=>r in e?x2(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var Kh=(e,r,i)=>b2(e,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function S2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},Eo={},gc={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function k2(){if(Qh)return He;Qh=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.iterator;function $(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function N(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}N.prototype.isReactComponent={},N.prototype.setState=function(O,F){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,F,"setState")},N.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function E(){}E.prototype=N.prototype;function T(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}var A=T.prototype=new E;A.constructor=T,b(A,N.prototype),A.isPureReactComponent=!0;var D=Array.isArray,B=Object.prototype.hasOwnProperty,P={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function I(O,F,ne){var X,ve={},Ee=null,Ie=null;if(F!=null)for(X in F.ref!==void 0&&(Ie=F.ref),F.key!==void 0&&(Ee=""+F.key),F)B.call(F,X)&&!V.hasOwnProperty(X)&&(ve[X]=F[X]);var Be=arguments.length-2;if(Be===1)ve.children=ne;else if(1<Be){for(var De=Array(Be),ft=0;ft<Be;ft++)De[ft]=arguments[ft+2];ve.children=De}if(O&&O.defaultProps)for(X in Be=O.defaultProps,Be)ve[X]===void 0&&(ve[X]=Be[X]);return{$$typeof:e,type:O,key:Ee,ref:Ie,props:ve,_owner:P.current}}function Y(O,F){return{$$typeof:e,type:O.type,key:F,ref:O.ref,props:O.props,_owner:O._owner}}function te(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function me(O){var F={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return F[ne]})}var de=/\/+/g;function pe(O,F){return typeof O=="object"&&O!==null&&O.key!=null?me(""+O.key):F.toString(36)}function G(O,F,ne,X,ve){var Ee=typeof O;(Ee==="undefined"||Ee==="boolean")&&(O=null);var Ie=!1;if(O===null)Ie=!0;else switch(Ee){case"string":case"number":Ie=!0;break;case"object":switch(O.$$typeof){case e:case r:Ie=!0}}if(Ie)return Ie=O,ve=ve(Ie),O=X===""?"."+pe(Ie,0):X,D(ve)?(ne="",O!=null&&(ne=O.replace(de,"$&/")+"/"),G(ve,F,ne,"",function(ft){return ft})):ve!=null&&(te(ve)&&(ve=Y(ve,ne+(!ve.key||Ie&&Ie.key===ve.key?"":(""+ve.key).replace(de,"$&/")+"/")+O)),F.push(ve)),1;if(Ie=0,X=X===""?".":X+":",D(O))for(var Be=0;Be<O.length;Be++){Ee=O[Be];var De=X+pe(Ee,Be);Ie+=G(Ee,F,ne,De,ve)}else if(De=$(O),typeof De=="function")for(O=De.call(O),Be=0;!(Ee=O.next()).done;)Ee=Ee.value,De=X+pe(Ee,Be++),Ie+=G(Ee,F,ne,De,ve);else if(Ee==="object")throw F=String(O),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ie}function he(O,F,ne){if(O==null)return O;var X=[],ve=0;return G(O,X,"","",function(Ee){return F.call(ne,Ee,ve++)}),X}function ye(O){if(O._status===-1){var F=O._result;F=F(),F.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=F)}if(O._status===1)return O._result.default;throw O._result}var ge={current:null},ee={transition:null},re={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ee,ReactCurrentOwner:P};function se(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:he,forEach:function(O,F,ne){he(O,function(){F.apply(this,arguments)},ne)},count:function(O){var F=0;return he(O,function(){F++}),F},toArray:function(O){return he(O,function(F){return F})||[]},only:function(O){if(!te(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},He.Component=N,He.Fragment=i,He.Profiler=o,He.PureComponent=T,He.StrictMode=s,He.Suspense=f,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,He.act=se,He.cloneElement=function(O,F,ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var X=b({},O.props),ve=O.key,Ee=O.ref,Ie=O._owner;if(F!=null){if(F.ref!==void 0&&(Ee=F.ref,Ie=P.current),F.key!==void 0&&(ve=""+F.key),O.type&&O.type.defaultProps)var Be=O.type.defaultProps;for(De in F)B.call(F,De)&&!V.hasOwnProperty(De)&&(X[De]=F[De]===void 0&&Be!==void 0?Be[De]:F[De])}var De=arguments.length-2;if(De===1)X.children=ne;else if(1<De){Be=Array(De);for(var ft=0;ft<De;ft++)Be[ft]=arguments[ft+2];X.children=Be}return{$$typeof:e,type:O.type,key:ve,ref:Ee,props:X,_owner:Ie}},He.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},He.createElement=I,He.createFactory=function(O){var F=I.bind(null,O);return F.type=O,F},He.createRef=function(){return{current:null}},He.forwardRef=function(O){return{$$typeof:c,render:O}},He.isValidElement=te,He.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:ye}},He.memo=function(O,F){return{$$typeof:m,type:O,compare:F===void 0?null:F}},He.startTransition=function(O){var F=ee.transition;ee.transition={};try{O()}finally{ee.transition=F}},He.unstable_act=se,He.useCallback=function(O,F){return ge.current.useCallback(O,F)},He.useContext=function(O){return ge.current.useContext(O)},He.useDebugValue=function(){},He.useDeferredValue=function(O){return ge.current.useDeferredValue(O)},He.useEffect=function(O,F){return ge.current.useEffect(O,F)},He.useId=function(){return ge.current.useId()},He.useImperativeHandle=function(O,F,ne){return ge.current.useImperativeHandle(O,F,ne)},He.useInsertionEffect=function(O,F){return ge.current.useInsertionEffect(O,F)},He.useLayoutEffect=function(O,F){return ge.current.useLayoutEffect(O,F)},He.useMemo=function(O,F){return ge.current.useMemo(O,F)},He.useReducer=function(O,F,ne){return ge.current.useReducer(O,F,ne)},He.useRef=function(O){return ge.current.useRef(O)},He.useState=function(O){return ge.current.useState(O)},He.useSyncExternalStore=function(O,F,ne){return ge.current.useSyncExternalStore(O,F,ne)},He.useTransition=function(){return ge.current.useTransition()},He.version="18.3.1",He}var Zh;function Lp(){return Zh||(Zh=1,gc.exports=k2()),gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function E2(){if(Yh)return Eo;Yh=1;var e=Lp(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(c,f,m){var v,w={},$=null,S=null;m!==void 0&&($=""+m),f.key!==void 0&&($=""+f.key),f.ref!==void 0&&(S=f.ref);for(v in f)s.call(f,v)&&!u.hasOwnProperty(v)&&(w[v]=f[v]);if(c&&c.defaultProps)for(v in f=c.defaultProps,f)w[v]===void 0&&(w[v]=f[v]);return{$$typeof:r,type:c,key:$,ref:S,props:w,_owner:o.current}}return Eo.Fragment=i,Eo.jsx=d,Eo.jsxs=d,Eo}var Xh;function T2(){return Xh||(Xh=1,mc.exports=E2()),mc.exports}var j=T2(),nt=Lp();const C2=S2(nt);var fl={},yc={exports:{}},rr={},vc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function I2(){return Jh||(Jh=1,(function(e){function r(ee,re){var se=ee.length;ee.push(re);e:for(;0<se;){var O=se-1>>>1,F=ee[O];if(0<o(F,re))ee[O]=re,ee[se]=F,se=O;else break e}}function i(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var re=ee[0],se=ee.pop();if(se!==re){ee[0]=se;e:for(var O=0,F=ee.length,ne=F>>>1;O<ne;){var X=2*(O+1)-1,ve=ee[X],Ee=X+1,Ie=ee[Ee];if(0>o(ve,se))Ee<F&&0>o(Ie,ve)?(ee[O]=Ie,ee[Ee]=se,O=Ee):(ee[O]=ve,ee[X]=se,O=X);else if(Ee<F&&0>o(Ie,se))ee[O]=Ie,ee[Ee]=se,O=Ee;else break e}}return re}function o(ee,re){var se=ee.sortIndex-re.sortIndex;return se!==0?se:ee.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,c=d.now();e.unstable_now=function(){return d.now()-c}}var f=[],m=[],v=1,w=null,$=3,S=!1,b=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(ee){for(var re=i(m);re!==null;){if(re.callback===null)s(m);else if(re.startTime<=ee)s(m),re.sortIndex=re.expirationTime,r(f,re);else break;re=i(m)}}function D(ee){if(C=!1,A(ee),!b)if(i(f)!==null)b=!0,ye(B);else{var re=i(m);re!==null&&ge(D,re.startTime-ee)}}function B(ee,re){b=!1,C&&(C=!1,E(I),I=-1),S=!0;var se=$;try{for(A(re),w=i(f);w!==null&&(!(w.expirationTime>re)||ee&&!me());){var O=w.callback;if(typeof O=="function"){w.callback=null,$=w.priorityLevel;var F=O(w.expirationTime<=re);re=e.unstable_now(),typeof F=="function"?w.callback=F:w===i(f)&&s(f),A(re)}else s(f);w=i(f)}if(w!==null)var ne=!0;else{var X=i(m);X!==null&&ge(D,X.startTime-re),ne=!1}return ne}finally{w=null,$=se,S=!1}}var P=!1,V=null,I=-1,Y=5,te=-1;function me(){return!(e.unstable_now()-te<Y)}function de(){if(V!==null){var ee=e.unstable_now();te=ee;var re=!0;try{re=V(!0,ee)}finally{re?pe():(P=!1,V=null)}}else P=!1}var pe;if(typeof T=="function")pe=function(){T(de)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,he=G.port2;G.port1.onmessage=de,pe=function(){he.postMessage(null)}}else pe=function(){N(de,0)};function ye(ee){V=ee,P||(P=!0,pe())}function ge(ee,re){I=N(function(){ee(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ee){ee.callback=null},e.unstable_continueExecution=function(){b||S||(b=!0,ye(B))},e.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<ee?Math.floor(1e3/ee):5},e.unstable_getCurrentPriorityLevel=function(){return $},e.unstable_getFirstCallbackNode=function(){return i(f)},e.unstable_next=function(ee){switch($){case 1:case 2:case 3:var re=3;break;default:re=$}var se=$;$=re;try{return ee()}finally{$=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ee,re){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=$;$=ee;try{return re()}finally{$=se}},e.unstable_scheduleCallback=function(ee,re,se){var O=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,ee){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=se+F,ee={id:v++,callback:re,priorityLevel:ee,startTime:se,expirationTime:F,sortIndex:-1},se>O?(ee.sortIndex=se,r(m,ee),i(f)===null&&ee===i(m)&&(C?(E(I),I=-1):C=!0,ge(D,se-O))):(ee.sortIndex=F,r(f,ee),b||S||(b=!0,ye(B))),ee},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(ee){var re=$;return function(){var se=$;$=re;try{return ee.apply(this,arguments)}finally{$=se}}}})(wc)),wc}var em;function z2(){return em||(em=1,vc.exports=I2()),vc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function N2(){if(tm)return rr;tm=1;var e=Lp(),r=z2();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(o[t]=n,t=0;t<n.length;t++)s.add(n[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function $(t){return f.call(w,t)?!0:f.call(v,t)?!1:m.test(t)?w[t]=!0:(v[t]=!0,!1)}function S(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,n,a,l){if(n===null||typeof n>"u"||S(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(t,n,a,l,h,y,k){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=y,this.removeEmptyString=k}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];N[n]=new C(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function T(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(E,T);N[n]=new C(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(E,T);N[n]=new C(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(E,T);N[n]=new C(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,n,a,l){var h=N.hasOwnProperty(n)?N[n]:null;(h!==null?h.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b(n,a,h,l)&&(a=null),l||h===null?$(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(n=h.attributeName,l=h.attributeNamespace,a===null?t.removeAttribute(n):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),P=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),me=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),ee=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=ee&&t[ee]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,O;function F(t){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||""}return`
`+O+t}var ne=!1;function X(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Q){var l=Q}Reflect.construct(t,[],n)}else{try{n.call()}catch(Q){l=Q}t.call(n.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var h=Q.stack.split(`
`),y=l.stack.split(`
`),k=h.length-1,M=y.length-1;1<=k&&0<=M&&h[k]!==y[M];)M--;for(;1<=k&&0<=M;k--,M--)if(h[k]!==y[M]){if(k!==1||M!==1)do if(k--,M--,0>M||h[k]!==y[M]){var L=`
`+h[k].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=k&&0<=M);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?F(t):""}function ve(t){switch(t.tag){case 5:return F(t.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case P:return"Portal";case Y:return"Profiler";case I:return"StrictMode";case pe:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case te:return(t._context.displayName||"Context")+".Provider";case de:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return n=t.displayName||null,n!==null?n:Ee(t.type)||"Memo";case ye:n=t._payload,t=t._init;try{return Ee(t(n))}catch{}}return null}function Ie(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ft(t){var n=De(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,y=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(k){l=""+k,y.call(this,k)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(k){l=""+k},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Qt(t){t._valueTracker||(t._valueTracker=ft(t))}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function Ne(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $e(t,n){var a=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function je(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=Be(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fe(t,n){n=n.checked,n!=null&&A(t,"checked",n,!1)}function ot(t,n){Fe(t,n);var a=Be(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Zt(t,n.type,a):n.hasOwnProperty("defaultValue")&&Zt(t,n.type,Be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function kt(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Zt(t,n,a){(n!=="number"||Ne(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var hr=Array.isArray;function Bt(t,n,a,l){if(t=t.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=n.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Be(a),n=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function kn(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pi(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(hr(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:Be(a)}}function ss(t,n){var a=Be(n.value),l=Be(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function os(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function kr(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?kr(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nn,fi=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,h){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,h)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(nn=nn||document.createElement("div"),nn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=nn.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function hi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jl=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(t){jl.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),mr[n]=mr[t]})});function ls(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||mr.hasOwnProperty(t)&&mr[t]?(""+n).trim():n+"px"}function ds(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,h=ls(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,h):t[a]=h}}var cs=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(t,n){if(n){if(cs[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ps(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fs=null;function hs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ms=null,En=null,Tn=null;function gs(t){if(t=zi(t)){if(typeof ms!="function")throw Error(i(280));var n=t.stateNode;n&&(n=La(n),ms(t.stateNode,t.type,n))}}function ys(t){En?Tn?Tn.push(t):Tn=[t]:En=t}function qo(){if(En){var t=En,n=Tn;if(Tn=En=null,gs(t),n)for(t=0;t<n.length;t++)gs(n[t])}}function vs(t,n){return t(n)}function ws(){}var ta=!1;function dt(t,n,a){if(ta)return t(n,a);ta=!0;try{return vs(t,n,a)}finally{ta=!1,(En!==null||Tn!==null)&&(ws(),qo())}}function Cn(t,n){var a=t.stateNode;if(a===null)return null;var l=La(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var ra=!1;if(c)try{var In={};Object.defineProperty(In,"passive",{get:function(){ra=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{ra=!1}function Ho(t,n,a,l,h,y,k,M,L){var Q=Array.prototype.slice.call(arguments,3);try{n.apply(a,Q)}catch(oe){this.onError(oe)}}var zn=!1,gi=null,yi=!1,na=null,Go={onError:function(t){zn=!0,gi=t}};function Ko(t,n,a,l,h,y,k,M,L){zn=!1,gi=null,Ho.apply(Go,arguments)}function Qo(t,n,a,l,h,y,k,M,L){if(Ko.apply(this,arguments),zn){if(zn){var Q=gi;zn=!1,gi=null}else throw Error(i(198));yi||(yi=!0,na=Q)}}function Fr(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function _s(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Zo(t){if(Fr(t)!==t)throw Error(i(188))}function gr(t){var n=t.alternate;if(!n){if(n=Fr(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,l=n;;){var h=a.return;if(h===null)break;var y=h.alternate;if(y===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===y.child){for(y=h.child;y;){if(y===a)return Zo(h),t;if(y===l)return Zo(h),n;y=y.sibling}throw Error(i(188))}if(a.return!==l.return)a=h,l=y;else{for(var k=!1,M=h.child;M;){if(M===a){k=!0,a=h,l=y;break}if(M===l){k=!0,l=h,a=y;break}M=M.sibling}if(!k){for(M=y.child;M;){if(M===a){k=!0,a=y,l=h;break}if(M===l){k=!0,l=y,a=h;break}M=M.sibling}if(!k)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function ia(t){return t=gr(t),t!==null?aa(t):null}function aa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=aa(t);if(n!==null)return n;t=t.sibling}return null}var an=r.unstable_scheduleCallback,yr=r.unstable_cancelCallback,Yo=r.unstable_shouldYield,Wl=r.unstable_requestPaint,ht=r.unstable_now,Xo=r.unstable_getCurrentPriorityLevel,Er=r.unstable_ImmediatePriority,sa=r.unstable_UserBlockingPriority,Ot=r.unstable_NormalPriority,ir=r.unstable_LowPriority,oa=r.unstable_IdlePriority,ua=null,vr=null;function Vl(t){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(ua,t,void 0,(t.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:qr,Fl=Math.log,ql=Math.LN2;function qr(t){return t>>>=0,t===0?32:31-(Fl(t)/ql|0)|0}var sn=64,la=4194304;function Nn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function da(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,y=t.pingedLanes,k=a&268435455;if(k!==0){var M=k&~h;M!==0?l=Nn(M):(y&=k,y!==0&&(l=Nn(y)))}else k=a&~h,k!==0?l=Nn(k):y!==0&&(l=Nn(y));if(l===0)return 0;if(n!==0&&n!==l&&(n&h)===0&&(h=l&-l,y=n&-n,h>=y||h===16&&(y&4194240)!==0))return n;if((l&4)!==0&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-ar(n),h=1<<a,l|=t[a],n&=~h;return l}function Hl(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gl(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,y=t.pendingLanes;0<y;){var k=31-ar(y),M=1<<k,L=h[k];L===-1?((M&a)===0||(M&l)!==0)&&(h[k]=Hl(M,n)):L<=n&&(t.expiredLanes|=M),y&=~M}}function $s(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jo(){var t=sn;return sn<<=1,(sn&4194240)===0&&(sn=64),t}function xs(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vi(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-ar(n),t[n]=a}function Kl(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-ar(a),y=1<<h;n[h]=0,l[h]=-1,t[h]=-1,a&=~y}}function bs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-ar(a),h=1<<l;h&n|t[l]&n&&(t[l]|=n),a&=~h}}var Ze=0;function eu(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ca,On,tu,pa,ru,Ss=!1,fa=[],Hr=null,sr=null,Gr=null,Yt=new Map,Pt=new Map,Tr=[],ha="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(t,n){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Yt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pt.delete(n.pointerId)}}function An(t,n,a,l,h,y){return t===null||t.nativeEvent!==y?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:y,targetContainers:[h]},n!==null&&(n=zi(n),n!==null&&On(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function nu(t,n,a,l,h){switch(n){case"focusin":return Hr=An(Hr,t,n,a,l,h),!0;case"dragenter":return sr=An(sr,t,n,a,l,h),!0;case"mouseover":return Gr=An(Gr,t,n,a,l,h),!0;case"pointerover":var y=h.pointerId;return Yt.set(y,An(Yt.get(y)||null,t,n,a,l,h)),!0;case"gotpointercapture":return y=h.pointerId,Pt.set(y,An(Pt.get(y)||null,t,n,a,l,h)),!0}return!1}function iu(t){var n=hn(t.target);if(n!==null){var a=Fr(n);if(a!==null){if(n=a.tag,n===13){if(n=_s(a),n!==null){t.blockedOn=n,ru(t.priority,function(){tu(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rn(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ks(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);fs=l,a.target.dispatchEvent(l),fs=null}else return n=zi(a),n!==null&&On(n),t.blockedOn=a,!1;n.shift()}return!0}function au(t,n,a){Rn(t)&&a.delete(n)}function su(){Ss=!1,Hr!==null&&Rn(Hr)&&(Hr=null),sr!==null&&Rn(sr)&&(sr=null),Gr!==null&&Rn(Gr)&&(Gr=null),Yt.forEach(au),Pt.forEach(au)}function wi(t,n){t.blockedOn===n&&(t.blockedOn=null,Ss||(Ss=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,su)))}function on(t){function n(h){return wi(h,t)}if(0<fa.length){wi(fa[0],t);for(var a=1;a<fa.length;a++){var l=fa[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Hr!==null&&wi(Hr,t),sr!==null&&wi(sr,t),Gr!==null&&wi(Gr,t),Yt.forEach(n),Pt.forEach(n),a=0;a<Tr.length;a++)l=Tr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)iu(a),a.blockedOn===null&&Tr.shift()}var Dn=D.ReactCurrentBatchConfig,ga=!0;function Ql(t,n,a,l){var h=Ze,y=Dn.transition;Dn.transition=null;try{Ze=1,Mn(t,n,a,l)}finally{Ze=h,Dn.transition=y}}function Zl(t,n,a,l){var h=Ze,y=Dn.transition;Dn.transition=null;try{Ze=4,Mn(t,n,a,l)}finally{Ze=h,Dn.transition=y}}function Mn(t,n,a,l){if(ga){var h=ks(t,n,a,l);if(h===null)Ba(t,n,l,ya,a),ma(t,l);else if(nu(h,t,n,a,l))l.stopPropagation();else if(ma(t,l),n&4&&-1<ha.indexOf(t)){for(;h!==null;){var y=zi(h);if(y!==null&&ca(y),y=ks(t,n,a,l),y===null&&Ba(t,n,l,ya,a),y===h)break;h=y}h!==null&&l.stopPropagation()}else Ba(t,n,l,null,a)}}var ya=null;function ks(t,n,a,l){if(ya=null,t=hs(l),t=hn(t),t!==null)if(n=Fr(t),n===null)t=null;else if(a=n.tag,a===13){if(t=_s(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return ya=t,null}function ou(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xo()){case Er:return 1;case sa:return 4;case Ot:case ir:return 16;case oa:return 536870912;default:return 16}default:return 16}}var Kr=null,Es=null,va=null;function Ts(){if(va)return va;var t,n=Es,a=n.length,l,h="value"in Kr?Kr.value:Kr.textContent,y=h.length;for(t=0;t<a&&n[t]===h[t];t++);var k=a-t;for(l=1;l<=k&&n[a-l]===h[y-l];l++);return va=h.slice(t,1<l?1-l:void 0)}function wa(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _a(){return!0}function uu(){return!1}function Ft(t){function n(a,l,h,y,k){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=y,this.target=k,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(a=t[M],this[M]=a?a(y):y[M]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?_a:uu,this.isPropagationStopped=uu,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_a)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_a)},persist:function(){},isPersistent:_a}),n}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Ft(Bn),_i=se({},Bn,{view:0,detail:0}),Yl=Ft(_i),$a,xa,Pn,ba=se({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pn&&(Pn&&t.type==="mousemove"?($a=t.screenX-Pn.screenX,xa=t.screenY-Pn.screenY):xa=$a=0,Pn=t),$a)},movementY:function(t){return"movementY"in t?t.movementY:xa}}),lu=Ft(ba),du=se({},ba,{dataTransfer:0}),cu=Ft(du),$i=se({},_i,{relatedTarget:0}),Is=Ft($i),pu=se({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Xl=Ft(pu),Jl=se({},Bn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ed=Ft(Jl),zs=se({},Bn,{data:0}),Ns=Ft(zs),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=nd[t])?!!n[t]:!1}function Os(){return id}var ad=se({},_i,{key:function(t){if(t.key){var n=td[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(t){return t.type==="keypress"?wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sd=Ft(ad),un=se({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xi=Ft(un),fu=se({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),od=Ft(fu),Sa=se({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=Ft(Sa),ld=se({},ba,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),As=Ft(ld),Rs=[9,13,27,32],ka=c&&"CompositionEvent"in window,Ln=null;c&&"documentMode"in document&&(Ln=document.documentMode);var hu=c&&"TextEvent"in window&&!Ln,Ds=c&&(!ka||Ln&&8<Ln&&11>=Ln),Ms=" ",Bs=!1;function Ps(t,n){switch(t){case"keyup":return Rs.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ln=!1;function dd(t,n){switch(t){case"compositionend":return mu(n);case"keypress":return n.which!==32?null:(Bs=!0,Ms);case"textInput":return t=n.data,t===Ms&&Bs?null:t;default:return null}}function gu(t,n){if(ln)return t==="compositionend"||!ka&&Ps(t,n)?(t=Ts(),va=Es=Kr=null,ln=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ds&&n.locale!=="ko"?null:n.data;default:return null}}var yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bi(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yu[t.type]:n==="textarea"}function or(t,n,a,l){ys(l),n=Ci(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Cr=null,dn=null;function vu(t){eo(t,0)}function Si(t){var n=Kn(t);if(Mt(n))return t}function wu(t,n){if(t==="change")return n}var Ea=!1;if(c){var Ta;if(c){var Ca="oninput"in document;if(!Ca){var We=document.createElement("div");We.setAttribute("oninput","return;"),Ca=typeof We.oninput=="function"}Ta=Ca}else Ta=!1;Ea=Ta&&(!document.documentMode||9<document.documentMode)}function Un(){Cr&&(Cr.detachEvent("onpropertychange",Ls),dn=Cr=null)}function Ls(t){if(t.propertyName==="value"&&Si(dn)){var n=[];or(n,dn,t,hs(t)),dt(vu,n)}}function Ue(t,n,a){t==="focusin"?(Un(),Cr=n,dn=a,Cr.attachEvent("onpropertychange",Ls)):t==="focusout"&&Un()}function Us(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Si(dn)}function Ve(t,n){if(t==="click")return Si(n)}function _u(t,n){if(t==="input"||t==="change")return Si(n)}function js(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xt=typeof Object.is=="function"?Object.is:js;function jn(t,n){if(Xt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!f.call(n,h)||!Xt(t[h],n[h]))return!1}return!0}function Ws(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ia(t,n){var a=Ws(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ws(a)}}function Vs(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vs(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fs(){for(var t=window,n=Ne();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ne(t.document)}return n}function za(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function $u(t){var n=Fs(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&Vs(a.ownerDocument.documentElement,a)){if(l!==null&&za(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,y=Math.min(l.start,h);l=l.end===void 0?y:Math.min(l.end,h),!t.extend&&y>l&&(h=l,l=y,y=h),h=Ia(a,y);var k=Ia(a,l);h&&k&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==k.node||t.focusOffset!==k.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),t.removeAllRanges(),y>l?(t.addRange(n),t.extend(k.node,k.offset)):(n.setEnd(k.node,k.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xu=c&&"documentMode"in document&&11>=document.documentMode,cn=null,Na=null,Wn=null,Oa=!1;function qs(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oa||cn==null||cn!==Ne(l)||(l=cn,"selectionStart"in l&&za(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wn&&jn(Wn,l)||(Wn=l,l=Ci(Na,"onSelect"),0<l.length&&(n=new Cs("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=cn)))}function ki(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var pn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Aa={},Hs={};c&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Ei(t){if(Aa[t])return Aa[t];if(!pn[t])return t;var n=pn[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hs)return Aa[t]=n[a];return t}var Gs=Ei("animationend"),Ks=Ei("animationiteration"),Qs=Ei("animationstart"),Zs=Ei("transitionend"),Ys=new Map,Xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,n){Ys.set(t,n),u(n,[t])}for(var Ra=0;Ra<Xs.length;Ra++){var Da=Xs[Ra],bu=Da.toLowerCase(),Su=Da[0].toUpperCase()+Da.slice(1);Ir(bu,"on"+Su)}Ir(Gs,"onAnimationEnd"),Ir(Ks,"onAnimationIteration"),Ir(Qs,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Zs,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ku=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function Js(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,Qo(l,n,void 0,t),t.currentTarget=null}function eo(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var y=void 0;if(n)for(var k=l.length-1;0<=k;k--){var M=l[k],L=M.instance,Q=M.currentTarget;if(M=M.listener,L!==y&&h.isPropagationStopped())break e;Js(h,M,Q),y=L}else for(k=0;k<l.length;k++){if(M=l[k],L=M.instance,Q=M.currentTarget,M=M.listener,L!==y&&h.isPropagationStopped())break e;Js(h,M,Q),y=L}}}if(yi)throw t=na,yi=!1,na=null,t}function it(t,n){var a=n[uo];a===void 0&&(a=n[uo]=new Set);var l=t+"__bubble";a.has(l)||(to(n,t,2,!1),a.add(l))}function Ma(t,n,a){var l=0;n&&(l|=4),to(a,t,l,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Fn(t){if(!t[Ti]){t[Ti]=!0,s.forEach(function(a){a!=="selectionchange"&&(ku.has(a)||Ma(a,!1,t),Ma(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,Ma("selectionchange",!1,n))}}function to(t,n,a,l){switch(ou(n)){case 1:var h=Ql;break;case 4:h=Zl;break;default:h=Mn}a=h.bind(null,n,a,t),h=void 0,!ra||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(n,a,{capture:!0,passive:h}):t.addEventListener(n,a,!0):h!==void 0?t.addEventListener(n,a,{passive:h}):t.addEventListener(n,a,!1)}function Ba(t,n,a,l,h){var y=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var k=l.tag;if(k===3||k===4){var M=l.stateNode.containerInfo;if(M===h||M.nodeType===8&&M.parentNode===h)break;if(k===4)for(k=l.return;k!==null;){var L=k.tag;if((L===3||L===4)&&(L=k.stateNode.containerInfo,L===h||L.nodeType===8&&L.parentNode===h))return;k=k.return}for(;M!==null;){if(k=hn(M),k===null)return;if(L=k.tag,L===5||L===6){l=y=k;continue e}M=M.parentNode}}l=l.return}dt(function(){var Q=y,oe=hs(a),le=[];e:{var ie=Ys.get(t);if(ie!==void 0){var we=Cs,Se=t;switch(t){case"keypress":if(wa(a)===0)break e;case"keydown":case"keyup":we=sd;break;case"focusin":Se="focus",we=Is;break;case"focusout":Se="blur",we=Is;break;case"beforeblur":case"afterblur":we=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=od;break;case Gs:case Ks:case Qs:we=Xl;break;case Zs:we=ud;break;case"scroll":we=Yl;break;case"wheel":we=As;break;case"copy":case"cut":case"paste":we=ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=xi}var Te=(n&4)!==0,wt=!Te&&t==="scroll",q=Te?ie!==null?ie+"Capture":null:ie;Te=[];for(var W=Q,H;W!==null;){H=W;var ce=H.stateNode;if(H.tag===5&&ce!==null&&(H=ce,q!==null&&(ce=Cn(W,q),ce!=null&&Te.push(qn(W,ce,H)))),wt)break;W=W.return}0<Te.length&&(ie=new we(ie,Se,null,a,oe),le.push({event:ie,listeners:Te}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",we=t==="mouseout"||t==="pointerout",ie&&a!==fs&&(Se=a.relatedTarget||a.fromElement)&&(hn(Se)||Se[Nr]))break e;if((we||ie)&&(ie=oe.window===oe?oe:(ie=oe.ownerDocument)?ie.defaultView||ie.parentWindow:window,we?(Se=a.relatedTarget||a.toElement,we=Q,Se=Se?hn(Se):null,Se!==null&&(wt=Fr(Se),Se!==wt||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(we=null,Se=Q),we!==Se)){if(Te=lu,ce="onMouseLeave",q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Te=xi,ce="onPointerLeave",q="onPointerEnter",W="pointer"),wt=we==null?ie:Kn(we),H=Se==null?ie:Kn(Se),ie=new Te(ce,W+"leave",we,a,oe),ie.target=wt,ie.relatedTarget=H,ce=null,hn(oe)===Q&&(Te=new Te(q,W+"enter",Se,a,oe),Te.target=H,Te.relatedTarget=wt,ce=Te),wt=ce,we&&Se)t:{for(Te=we,q=Se,W=0,H=Te;H;H=fn(H))W++;for(H=0,ce=q;ce;ce=fn(ce))H++;for(;0<W-H;)Te=fn(Te),W--;for(;0<H-W;)q=fn(q),H--;for(;W--;){if(Te===q||q!==null&&Te===q.alternate)break t;Te=fn(Te),q=fn(q)}Te=null}else Te=null;we!==null&&ro(le,ie,we,Te,!1),Se!==null&&wt!==null&&ro(le,wt,Se,Te,!0)}}e:{if(ie=Q?Kn(Q):window,we=ie.nodeName&&ie.nodeName.toLowerCase(),we==="select"||we==="input"&&ie.type==="file")var Ce=wu;else if(bi(ie))if(Ea)Ce=_u;else{Ce=Us;var Ae=Ue}else(we=ie.nodeName)&&we.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Ce=Ve);if(Ce&&(Ce=Ce(t,Q))){or(le,Ce,a,oe);break e}Ae&&Ae(t,ie,Q),t==="focusout"&&(Ae=ie._wrapperState)&&Ae.controlled&&ie.type==="number"&&Zt(ie,"number",ie.value)}switch(Ae=Q?Kn(Q):window,t){case"focusin":(bi(Ae)||Ae.contentEditable==="true")&&(cn=Ae,Na=Q,Wn=null);break;case"focusout":Wn=Na=cn=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,qs(le,a,oe);break;case"selectionchange":if(xu)break;case"keydown":case"keyup":qs(le,a,oe)}var Re;if(ka)e:{switch(t){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else ln?Ps(t,a)&&(Pe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(Ds&&a.locale!=="ko"&&(ln||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&ln&&(Re=Ts()):(Kr=oe,Es="value"in Kr?Kr.value:Kr.textContent,ln=!0)),Ae=Ci(Q,Pe),0<Ae.length&&(Pe=new Ns(Pe,t,null,a,oe),le.push({event:Pe,listeners:Ae}),Re?Pe.data=Re:(Re=mu(a),Re!==null&&(Pe.data=Re)))),(Re=hu?dd(t,a):gu(t,a))&&(Q=Ci(Q,"onBeforeInput"),0<Q.length&&(oe=new Ns("onBeforeInput","beforeinput",null,a,oe),le.push({event:oe,listeners:Q}),oe.data=Re))}eo(le,n)})}function qn(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ci(t,n){for(var a=n+"Capture",l=[];t!==null;){var h=t,y=h.stateNode;h.tag===5&&y!==null&&(h=y,y=Cn(t,a),y!=null&&l.unshift(qn(t,y,h)),y=Cn(t,n),y!=null&&l.push(qn(t,y,h))),t=t.return}return l}function fn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ro(t,n,a,l,h){for(var y=n._reactName,k=[];a!==null&&a!==l;){var M=a,L=M.alternate,Q=M.stateNode;if(L!==null&&L===l)break;M.tag===5&&Q!==null&&(M=Q,h?(L=Cn(a,y),L!=null&&k.unshift(qn(a,L,M))):h||(L=Cn(a,y),L!=null&&k.push(qn(a,L,M)))),a=a.return}k.length!==0&&t.push({event:n,listeners:k})}var Eu=/\r\n?/g,zr=/\u0000|\uFFFD/g;function Tu(t){return(typeof t=="string"?t:""+t).replace(Eu,`
`).replace(zr,"")}function Hn(t,n,a){if(n=Tu(n),Tu(t)!==n&&a)throw Error(i(425))}function Pa(){}var no=null,io=null;function ao(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,cd=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(t){return Cu.resolve(null).then(t).catch(fd)}:so;function fd(t){setTimeout(function(){throw t})}function oo(t,n){var a=n,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),on(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);on(n)}function Qr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Iu(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),wr="__reactFiber$"+Gn,Ii="__reactProps$"+Gn,Nr="__reactContainer$"+Gn,uo="__reactEvents$"+Gn,hd="__reactListeners$"+Gn,md="__reactHandles$"+Gn;function hn(t){var n=t[wr];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Nr]||a[wr]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Iu(t);t!==null;){if(a=t[wr])return a;t=Iu(t)}return n}t=a,a=t.parentNode}return null}function zi(t){return t=t[wr]||t[Nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function La(t){return t[Ii]||null}var lo=[],Qn=-1;function Zr(t){return{current:t}}function st(t){0>Qn||(t.current=lo[Qn],lo[Qn]=null,Qn--)}function at(t,n){Qn++,lo[Qn]=t.current,t.current=n}var Yr={},Et=Zr(Yr),Lt=Zr(!1),mn=Yr;function Zn(t,n){var a=t.type.contextTypes;if(!a)return Yr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var h={},y;for(y in a)h[y]=n[y];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=h),h}function Ut(t){return t=t.childContextTypes,t!=null}function Ua(){st(Lt),st(Et)}function zu(t,n,a){if(Et.current!==Yr)throw Error(i(168));at(Et,n),at(Lt,a)}function Nu(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var h in l)if(!(h in n))throw Error(i(108,Ie(t)||"Unknown",h));return se({},a,l)}function ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,mn=Et.current,at(Et,t),at(Lt,Lt.current),!0}function Ou(t,n,a){var l=t.stateNode;if(!l)throw Error(i(169));a?(t=Nu(t,n,mn),l.__reactInternalMemoizedMergedChildContext=t,st(Lt),st(Et),at(Et,t)):st(Lt),at(Lt,a)}var Or=null,Wa=!1,Yn=!1;function co(t){Or===null?Or=[t]:Or.push(t)}function Au(t){Wa=!0,co(t)}function p(){if(!Yn&&Or!==null){Yn=!0;var t=0,n=Ze;try{var a=Or;for(Ze=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Or=null,Wa=!1}catch(h){throw Or!==null&&(Or=Or.slice(t+1)),an(Er,p),h}finally{Ze=n,Yn=!1}}return null}var g=[],x=0,_=null,z=0,R=[],U=0,Z=null,ue=1,fe="";function Oe(t,n){g[x++]=z,g[x++]=_,_=t,z=n}function qe(t,n,a){R[U++]=ue,R[U++]=fe,R[U++]=Z,Z=t;var l=ue;t=fe;var h=32-ar(l)-1;l&=~(1<<h),a+=1;var y=32-ar(n)+h;if(30<y){var k=h-h%5;y=(l&(1<<k)-1).toString(32),l>>=k,h-=k,ue=1<<32-ar(n)+h|a<<h|l,fe=y+t}else ue=1<<y|a<<h|l,fe=t}function Xe(t){t.return!==null&&(Oe(t,1),qe(t,1,0))}function tt(t){for(;t===_;)_=g[--x],g[x]=null,z=g[--x],g[x]=null;for(;t===Z;)Z=R[--U],R[U]=null,fe=R[--U],R[U]=null,ue=R[--U],R[U]=null}var yt=null,At=null,ut=!1,qt=null;function $f(t,n){var a=br(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function xf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,yt=t,At=Qr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,yt=t,At=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Z!==null?{id:ue,overflow:fe}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=br(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,yt=t,At=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(ut){var n=At;if(n){var a=n;if(!xf(t,n)){if(gd(t))throw Error(i(418));n=Qr(a.nextSibling);var l=yt;n&&xf(t,n)?$f(l,a):(t.flags=t.flags&-4097|2,ut=!1,yt=t)}}else{if(gd(t))throw Error(i(418));t.flags=t.flags&-4097|2,ut=!1,yt=t}}}function bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function Ru(t){if(t!==yt)return!1;if(!ut)return bf(t),ut=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!ao(t.type,t.memoizedProps)),n&&(n=At)){if(gd(t))throw Sf(),Error(i(418));for(;n;)$f(t,n),n=Qr(n.nextSibling)}if(bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){At=Qr(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}At=null}}else At=yt?Qr(t.stateNode.nextSibling):null;return!0}function Sf(){for(var t=At;t;)t=Qr(t.nextSibling)}function Va(){At=yt=null,ut=!1}function vd(t){qt===null?qt=[t]:qt.push(t)}var W_=D.ReactCurrentBatchConfig;function po(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,t));var h=l,y=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===y?n.ref:(n=function(k){var M=h.refs;k===null?delete M[y]:M[y]=k},n._stringRef=y,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Du(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function kf(t){var n=t._init;return n(t._payload)}function Ef(t){function n(q,W){if(t){var H=q.deletions;H===null?(q.deletions=[W],q.flags|=16):H.push(W)}}function a(q,W){if(!t)return null;for(;W!==null;)n(q,W),W=W.sibling;return null}function l(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function h(q,W){return q=ai(q,W),q.index=0,q.sibling=null,q}function y(q,W,H){return q.index=H,t?(H=q.alternate,H!==null?(H=H.index,H<W?(q.flags|=2,W):H):(q.flags|=2,W)):(q.flags|=1048576,W)}function k(q){return t&&q.alternate===null&&(q.flags|=2),q}function M(q,W,H,ce){return W===null||W.tag!==6?(W=lc(H,q.mode,ce),W.return=q,W):(W=h(W,H),W.return=q,W)}function L(q,W,H,ce){var Ce=H.type;return Ce===V?oe(q,W,H.props.children,ce,H.key):W!==null&&(W.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&kf(Ce)===W.type)?(ce=h(W,H.props),ce.ref=po(q,W,H),ce.return=q,ce):(ce=al(H.type,H.key,H.props,null,q.mode,ce),ce.ref=po(q,W,H),ce.return=q,ce)}function Q(q,W,H,ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==H.containerInfo||W.stateNode.implementation!==H.implementation?(W=dc(H,q.mode,ce),W.return=q,W):(W=h(W,H.children||[]),W.return=q,W)}function oe(q,W,H,ce,Ce){return W===null||W.tag!==7?(W=Pi(H,q.mode,ce,Ce),W.return=q,W):(W=h(W,H),W.return=q,W)}function le(q,W,H){if(typeof W=="string"&&W!==""||typeof W=="number")return W=lc(""+W,q.mode,H),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return H=al(W.type,W.key,W.props,null,q.mode,H),H.ref=po(q,null,W),H.return=q,H;case P:return W=dc(W,q.mode,H),W.return=q,W;case ye:var ce=W._init;return le(q,ce(W._payload),H)}if(hr(W)||re(W))return W=Pi(W,q.mode,H,null),W.return=q,W;Du(q,W)}return null}function ie(q,W,H,ce){var Ce=W!==null?W.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return Ce!==null?null:M(q,W,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return H.key===Ce?L(q,W,H,ce):null;case P:return H.key===Ce?Q(q,W,H,ce):null;case ye:return Ce=H._init,ie(q,W,Ce(H._payload),ce)}if(hr(H)||re(H))return Ce!==null?null:oe(q,W,H,ce,null);Du(q,H)}return null}function we(q,W,H,ce,Ce){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return q=q.get(H)||null,M(W,q,""+ce,Ce);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case B:return q=q.get(ce.key===null?H:ce.key)||null,L(W,q,ce,Ce);case P:return q=q.get(ce.key===null?H:ce.key)||null,Q(W,q,ce,Ce);case ye:var Ae=ce._init;return we(q,W,H,Ae(ce._payload),Ce)}if(hr(ce)||re(ce))return q=q.get(H)||null,oe(W,q,ce,Ce,null);Du(W,ce)}return null}function Se(q,W,H,ce){for(var Ce=null,Ae=null,Re=W,Pe=W=0,It=null;Re!==null&&Pe<H.length;Pe++){Re.index>Pe?(It=Re,Re=null):It=Re.sibling;var et=ie(q,Re,H[Pe],ce);if(et===null){Re===null&&(Re=It);break}t&&Re&&et.alternate===null&&n(q,Re),W=y(et,W,Pe),Ae===null?Ce=et:Ae.sibling=et,Ae=et,Re=It}if(Pe===H.length)return a(q,Re),ut&&Oe(q,Pe),Ce;if(Re===null){for(;Pe<H.length;Pe++)Re=le(q,H[Pe],ce),Re!==null&&(W=y(Re,W,Pe),Ae===null?Ce=Re:Ae.sibling=Re,Ae=Re);return ut&&Oe(q,Pe),Ce}for(Re=l(q,Re);Pe<H.length;Pe++)It=we(Re,q,Pe,H[Pe],ce),It!==null&&(t&&It.alternate!==null&&Re.delete(It.key===null?Pe:It.key),W=y(It,W,Pe),Ae===null?Ce=It:Ae.sibling=It,Ae=It);return t&&Re.forEach(function(si){return n(q,si)}),ut&&Oe(q,Pe),Ce}function Te(q,W,H,ce){var Ce=re(H);if(typeof Ce!="function")throw Error(i(150));if(H=Ce.call(H),H==null)throw Error(i(151));for(var Ae=Ce=null,Re=W,Pe=W=0,It=null,et=H.next();Re!==null&&!et.done;Pe++,et=H.next()){Re.index>Pe?(It=Re,Re=null):It=Re.sibling;var si=ie(q,Re,et.value,ce);if(si===null){Re===null&&(Re=It);break}t&&Re&&si.alternate===null&&n(q,Re),W=y(si,W,Pe),Ae===null?Ce=si:Ae.sibling=si,Ae=si,Re=It}if(et.done)return a(q,Re),ut&&Oe(q,Pe),Ce;if(Re===null){for(;!et.done;Pe++,et=H.next())et=le(q,et.value,ce),et!==null&&(W=y(et,W,Pe),Ae===null?Ce=et:Ae.sibling=et,Ae=et);return ut&&Oe(q,Pe),Ce}for(Re=l(q,Re);!et.done;Pe++,et=H.next())et=we(Re,q,Pe,et.value,ce),et!==null&&(t&&et.alternate!==null&&Re.delete(et.key===null?Pe:et.key),W=y(et,W,Pe),Ae===null?Ce=et:Ae.sibling=et,Ae=et);return t&&Re.forEach(function($2){return n(q,$2)}),ut&&Oe(q,Pe),Ce}function wt(q,W,H,ce){if(typeof H=="object"&&H!==null&&H.type===V&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case B:e:{for(var Ce=H.key,Ae=W;Ae!==null;){if(Ae.key===Ce){if(Ce=H.type,Ce===V){if(Ae.tag===7){a(q,Ae.sibling),W=h(Ae,H.props.children),W.return=q,q=W;break e}}else if(Ae.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&kf(Ce)===Ae.type){a(q,Ae.sibling),W=h(Ae,H.props),W.ref=po(q,Ae,H),W.return=q,q=W;break e}a(q,Ae);break}else n(q,Ae);Ae=Ae.sibling}H.type===V?(W=Pi(H.props.children,q.mode,ce,H.key),W.return=q,q=W):(ce=al(H.type,H.key,H.props,null,q.mode,ce),ce.ref=po(q,W,H),ce.return=q,q=ce)}return k(q);case P:e:{for(Ae=H.key;W!==null;){if(W.key===Ae)if(W.tag===4&&W.stateNode.containerInfo===H.containerInfo&&W.stateNode.implementation===H.implementation){a(q,W.sibling),W=h(W,H.children||[]),W.return=q,q=W;break e}else{a(q,W);break}else n(q,W);W=W.sibling}W=dc(H,q.mode,ce),W.return=q,q=W}return k(q);case ye:return Ae=H._init,wt(q,W,Ae(H._payload),ce)}if(hr(H))return Se(q,W,H,ce);if(re(H))return Te(q,W,H,ce);Du(q,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,W!==null&&W.tag===6?(a(q,W.sibling),W=h(W,H),W.return=q,q=W):(a(q,W),W=lc(H,q.mode,ce),W.return=q,q=W),k(q)):a(q,W)}return wt}var Fa=Ef(!0),Tf=Ef(!1),Mu=Zr(null),Bu=null,qa=null,wd=null;function _d(){wd=qa=Bu=null}function $d(t){var n=Mu.current;st(Mu),t._currentValue=n}function xd(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Ha(t,n){Bu=t,wd=qa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Jt=!0),t.firstContext=null)}function _r(t){var n=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:n,next:null},qa===null){if(Bu===null)throw Error(i(308));qa=t,Bu.dependencies={lanes:0,firstContext:t}}else qa=qa.next=t;return n}var Ni=null;function bd(t){Ni===null?Ni=[t]:Ni.push(t)}function Cf(t,n,a,l){var h=n.interleaved;return h===null?(a.next=a,bd(n)):(a.next=h.next,h.next=a),n.interleaved=a,gn(t,l)}function gn(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Xn=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Je&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,gn(t,a)}return h=l.interleaved,h===null?(n.next=n,bd(l)):(n.next=h.next,h.next=n),l.interleaved=n,gn(t,a)}function Pu(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,bs(t,a)}}function zf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var k={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?h=y=k:y=y.next=k,a=a.next}while(a!==null);y===null?h=y=n:y=y.next=n}else h=y=n;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:y,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function Lu(t,n,a,l){var h=t.updateQueue;Xn=!1;var y=h.firstBaseUpdate,k=h.lastBaseUpdate,M=h.shared.pending;if(M!==null){h.shared.pending=null;var L=M,Q=L.next;L.next=null,k===null?y=Q:k.next=Q,k=L;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,M=oe.lastBaseUpdate,M!==k&&(M===null?oe.firstBaseUpdate=Q:M.next=Q,oe.lastBaseUpdate=L))}if(y!==null){var le=h.baseState;k=0,oe=Q=L=null,M=y;do{var ie=M.lane,we=M.eventTime;if((l&ie)===ie){oe!==null&&(oe=oe.next={eventTime:we,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var Se=t,Te=M;switch(ie=n,we=a,Te.tag){case 1:if(Se=Te.payload,typeof Se=="function"){le=Se.call(we,le,ie);break e}le=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Te.payload,ie=typeof Se=="function"?Se.call(we,le,ie):Se,ie==null)break e;le=se({},le,ie);break e;case 2:Xn=!0}}M.callback!==null&&M.lane!==0&&(t.flags|=64,ie=h.effects,ie===null?h.effects=[M]:ie.push(M))}else we={eventTime:we,lane:ie,tag:M.tag,payload:M.payload,callback:M.callback,next:null},oe===null?(Q=oe=we,L=le):oe=oe.next=we,k|=ie;if(M=M.next,M===null){if(M=h.shared.pending,M===null)break;ie=M,M=ie.next,ie.next=null,h.lastBaseUpdate=ie,h.shared.pending=null}}while(!0);if(oe===null&&(L=le),h.baseState=L,h.firstBaseUpdate=Q,h.lastBaseUpdate=oe,n=h.shared.interleaved,n!==null){h=n;do k|=h.lane,h=h.next;while(h!==n)}else y===null&&(h.shared.lanes=0);Ri|=k,t.lanes=k,t.memoizedState=le}}function Nf(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],h=l.callback;if(h!==null){if(l.callback=null,l=a,typeof h!="function")throw Error(i(191,h));h.call(l)}}}var fo={},Xr=Zr(fo),ho=Zr(fo),mo=Zr(fo);function Oi(t){if(t===fo)throw Error(i(174));return t}function kd(t,n){switch(at(mo,n),at(ho,t),at(Xr,fo),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:us(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=us(n,t)}st(Xr),at(Xr,n)}function Ga(){st(Xr),st(ho),st(mo)}function Of(t){Oi(mo.current);var n=Oi(Xr.current),a=us(n,t.type);n!==a&&(at(ho,t),at(Xr,a))}function Ed(t){ho.current===t&&(st(Xr),st(ho))}var mt=Zr(0);function Uu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Td=[];function Cd(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var ju=D.ReactCurrentDispatcher,Id=D.ReactCurrentBatchConfig,Ai=0,gt=null,$t=null,Tt=null,Wu=!1,go=!1,yo=0,V_=0;function jt(){throw Error(i(321))}function zd(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xt(t[a],n[a]))return!1;return!0}function Nd(t,n,a,l,h,y){if(Ai=y,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ju.current=t===null||t.memoizedState===null?G_:K_,t=a(l,h),go){y=0;do{if(go=!1,yo=0,25<=y)throw Error(i(301));y+=1,Tt=$t=null,n.updateQueue=null,ju.current=Q_,t=a(l,h)}while(go)}if(ju.current=qu,n=$t!==null&&$t.next!==null,Ai=0,Tt=$t=gt=null,Wu=!1,n)throw Error(i(300));return t}function Od(){var t=yo!==0;return yo=0,t}function Jr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?gt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function $r(){if($t===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var n=Tt===null?gt.memoizedState:Tt.next;if(n!==null)Tt=n,$t=t;else{if(t===null)throw Error(i(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Tt===null?gt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function vo(t,n){return typeof n=="function"?n(t):n}function Ad(t){var n=$r(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=$t,h=l.baseQueue,y=a.pending;if(y!==null){if(h!==null){var k=h.next;h.next=y.next,y.next=k}l.baseQueue=h=y,a.pending=null}if(h!==null){y=h.next,l=l.baseState;var M=k=null,L=null,Q=y;do{var oe=Q.lane;if((Ai&oe)===oe)L!==null&&(L=L.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var le={lane:oe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};L===null?(M=L=le,k=l):L=L.next=le,gt.lanes|=oe,Ri|=oe}Q=Q.next}while(Q!==null&&Q!==y);L===null?k=l:L.next=M,Xt(l,n.memoizedState)||(Jt=!0),n.memoizedState=l,n.baseState=k,n.baseQueue=L,a.lastRenderedState=l}if(t=a.interleaved,t!==null){h=t;do y=h.lane,gt.lanes|=y,Ri|=y,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Rd(t){var n=$r(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,y=n.memoizedState;if(h!==null){a.pending=null;var k=h=h.next;do y=t(y,k.action),k=k.next;while(k!==h);Xt(y,n.memoizedState)||(Jt=!0),n.memoizedState=y,n.baseQueue===null&&(n.baseState=y),a.lastRenderedState=y}return[y,l]}function Af(){}function Rf(t,n){var a=gt,l=$r(),h=n(),y=!Xt(l.memoizedState,h);if(y&&(l.memoizedState=h,Jt=!0),l=l.queue,Dd(Bf.bind(null,a,l,t),[t]),l.getSnapshot!==n||y||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,wo(9,Mf.bind(null,a,l,h,n),void 0,null),Ct===null)throw Error(i(349));(Ai&30)!==0||Df(a,n,h)}return h}function Df(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n={lastEffect:null,stores:null},gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mf(t,n,a,l){n.value=a,n.getSnapshot=l,Pf(n)&&Lf(t)}function Bf(t,n,a){return a(function(){Pf(n)&&Lf(t)})}function Pf(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xt(t,a)}catch{return!0}}function Lf(t){var n=gn(t,1);n!==null&&Mr(n,t,1,-1)}function Uf(t){var n=Jr();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},n.queue=t,t=t.dispatch=H_.bind(null,gt,t),[n.memoizedState,t]}function wo(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=gt.updateQueue,n===null?(n={lastEffect:null,stores:null},gt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function jf(){return $r().memoizedState}function Vu(t,n,a,l){var h=Jr();gt.flags|=t,h.memoizedState=wo(1|n,a,void 0,l===void 0?null:l)}function Fu(t,n,a,l){var h=$r();l=l===void 0?null:l;var y=void 0;if($t!==null){var k=$t.memoizedState;if(y=k.destroy,l!==null&&zd(l,k.deps)){h.memoizedState=wo(n,a,y,l);return}}gt.flags|=t,h.memoizedState=wo(1|n,a,y,l)}function Wf(t,n){return Vu(8390656,8,t,n)}function Dd(t,n){return Fu(2048,8,t,n)}function Vf(t,n){return Fu(4,2,t,n)}function Ff(t,n){return Fu(4,4,t,n)}function qf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Hf(t,n,a){return a=a!=null?a.concat([t]):null,Fu(4,4,qf.bind(null,n,t),a)}function Md(){}function Gf(t,n){var a=$r();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&zd(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function Kf(t,n){var a=$r();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&zd(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function Qf(t,n,a){return(Ai&21)===0?(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=a):(Xt(a,n)||(a=Jo(),gt.lanes|=a,Ri|=a,t.baseState=!0),n)}function F_(t,n){var a=Ze;Ze=a!==0&&4>a?a:4,t(!0);var l=Id.transition;Id.transition={};try{t(!1),n()}finally{Ze=a,Id.transition=l}}function Zf(){return $r().memoizedState}function q_(t,n,a){var l=ni(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Yf(t))Xf(n,a);else if(a=Cf(t,n,a,l),a!==null){var h=Gt();Mr(a,t,l,h),Jf(a,n,l)}}function H_(t,n,a){var l=ni(t),h={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yf(t))Xf(n,h);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=n.lastRenderedReducer,y!==null))try{var k=n.lastRenderedState,M=y(k,a);if(h.hasEagerState=!0,h.eagerState=M,Xt(M,k)){var L=n.interleaved;L===null?(h.next=h,bd(n)):(h.next=L.next,L.next=h),n.interleaved=h;return}}catch{}finally{}a=Cf(t,n,h,l),a!==null&&(h=Gt(),Mr(a,t,l,h),Jf(a,n,l))}}function Yf(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function Xf(t,n){go=Wu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jf(t,n,a){if((a&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,bs(t,a)}}var qu={readContext:_r,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},G_={readContext:_r,useCallback:function(t,n){return Jr().memoizedState=[t,n===void 0?null:n],t},useContext:_r,useEffect:Wf,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,Vu(4194308,4,qf.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vu(4194308,4,t,n)},useInsertionEffect:function(t,n){return Vu(4,2,t,n)},useMemo:function(t,n){var a=Jr();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=Jr();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=q_.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var n=Jr();return t={current:t},n.memoizedState=t},useState:Uf,useDebugValue:Md,useDeferredValue:function(t){return Jr().memoizedState=t},useTransition:function(){var t=Uf(!1),n=t[0];return t=F_.bind(null,t[1]),Jr().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=gt,h=Jr();if(ut){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),Ct===null)throw Error(i(349));(Ai&30)!==0||Df(l,n,a)}h.memoizedState=a;var y={value:a,getSnapshot:n};return h.queue=y,Wf(Bf.bind(null,l,y,t),[t]),l.flags|=2048,wo(9,Mf.bind(null,l,y,a,n),void 0,null),a},useId:function(){var t=Jr(),n=Ct.identifierPrefix;if(ut){var a=fe,l=ue;a=(l&~(1<<32-ar(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=yo++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=V_++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},K_={readContext:_r,useCallback:Gf,useContext:_r,useEffect:Dd,useImperativeHandle:Hf,useInsertionEffect:Vf,useLayoutEffect:Ff,useMemo:Kf,useReducer:Ad,useRef:jf,useState:function(){return Ad(vo)},useDebugValue:Md,useDeferredValue:function(t){var n=$r();return Qf(n,$t.memoizedState,t)},useTransition:function(){var t=Ad(vo)[0],n=$r().memoizedState;return[t,n]},useMutableSource:Af,useSyncExternalStore:Rf,useId:Zf,unstable_isNewReconciler:!1},Q_={readContext:_r,useCallback:Gf,useContext:_r,useEffect:Dd,useImperativeHandle:Hf,useInsertionEffect:Vf,useLayoutEffect:Ff,useMemo:Kf,useReducer:Rd,useRef:jf,useState:function(){return Rd(vo)},useDebugValue:Md,useDeferredValue:function(t){var n=$r();return $t===null?n.memoizedState=t:Qf(n,$t.memoizedState,t)},useTransition:function(){var t=Rd(vo)[0],n=$r().memoizedState;return[t,n]},useMutableSource:Af,useSyncExternalStore:Rf,useId:Zf,unstable_isNewReconciler:!1};function Ar(t,n){if(t&&t.defaultProps){n=se({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function Bd(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:se({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=Gt(),h=ni(t),y=yn(l,h);y.payload=n,a!=null&&(y.callback=a),n=Jn(t,y,h),n!==null&&(Mr(n,t,h,l),Pu(n,t,h))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=Gt(),h=ni(t),y=yn(l,h);y.tag=1,y.payload=n,a!=null&&(y.callback=a),n=Jn(t,y,h),n!==null&&(Mr(n,t,h,l),Pu(n,t,h))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Gt(),l=ni(t),h=yn(a,l);h.tag=2,n!=null&&(h.callback=n),n=Jn(t,h,l),n!==null&&(Mr(n,t,l,a),Pu(n,t,l))}};function eh(t,n,a,l,h,y,k){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,y,k):n.prototype&&n.prototype.isPureReactComponent?!jn(a,l)||!jn(h,y):!0}function th(t,n,a){var l=!1,h=Yr,y=n.contextType;return typeof y=="object"&&y!==null?y=_r(y):(h=Ut(n)?mn:Et.current,l=n.contextTypes,y=(l=l!=null)?Zn(t,h):Yr),n=new n(a,y),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hu,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=y),n}function rh(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Hu.enqueueReplaceState(n,n.state,null)}function Pd(t,n,a,l){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},Sd(t);var y=n.contextType;typeof y=="object"&&y!==null?h.context=_r(y):(y=Ut(n)?mn:Et.current,h.context=Zn(t,y)),h.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(Bd(t,n,y,a),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(n=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),n!==h.state&&Hu.enqueueReplaceState(h,h.state,null),Lu(t,a,h,l),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ka(t,n){try{var a="",l=n;do a+=ve(l),l=l.return;while(l);var h=a}catch(y){h=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:n,stack:h,digest:null}}function Ld(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function Ud(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function nh(t,n,a){a=yn(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Ju||(Ju=!0,tc=l),Ud(t,n)},a}function ih(t,n,a){a=yn(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var h=n.value;a.payload=function(){return l(h)},a.callback=function(){Ud(t,n)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){Ud(t,n),typeof l!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var k=n.stack;this.componentDidCatch(n.value,{componentStack:k!==null?k:""})}),a}function ah(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Z_;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(a)||(h.add(a),t=d2.bind(null,t,n,a),n.then(t,t))}function sh(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function oh(t,n,a,l,h){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=yn(-1,1),n.tag=2,Jn(a,n,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Y_=D.ReactCurrentOwner,Jt=!1;function Ht(t,n,a,l){n.child=t===null?Tf(n,null,a,l):Fa(n,t.child,a,l)}function uh(t,n,a,l,h){a=a.render;var y=n.ref;return Ha(n,h),l=Nd(t,n,a,l,y,h),a=Od(),t!==null&&!Jt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,vn(t,n,h)):(ut&&a&&Xe(n),n.flags|=1,Ht(t,n,l,h),n.child)}function lh(t,n,a,l,h){if(t===null){var y=a.type;return typeof y=="function"&&!uc(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=y,dh(t,n,y,l,h)):(t=al(a.type,null,l,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(y=t.child,(t.lanes&h)===0){var k=y.memoizedProps;if(a=a.compare,a=a!==null?a:jn,a(k,l)&&t.ref===n.ref)return vn(t,n,h)}return n.flags|=1,t=ai(y,l),t.ref=n.ref,t.return=n,n.child=t}function dh(t,n,a,l,h){if(t!==null){var y=t.memoizedProps;if(jn(y,l)&&t.ref===n.ref)if(Jt=!1,n.pendingProps=l=y,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Jt=!0);else return n.lanes=t.lanes,vn(t,n,h)}return jd(t,n,a,l,h)}function ch(t,n,a){var l=n.pendingProps,h=l.children,y=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Za,ur),ur|=a;else{if((a&1073741824)===0)return t=y!==null?y.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,at(Za,ur),ur|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=y!==null?y.baseLanes:a,at(Za,ur),ur|=l}else y!==null?(l=y.baseLanes|a,n.memoizedState=null):l=a,at(Za,ur),ur|=l;return Ht(t,n,h,a),n.child}function ph(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function jd(t,n,a,l,h){var y=Ut(a)?mn:Et.current;return y=Zn(n,y),Ha(n,h),a=Nd(t,n,a,l,y,h),l=Od(),t!==null&&!Jt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,vn(t,n,h)):(ut&&l&&Xe(n),n.flags|=1,Ht(t,n,a,h),n.child)}function fh(t,n,a,l,h){if(Ut(a)){var y=!0;ja(n)}else y=!1;if(Ha(n,h),n.stateNode===null)Ku(t,n),th(n,a,l),Pd(n,a,l,h),l=!0;else if(t===null){var k=n.stateNode,M=n.memoizedProps;k.props=M;var L=k.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=_r(Q):(Q=Ut(a)?mn:Et.current,Q=Zn(n,Q));var oe=a.getDerivedStateFromProps,le=typeof oe=="function"||typeof k.getSnapshotBeforeUpdate=="function";le||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(M!==l||L!==Q)&&rh(n,k,l,Q),Xn=!1;var ie=n.memoizedState;k.state=ie,Lu(n,l,k,h),L=n.memoizedState,M!==l||ie!==L||Lt.current||Xn?(typeof oe=="function"&&(Bd(n,a,oe,l),L=n.memoizedState),(M=Xn||eh(n,a,M,l,ie,L,Q))?(le||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(n.flags|=4194308)):(typeof k.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=L),k.props=l,k.state=L,k.context=Q,l=M):(typeof k.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{k=n.stateNode,If(t,n),M=n.memoizedProps,Q=n.type===n.elementType?M:Ar(n.type,M),k.props=Q,le=n.pendingProps,ie=k.context,L=a.contextType,typeof L=="object"&&L!==null?L=_r(L):(L=Ut(a)?mn:Et.current,L=Zn(n,L));var we=a.getDerivedStateFromProps;(oe=typeof we=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(M!==le||ie!==L)&&rh(n,k,l,L),Xn=!1,ie=n.memoizedState,k.state=ie,Lu(n,l,k,h);var Se=n.memoizedState;M!==le||ie!==Se||Lt.current||Xn?(typeof we=="function"&&(Bd(n,a,we,l),Se=n.memoizedState),(Q=Xn||eh(n,a,Q,l,ie,Se,L)||!1)?(oe||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(l,Se,L),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(l,Se,L)),typeof k.componentDidUpdate=="function"&&(n.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof k.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Se),k.props=l,k.state=Se,k.context=L,l=Q):(typeof k.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),l=!1)}return Wd(t,n,a,l,y,h)}function Wd(t,n,a,l,h,y){ph(t,n);var k=(n.flags&128)!==0;if(!l&&!k)return h&&Ou(n,a,!1),vn(t,n,y);l=n.stateNode,Y_.current=n;var M=k&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&k?(n.child=Fa(n,t.child,null,y),n.child=Fa(n,null,M,y)):Ht(t,n,M,y),n.memoizedState=l.state,h&&Ou(n,a,!0),n.child}function hh(t){var n=t.stateNode;n.pendingContext?zu(t,n.pendingContext,n.pendingContext!==n.context):n.context&&zu(t,n.context,!1),kd(t,n.containerInfo)}function mh(t,n,a,l,h){return Va(),vd(h),n.flags|=256,Ht(t,n,a,l),n.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function gh(t,n,a){var l=n.pendingProps,h=mt.current,y=!1,k=(n.flags&128)!==0,M;if((M=k)||(M=t!==null&&t.memoizedState===null?!1:(h&2)!==0),M?(y=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),at(mt,h&1),t===null)return yd(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(k=l.children,t=l.fallback,y?(l=n.mode,y=n.child,k={mode:"hidden",children:k},(l&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=k):y=sl(k,l,0,null),t=Pi(t,l,a,null),y.return=n,t.return=n,y.sibling=t,n.child=y,n.child.memoizedState=Fd(a),n.memoizedState=Vd,t):qd(n,k));if(h=t.memoizedState,h!==null&&(M=h.dehydrated,M!==null))return X_(t,n,k,l,M,h,a);if(y){y=l.fallback,k=n.mode,h=t.child,M=h.sibling;var L={mode:"hidden",children:l.children};return(k&1)===0&&n.child!==h?(l=n.child,l.childLanes=0,l.pendingProps=L,n.deletions=null):(l=ai(h,L),l.subtreeFlags=h.subtreeFlags&14680064),M!==null?y=ai(M,y):(y=Pi(y,k,a,null),y.flags|=2),y.return=n,l.return=n,l.sibling=y,n.child=l,l=y,y=n.child,k=t.child.memoizedState,k=k===null?Fd(a):{baseLanes:k.baseLanes|a,cachePool:null,transitions:k.transitions},y.memoizedState=k,y.childLanes=t.childLanes&~a,n.memoizedState=Vd,l}return y=t.child,t=y.sibling,l=ai(y,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function qd(t,n){return n=sl({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Gu(t,n,a,l){return l!==null&&vd(l),Fa(n,t.child,null,a),t=qd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function X_(t,n,a,l,h,y,k){if(a)return n.flags&256?(n.flags&=-257,l=Ld(Error(i(422))),Gu(t,n,k,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(y=l.fallback,h=n.mode,l=sl({mode:"visible",children:l.children},h,0,null),y=Pi(y,h,k,null),y.flags|=2,l.return=n,y.return=n,l.sibling=y,n.child=l,(n.mode&1)!==0&&Fa(n,t.child,null,k),n.child.memoizedState=Fd(k),n.memoizedState=Vd,y);if((n.mode&1)===0)return Gu(t,n,k,null);if(h.data==="$!"){if(l=h.nextSibling&&h.nextSibling.dataset,l)var M=l.dgst;return l=M,y=Error(i(419)),l=Ld(y,l,void 0),Gu(t,n,k,l)}if(M=(k&t.childLanes)!==0,Jt||M){if(l=Ct,l!==null){switch(k&-k){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(l.suspendedLanes|k))!==0?0:h,h!==0&&h!==y.retryLane&&(y.retryLane=h,gn(t,h),Mr(l,t,h,-1))}return oc(),l=Ld(Error(i(421))),Gu(t,n,k,l)}return h.data==="$?"?(n.flags|=128,n.child=t.child,n=c2.bind(null,t),h._reactRetry=n,null):(t=y.treeContext,At=Qr(h.nextSibling),yt=n,ut=!0,qt=null,t!==null&&(R[U++]=ue,R[U++]=fe,R[U++]=Z,ue=t.id,fe=t.overflow,Z=n),n=qd(n,l.children),n.flags|=4096,n)}function yh(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),xd(t.return,n,a)}function Hd(t,n,a,l,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=h)}function vh(t,n,a){var l=n.pendingProps,h=l.revealOrder,y=l.tail;if(Ht(t,n,l.children,a),l=mt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yh(t,a,n);else if(t.tag===19)yh(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(at(mt,l),(n.mode&1)===0)n.memoizedState=null;else switch(h){case"forwards":for(a=n.child,h=null;a!==null;)t=a.alternate,t!==null&&Uu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),Hd(n,!1,h,a,y);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Uu(t)===null){n.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Hd(n,!0,a,null,y);break;case"together":Hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ku(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function vn(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ri|=n.lanes,(a&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=ai(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ai(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function J_(t,n,a){switch(n.tag){case 3:hh(n),Va();break;case 5:Of(n);break;case 1:Ut(n.type)&&ja(n);break;case 4:kd(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,h=n.memoizedProps.value;at(Mu,l._currentValue),l._currentValue=h;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(at(mt,mt.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?gh(t,n,a):(at(mt,mt.current&1),t=vn(t,n,a),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(l=(a&n.childLanes)!==0,(t.flags&128)!==0){if(l)return vh(t,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),at(mt,mt.current),l)break;return null;case 22:case 23:return n.lanes=0,ch(t,n,a)}return vn(t,n,a)}var wh,Gd,_h,$h;wh=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gd=function(){},_h=function(t,n,a,l){var h=t.memoizedProps;if(h!==l){t=n.stateNode,Oi(Xr.current);var y=null;switch(a){case"input":h=$e(t,h),l=$e(t,l),y=[];break;case"select":h=se({},h,{value:void 0}),l=se({},l,{value:void 0}),y=[];break;case"textarea":h=kn(t,h),l=kn(t,l),y=[];break;default:typeof h.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Pa)}mi(a,l);var k;a=null;for(Q in h)if(!l.hasOwnProperty(Q)&&h.hasOwnProperty(Q)&&h[Q]!=null)if(Q==="style"){var M=h[Q];for(k in M)M.hasOwnProperty(k)&&(a||(a={}),a[k]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?y||(y=[]):(y=y||[]).push(Q,null));for(Q in l){var L=l[Q];if(M=h!=null?h[Q]:void 0,l.hasOwnProperty(Q)&&L!==M&&(L!=null||M!=null))if(Q==="style")if(M){for(k in M)!M.hasOwnProperty(k)||L&&L.hasOwnProperty(k)||(a||(a={}),a[k]="");for(k in L)L.hasOwnProperty(k)&&M[k]!==L[k]&&(a||(a={}),a[k]=L[k])}else a||(y||(y=[]),y.push(Q,a)),a=L;else Q==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,M=M?M.__html:void 0,L!=null&&M!==L&&(y=y||[]).push(Q,L)):Q==="children"?typeof L!="string"&&typeof L!="number"||(y=y||[]).push(Q,""+L):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(L!=null&&Q==="onScroll"&&it("scroll",t),y||M===L||(y=[])):(y=y||[]).push(Q,L))}a&&(y=y||[]).push("style",a);var Q=y;(n.updateQueue=Q)&&(n.flags|=4)}},$h=function(t,n,a,l){a!==l&&(n.flags|=4)};function _o(t,n){if(!ut)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&14680064,l|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function e2(t,n,a){var l=n.pendingProps;switch(tt(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Ut(n.type)&&Ua(),Wt(n),null;case 3:return l=n.stateNode,Ga(),st(Lt),st(Et),Cd(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ru(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qt!==null&&(ic(qt),qt=null))),Gd(t,n),Wt(n),null;case 5:Ed(n);var h=Oi(mo.current);if(a=n.type,t!==null&&n.stateNode!=null)_h(t,n,a,l,h),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Wt(n),null}if(t=Oi(Xr.current),Ru(n)){l=n.stateNode,a=n.type;var y=n.memoizedProps;switch(l[wr]=n,l[Ii]=y,t=(n.mode&1)!==0,a){case"dialog":it("cancel",l),it("close",l);break;case"iframe":case"object":case"embed":it("load",l);break;case"video":case"audio":for(h=0;h<Vn.length;h++)it(Vn[h],l);break;case"source":it("error",l);break;case"img":case"image":case"link":it("error",l),it("load",l);break;case"details":it("toggle",l);break;case"input":je(l,y),it("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!y.multiple},it("invalid",l);break;case"textarea":pi(l,y),it("invalid",l)}mi(a,y),h=null;for(var k in y)if(y.hasOwnProperty(k)){var M=y[k];k==="children"?typeof M=="string"?l.textContent!==M&&(y.suppressHydrationWarning!==!0&&Hn(l.textContent,M,t),h=["children",M]):typeof M=="number"&&l.textContent!==""+M&&(y.suppressHydrationWarning!==!0&&Hn(l.textContent,M,t),h=["children",""+M]):o.hasOwnProperty(k)&&M!=null&&k==="onScroll"&&it("scroll",l)}switch(a){case"input":Qt(l),kt(l,y,!0);break;case"textarea":Qt(l),os(l);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(l.onclick=Pa)}l=h,n.updateQueue=l,l!==null&&(n.flags|=4)}else{k=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kr(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=k.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=k.createElement(a,{is:l.is}):(t=k.createElement(a),a==="select"&&(k=t,l.multiple?k.multiple=!0:l.size&&(k.size=l.size))):t=k.createElementNS(t,a),t[wr]=n,t[Ii]=l,wh(t,n,!1,!1),n.stateNode=t;e:{switch(k=ps(a,l),a){case"dialog":it("cancel",t),it("close",t),h=l;break;case"iframe":case"object":case"embed":it("load",t),h=l;break;case"video":case"audio":for(h=0;h<Vn.length;h++)it(Vn[h],t);h=l;break;case"source":it("error",t),h=l;break;case"img":case"image":case"link":it("error",t),it("load",t),h=l;break;case"details":it("toggle",t),h=l;break;case"input":je(t,l),h=$e(t,l),it("invalid",t);break;case"option":h=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},h=se({},l,{value:void 0}),it("invalid",t);break;case"textarea":pi(t,l),h=kn(t,l),it("invalid",t);break;default:h=l}mi(a,h),M=h;for(y in M)if(M.hasOwnProperty(y)){var L=M[y];y==="style"?ds(t,L):y==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&fi(t,L)):y==="children"?typeof L=="string"?(a!=="textarea"||L!=="")&&hi(t,L):typeof L=="number"&&hi(t,""+L):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?L!=null&&y==="onScroll"&&it("scroll",t):L!=null&&A(t,y,L,k))}switch(a){case"input":Qt(t),kt(t,l,!1);break;case"textarea":Qt(t),os(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Be(l.value));break;case"select":t.multiple=!!l.multiple,y=l.value,y!=null?Bt(t,!!l.multiple,y,!1):l.defaultValue!=null&&Bt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=Pa)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Wt(n),null;case 6:if(t&&n.stateNode!=null)$h(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=Oi(mo.current),Oi(Xr.current),Ru(n)){if(l=n.stateNode,a=n.memoizedProps,l[wr]=n,(y=l.nodeValue!==a)&&(t=yt,t!==null))switch(t.tag){case 3:Hn(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hn(l.nodeValue,a,(t.mode&1)!==0)}y&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[wr]=n,n.stateNode=l}return Wt(n),null;case 13:if(st(mt),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&At!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sf(),Va(),n.flags|=98560,y=!1;else if(y=Ru(n),l!==null&&l.dehydrated!==null){if(t===null){if(!y)throw Error(i(318));if(y=n.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(i(317));y[wr]=n}else Va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),y=!1}else qt!==null&&(ic(qt),qt=null),y=!0;if(!y)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(mt.current&1)!==0?xt===0&&(xt=3):oc())),n.updateQueue!==null&&(n.flags|=4),Wt(n),null);case 4:return Ga(),Gd(t,n),t===null&&Fn(n.stateNode.containerInfo),Wt(n),null;case 10:return $d(n.type._context),Wt(n),null;case 17:return Ut(n.type)&&Ua(),Wt(n),null;case 19:if(st(mt),y=n.memoizedState,y===null)return Wt(n),null;if(l=(n.flags&128)!==0,k=y.rendering,k===null)if(l)_o(y,!1);else{if(xt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(k=Uu(t),k!==null){for(n.flags|=128,_o(y,!1),l=k.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)y=a,t=l,y.flags&=14680066,k=y.alternate,k===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=k.childLanes,y.lanes=k.lanes,y.child=k.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=k.memoizedProps,y.memoizedState=k.memoizedState,y.updateQueue=k.updateQueue,y.type=k.type,t=k.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return at(mt,mt.current&1|2),n.child}t=t.sibling}y.tail!==null&&ht()>Ya&&(n.flags|=128,l=!0,_o(y,!1),n.lanes=4194304)}else{if(!l)if(t=Uu(k),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),_o(y,!0),y.tail===null&&y.tailMode==="hidden"&&!k.alternate&&!ut)return Wt(n),null}else 2*ht()-y.renderingStartTime>Ya&&a!==1073741824&&(n.flags|=128,l=!0,_o(y,!1),n.lanes=4194304);y.isBackwards?(k.sibling=n.child,n.child=k):(a=y.last,a!==null?a.sibling=k:n.child=k,y.last=k)}return y.tail!==null?(n=y.tail,y.rendering=n,y.tail=n.sibling,y.renderingStartTime=ht(),n.sibling=null,a=mt.current,at(mt,l?a&1|2:a&1),n):(Wt(n),null);case 22:case 23:return sc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(ur&1073741824)!==0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function t2(t,n){switch(tt(n),n.tag){case 1:return Ut(n.type)&&Ua(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ga(),st(Lt),st(Et),Cd(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Ed(n),null;case 13:if(st(mt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Va()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return st(mt),null;case 4:return Ga(),null;case 10:return $d(n.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Qu=!1,Vt=!1,r2=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Qa(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){vt(t,n,l)}else a.current=null}function Kd(t,n,a){try{a()}catch(l){vt(t,n,l)}}var xh=!1;function n2(t,n){if(no=ga,t=Fs(),za(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var k=0,M=-1,L=-1,Q=0,oe=0,le=t,ie=null;t:for(;;){for(var we;le!==a||h!==0&&le.nodeType!==3||(M=k+h),le!==y||l!==0&&le.nodeType!==3||(L=k+l),le.nodeType===3&&(k+=le.nodeValue.length),(we=le.firstChild)!==null;)ie=le,le=we;for(;;){if(le===t)break t;if(ie===a&&++Q===h&&(M=k),ie===y&&++oe===l&&(L=k),(we=le.nextSibling)!==null)break;le=ie,ie=le.parentNode}le=we}a=M===-1||L===-1?null:{start:M,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(io={focusedElem:t,selectionRange:a},ga=!1,xe=n;xe!==null;)if(n=xe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xe=t;else for(;xe!==null;){n=xe;try{var Se=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var Te=Se.memoizedProps,wt=Se.memoizedState,q=n.stateNode,W=q.getSnapshotBeforeUpdate(n.elementType===n.type?Te:Ar(n.type,Te),wt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var H=n.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ce){vt(n,n.return,ce)}if(t=n.sibling,t!==null){t.return=n.return,xe=t;break}xe=n.return}return Se=xh,xh=!1,Se}function $o(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var h=l=l.next;do{if((h.tag&t)===t){var y=h.destroy;h.destroy=void 0,y!==void 0&&Kd(n,a,y)}h=h.next}while(h!==l)}}function Zu(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function Qd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function bh(t){var n=t.alternate;n!==null&&(t.alternate=null,bh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[wr],delete n[Ii],delete n[uo],delete n[hd],delete n[md])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sh(t){return t.tag===5||t.tag===3||t.tag===4}function kh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pa));else if(l!==4&&(t=t.child,t!==null))for(Zd(t,n,a),t=t.sibling;t!==null;)Zd(t,n,a),t=t.sibling}function Yd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yd(t,n,a),t=t.sibling;t!==null;)Yd(t,n,a),t=t.sibling}var Rt=null,Rr=!1;function ei(t,n,a){for(a=a.child;a!==null;)Eh(t,n,a),a=a.sibling}function Eh(t,n,a){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(ua,a)}catch{}switch(a.tag){case 5:Vt||Qa(a,n);case 6:var l=Rt,h=Rr;Rt=null,ei(t,n,a),Rt=l,Rr=h,Rt!==null&&(Rr?(t=Rt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Rr?(t=Rt,a=a.stateNode,t.nodeType===8?oo(t.parentNode,a):t.nodeType===1&&oo(t,a),on(t)):oo(Rt,a.stateNode));break;case 4:l=Rt,h=Rr,Rt=a.stateNode.containerInfo,Rr=!0,ei(t,n,a),Rt=l,Rr=h;break;case 0:case 11:case 14:case 15:if(!Vt&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){h=l=l.next;do{var y=h,k=y.destroy;y=y.tag,k!==void 0&&((y&2)!==0||(y&4)!==0)&&Kd(a,n,k),h=h.next}while(h!==l)}ei(t,n,a);break;case 1:if(!Vt&&(Qa(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(M){vt(a,n,M)}ei(t,n,a);break;case 21:ei(t,n,a);break;case 22:a.mode&1?(Vt=(l=Vt)||a.memoizedState!==null,ei(t,n,a),Vt=l):ei(t,n,a);break;default:ei(t,n,a)}}function Th(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new r2),n.forEach(function(l){var h=p2.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}}function Dr(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l];try{var y=t,k=n,M=k;e:for(;M!==null;){switch(M.tag){case 5:Rt=M.stateNode,Rr=!1;break e;case 3:Rt=M.stateNode.containerInfo,Rr=!0;break e;case 4:Rt=M.stateNode.containerInfo,Rr=!0;break e}M=M.return}if(Rt===null)throw Error(i(160));Eh(y,k,h),Rt=null,Rr=!1;var L=h.alternate;L!==null&&(L.return=null),h.return=null}catch(Q){vt(h,n,Q)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ch(n,t),n=n.sibling}function Ch(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dr(n,t),en(t),l&4){try{$o(3,t,t.return),Zu(3,t)}catch(Te){vt(t,t.return,Te)}try{$o(5,t,t.return)}catch(Te){vt(t,t.return,Te)}}break;case 1:Dr(n,t),en(t),l&512&&a!==null&&Qa(a,a.return);break;case 5:if(Dr(n,t),en(t),l&512&&a!==null&&Qa(a,a.return),t.flags&32){var h=t.stateNode;try{hi(h,"")}catch(Te){vt(t,t.return,Te)}}if(l&4&&(h=t.stateNode,h!=null)){var y=t.memoizedProps,k=a!==null?a.memoizedProps:y,M=t.type,L=t.updateQueue;if(t.updateQueue=null,L!==null)try{M==="input"&&y.type==="radio"&&y.name!=null&&Fe(h,y),ps(M,k);var Q=ps(M,y);for(k=0;k<L.length;k+=2){var oe=L[k],le=L[k+1];oe==="style"?ds(h,le):oe==="dangerouslySetInnerHTML"?fi(h,le):oe==="children"?hi(h,le):A(h,oe,le,Q)}switch(M){case"input":ot(h,y);break;case"textarea":ss(h,y);break;case"select":var ie=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!y.multiple;var we=y.value;we!=null?Bt(h,!!y.multiple,we,!1):ie!==!!y.multiple&&(y.defaultValue!=null?Bt(h,!!y.multiple,y.defaultValue,!0):Bt(h,!!y.multiple,y.multiple?[]:"",!1))}h[Ii]=y}catch(Te){vt(t,t.return,Te)}}break;case 6:if(Dr(n,t),en(t),l&4){if(t.stateNode===null)throw Error(i(162));h=t.stateNode,y=t.memoizedProps;try{h.nodeValue=y}catch(Te){vt(t,t.return,Te)}}break;case 3:if(Dr(n,t),en(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{on(n.containerInfo)}catch(Te){vt(t,t.return,Te)}break;case 4:Dr(n,t),en(t);break;case 13:Dr(n,t),en(t),h=t.child,h.flags&8192&&(y=h.memoizedState!==null,h.stateNode.isHidden=y,!y||h.alternate!==null&&h.alternate.memoizedState!==null||(ec=ht())),l&4&&Th(t);break;case 22:if(oe=a!==null&&a.memoizedState!==null,t.mode&1?(Vt=(Q=Vt)||oe,Dr(n,t),Vt=Q):Dr(n,t),en(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!oe&&(t.mode&1)!==0)for(xe=t,oe=t.child;oe!==null;){for(le=xe=oe;xe!==null;){switch(ie=xe,we=ie.child,ie.tag){case 0:case 11:case 14:case 15:$o(4,ie,ie.return);break;case 1:Qa(ie,ie.return);var Se=ie.stateNode;if(typeof Se.componentWillUnmount=="function"){l=ie,a=ie.return;try{n=l,Se.props=n.memoizedProps,Se.state=n.memoizedState,Se.componentWillUnmount()}catch(Te){vt(l,a,Te)}}break;case 5:Qa(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Nh(le);continue}}we!==null?(we.return=ie,xe=we):Nh(le)}oe=oe.sibling}e:for(oe=null,le=t;;){if(le.tag===5){if(oe===null){oe=le;try{h=le.stateNode,Q?(y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(M=le.stateNode,L=le.memoizedProps.style,k=L!=null&&L.hasOwnProperty("display")?L.display:null,M.style.display=ls("display",k))}catch(Te){vt(t,t.return,Te)}}}else if(le.tag===6){if(oe===null)try{le.stateNode.nodeValue=Q?"":le.memoizedProps}catch(Te){vt(t,t.return,Te)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===t)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===t)break e;for(;le.sibling===null;){if(le.return===null||le.return===t)break e;oe===le&&(oe=null),le=le.return}oe===le&&(oe=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:Dr(n,t),en(t),l&4&&Th(t);break;case 21:break;default:Dr(n,t),en(t)}}function en(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Sh(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var h=l.stateNode;l.flags&32&&(hi(h,""),l.flags&=-33);var y=kh(t);Yd(t,y,h);break;case 3:case 4:var k=l.stateNode.containerInfo,M=kh(t);Zd(t,M,k);break;default:throw Error(i(161))}}catch(L){vt(t,t.return,L)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function i2(t,n,a){xe=t,Ih(t)}function Ih(t,n,a){for(var l=(t.mode&1)!==0;xe!==null;){var h=xe,y=h.child;if(h.tag===22&&l){var k=h.memoizedState!==null||Qu;if(!k){var M=h.alternate,L=M!==null&&M.memoizedState!==null||Vt;M=Qu;var Q=Vt;if(Qu=k,(Vt=L)&&!Q)for(xe=h;xe!==null;)k=xe,L=k.child,k.tag===22&&k.memoizedState!==null?Oh(h):L!==null?(L.return=k,xe=L):Oh(h);for(;y!==null;)xe=y,Ih(y),y=y.sibling;xe=h,Qu=M,Vt=Q}zh(t)}else(h.subtreeFlags&8772)!==0&&y!==null?(y.return=h,xe=y):zh(t)}}function zh(t){for(;xe!==null;){var n=xe;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Vt||Zu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Vt)if(a===null)l.componentDidMount();else{var h=n.elementType===n.type?a.memoizedProps:Ar(n.type,a.memoizedProps);l.componentDidUpdate(h,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&Nf(n,y,l);break;case 3:var k=n.updateQueue;if(k!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Nf(n,k,a)}break;case 5:var M=n.stateNode;if(a===null&&n.flags&4){a=M;var L=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&a.focus();break;case"img":L.src&&(a.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Q=n.alternate;if(Q!==null){var oe=Q.memoizedState;if(oe!==null){var le=oe.dehydrated;le!==null&&on(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Vt||n.flags&512&&Qd(n)}catch(ie){vt(n,n.return,ie)}}if(n===t){xe=null;break}if(a=n.sibling,a!==null){a.return=n.return,xe=a;break}xe=n.return}}function Nh(t){for(;xe!==null;){var n=xe;if(n===t){xe=null;break}var a=n.sibling;if(a!==null){a.return=n.return,xe=a;break}xe=n.return}}function Oh(t){for(;xe!==null;){var n=xe;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Zu(4,n)}catch(L){vt(n,a,L)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var h=n.return;try{l.componentDidMount()}catch(L){vt(n,h,L)}}var y=n.return;try{Qd(n)}catch(L){vt(n,y,L)}break;case 5:var k=n.return;try{Qd(n)}catch(L){vt(n,k,L)}}}catch(L){vt(n,n.return,L)}if(n===t){xe=null;break}var M=n.sibling;if(M!==null){M.return=n.return,xe=M;break}xe=n.return}}var a2=Math.ceil,Yu=D.ReactCurrentDispatcher,Xd=D.ReactCurrentOwner,xr=D.ReactCurrentBatchConfig,Je=0,Ct=null,_t=null,Dt=0,ur=0,Za=Zr(0),xt=0,xo=null,Ri=0,Xu=0,Jd=0,bo=null,er=null,ec=0,Ya=1/0,wn=null,Ju=!1,tc=null,ti=null,el=!1,ri=null,tl=0,So=0,rc=null,rl=-1,nl=0;function Gt(){return(Je&6)!==0?ht():rl!==-1?rl:rl=ht()}function ni(t){return(t.mode&1)===0?1:(Je&2)!==0&&Dt!==0?Dt&-Dt:W_.transition!==null?(nl===0&&(nl=Jo()),nl):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:ou(t.type)),t)}function Mr(t,n,a,l){if(50<So)throw So=0,rc=null,Error(i(185));vi(t,a,l),((Je&2)===0||t!==Ct)&&(t===Ct&&((Je&2)===0&&(Xu|=a),xt===4&&ii(t,Dt)),tr(t,l),a===1&&Je===0&&(n.mode&1)===0&&(Ya=ht()+500,Wa&&p()))}function tr(t,n){var a=t.callbackNode;Gl(t,n);var l=da(t,t===Ct?Dt:0);if(l===0)a!==null&&yr(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&yr(a),n===1)t.tag===0?Au(Rh.bind(null,t)):co(Rh.bind(null,t)),pd(function(){(Je&6)===0&&p()}),a=null;else{switch(eu(l)){case 1:a=Er;break;case 4:a=sa;break;case 16:a=Ot;break;case 536870912:a=oa;break;default:a=Ot}a=Wh(a,Ah.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function Ah(t,n){if(rl=-1,nl=0,(Je&6)!==0)throw Error(i(327));var a=t.callbackNode;if(Xa()&&t.callbackNode!==a)return null;var l=da(t,t===Ct?Dt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=il(t,l);else{n=l;var h=Je;Je|=2;var y=Mh();(Ct!==t||Dt!==n)&&(wn=null,Ya=ht()+500,Mi(t,n));do try{u2();break}catch(M){Dh(t,M)}while(!0);_d(),Yu.current=y,Je=h,_t!==null?n=0:(Ct=null,Dt=0,n=xt)}if(n!==0){if(n===2&&(h=$s(t),h!==0&&(l=h,n=nc(t,h))),n===1)throw a=xo,Mi(t,0),ii(t,l),tr(t,ht()),a;if(n===6)ii(t,l);else{if(h=t.current.alternate,(l&30)===0&&!s2(h)&&(n=il(t,l),n===2&&(y=$s(t),y!==0&&(l=y,n=nc(t,y))),n===1))throw a=xo,Mi(t,0),ii(t,l),tr(t,ht()),a;switch(t.finishedWork=h,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Bi(t,er,wn);break;case 3:if(ii(t,l),(l&130023424)===l&&(n=ec+500-ht(),10<n)){if(da(t,0)!==0)break;if(h=t.suspendedLanes,(h&l)!==l){Gt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=so(Bi.bind(null,t,er,wn),n);break}Bi(t,er,wn);break;case 4:if(ii(t,l),(l&4194240)===l)break;for(n=t.eventTimes,h=-1;0<l;){var k=31-ar(l);y=1<<k,k=n[k],k>h&&(h=k),l&=~y}if(l=h,l=ht()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*a2(l/1960))-l,10<l){t.timeoutHandle=so(Bi.bind(null,t,er,wn),l);break}Bi(t,er,wn);break;case 5:Bi(t,er,wn);break;default:throw Error(i(329))}}}return tr(t,ht()),t.callbackNode===a?Ah.bind(null,t):null}function nc(t,n){var a=bo;return t.current.memoizedState.isDehydrated&&(Mi(t,n).flags|=256),t=il(t,n),t!==2&&(n=er,er=a,n!==null&&ic(n)),t}function ic(t){er===null?er=t:er.push.apply(er,t)}function s2(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var h=a[l],y=h.getSnapshot;h=h.value;try{if(!Xt(y(),h))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ii(t,n){for(n&=~Jd,n&=~Xu,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-ar(n),l=1<<a;t[a]=-1,n&=~l}}function Rh(t){if((Je&6)!==0)throw Error(i(327));Xa();var n=da(t,0);if((n&1)===0)return tr(t,ht()),null;var a=il(t,n);if(t.tag!==0&&a===2){var l=$s(t);l!==0&&(n=l,a=nc(t,l))}if(a===1)throw a=xo,Mi(t,0),ii(t,n),tr(t,ht()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Bi(t,er,wn),tr(t,ht()),null}function ac(t,n){var a=Je;Je|=1;try{return t(n)}finally{Je=a,Je===0&&(Ya=ht()+500,Wa&&p())}}function Di(t){ri!==null&&ri.tag===0&&(Je&6)===0&&Xa();var n=Je;Je|=1;var a=xr.transition,l=Ze;try{if(xr.transition=null,Ze=1,t)return t()}finally{Ze=l,xr.transition=a,Je=n,(Je&6)===0&&p()}}function sc(){ur=Za.current,st(Za)}function Mi(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,cd(a)),_t!==null)for(a=_t.return;a!==null;){var l=a;switch(tt(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ua();break;case 3:Ga(),st(Lt),st(Et),Cd();break;case 5:Ed(l);break;case 4:Ga();break;case 13:st(mt);break;case 19:st(mt);break;case 10:$d(l.type._context);break;case 22:case 23:sc()}a=a.return}if(Ct=t,_t=t=ai(t.current,null),Dt=ur=n,xt=0,xo=null,Jd=Xu=Ri=0,er=bo=null,Ni!==null){for(n=0;n<Ni.length;n++)if(a=Ni[n],l=a.interleaved,l!==null){a.interleaved=null;var h=l.next,y=a.pending;if(y!==null){var k=y.next;y.next=h,l.next=k}a.pending=l}Ni=null}return t}function Dh(t,n){do{var a=_t;try{if(_d(),ju.current=qu,Wu){for(var l=gt.memoizedState;l!==null;){var h=l.queue;h!==null&&(h.pending=null),l=l.next}Wu=!1}if(Ai=0,Tt=$t=gt=null,go=!1,yo=0,Xd.current=null,a===null||a.return===null){xt=1,xo=n,_t=null;break}e:{var y=t,k=a.return,M=a,L=n;if(n=Dt,M.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Q=L,oe=M,le=oe.tag;if((oe.mode&1)===0&&(le===0||le===11||le===15)){var ie=oe.alternate;ie?(oe.updateQueue=ie.updateQueue,oe.memoizedState=ie.memoizedState,oe.lanes=ie.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var we=sh(k);if(we!==null){we.flags&=-257,oh(we,k,M,y,n),we.mode&1&&ah(y,Q,n),n=we,L=Q;var Se=n.updateQueue;if(Se===null){var Te=new Set;Te.add(L),n.updateQueue=Te}else Se.add(L);break e}else{if((n&1)===0){ah(y,Q,n),oc();break e}L=Error(i(426))}}else if(ut&&M.mode&1){var wt=sh(k);if(wt!==null){(wt.flags&65536)===0&&(wt.flags|=256),oh(wt,k,M,y,n),vd(Ka(L,M));break e}}y=L=Ka(L,M),xt!==4&&(xt=2),bo===null?bo=[y]:bo.push(y),y=k;do{switch(y.tag){case 3:y.flags|=65536,n&=-n,y.lanes|=n;var q=nh(y,L,n);zf(y,q);break e;case 1:M=L;var W=y.type,H=y.stateNode;if((y.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(ti===null||!ti.has(H)))){y.flags|=65536,n&=-n,y.lanes|=n;var ce=ih(y,M,n);zf(y,ce);break e}}y=y.return}while(y!==null)}Ph(a)}catch(Ce){n=Ce,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function Mh(){var t=Yu.current;return Yu.current=qu,t===null?qu:t}function oc(){(xt===0||xt===3||xt===2)&&(xt=4),Ct===null||(Ri&268435455)===0&&(Xu&268435455)===0||ii(Ct,Dt)}function il(t,n){var a=Je;Je|=2;var l=Mh();(Ct!==t||Dt!==n)&&(wn=null,Mi(t,n));do try{o2();break}catch(h){Dh(t,h)}while(!0);if(_d(),Je=a,Yu.current=l,_t!==null)throw Error(i(261));return Ct=null,Dt=0,xt}function o2(){for(;_t!==null;)Bh(_t)}function u2(){for(;_t!==null&&!Yo();)Bh(_t)}function Bh(t){var n=jh(t.alternate,t,ur);t.memoizedProps=t.pendingProps,n===null?Ph(t):_t=n,Xd.current=null}function Ph(t){var n=t;do{var a=n.alternate;if(t=n.return,(n.flags&32768)===0){if(a=e2(a,n,ur),a!==null){_t=a;return}}else{if(a=t2(a,n),a!==null){a.flags&=32767,_t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,_t=null;return}}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);xt===0&&(xt=5)}function Bi(t,n,a){var l=Ze,h=xr.transition;try{xr.transition=null,Ze=1,l2(t,n,a,l)}finally{xr.transition=h,Ze=l}return null}function l2(t,n,a,l){do Xa();while(ri!==null);if((Je&6)!==0)throw Error(i(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var y=a.lanes|a.childLanes;if(Kl(t,y),t===Ct&&(_t=Ct=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Wh(Ot,function(){return Xa(),null})),y=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||y){y=xr.transition,xr.transition=null;var k=Ze;Ze=1;var M=Je;Je|=4,Xd.current=null,n2(t,a),Ch(a,t),$u(io),ga=!!no,io=no=null,t.current=a,i2(a),Wl(),Je=M,Ze=k,xr.transition=y}else t.current=a;if(el&&(el=!1,ri=t,tl=h),y=t.pendingLanes,y===0&&(ti=null),Vl(a.stateNode),tr(t,ht()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)h=n[a],l(h.value,{componentStack:h.stack,digest:h.digest});if(Ju)throw Ju=!1,t=tc,tc=null,t;return(tl&1)!==0&&t.tag!==0&&Xa(),y=t.pendingLanes,(y&1)!==0?t===rc?So++:(So=0,rc=t):So=0,p(),null}function Xa(){if(ri!==null){var t=eu(tl),n=xr.transition,a=Ze;try{if(xr.transition=null,Ze=16>t?16:t,ri===null)var l=!1;else{if(t=ri,ri=null,tl=0,(Je&6)!==0)throw Error(i(331));var h=Je;for(Je|=4,xe=t.current;xe!==null;){var y=xe,k=y.child;if((xe.flags&16)!==0){var M=y.deletions;if(M!==null){for(var L=0;L<M.length;L++){var Q=M[L];for(xe=Q;xe!==null;){var oe=xe;switch(oe.tag){case 0:case 11:case 15:$o(8,oe,y)}var le=oe.child;if(le!==null)le.return=oe,xe=le;else for(;xe!==null;){oe=xe;var ie=oe.sibling,we=oe.return;if(bh(oe),oe===Q){xe=null;break}if(ie!==null){ie.return=we,xe=ie;break}xe=we}}}var Se=y.alternate;if(Se!==null){var Te=Se.child;if(Te!==null){Se.child=null;do{var wt=Te.sibling;Te.sibling=null,Te=wt}while(Te!==null)}}xe=y}}if((y.subtreeFlags&2064)!==0&&k!==null)k.return=y,xe=k;else e:for(;xe!==null;){if(y=xe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:$o(9,y,y.return)}var q=y.sibling;if(q!==null){q.return=y.return,xe=q;break e}xe=y.return}}var W=t.current;for(xe=W;xe!==null;){k=xe;var H=k.child;if((k.subtreeFlags&2064)!==0&&H!==null)H.return=k,xe=H;else e:for(k=W;xe!==null;){if(M=xe,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Zu(9,M)}}catch(Ce){vt(M,M.return,Ce)}if(M===k){xe=null;break e}var ce=M.sibling;if(ce!==null){ce.return=M.return,xe=ce;break e}xe=M.return}}if(Je=h,p(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(ua,t)}catch{}l=!0}return l}finally{Ze=a,xr.transition=n}}return!1}function Lh(t,n,a){n=Ka(a,n),n=nh(t,n,1),t=Jn(t,n,1),n=Gt(),t!==null&&(vi(t,1,n),tr(t,n))}function vt(t,n,a){if(t.tag===3)Lh(t,t,a);else for(;n!==null;){if(n.tag===3){Lh(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ti===null||!ti.has(l))){t=Ka(a,t),t=ih(n,t,1),n=Jn(n,t,1),t=Gt(),n!==null&&(vi(n,1,t),tr(n,t));break}}n=n.return}}function d2(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=Gt(),t.pingedLanes|=t.suspendedLanes&a,Ct===t&&(Dt&a)===a&&(xt===4||xt===3&&(Dt&130023424)===Dt&&500>ht()-ec?Mi(t,0):Jd|=a),tr(t,n)}function Uh(t,n){n===0&&((t.mode&1)===0?n=1:(n=la,la<<=1,(la&130023424)===0&&(la=4194304)));var a=Gt();t=gn(t,n),t!==null&&(vi(t,n,a),tr(t,a))}function c2(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Uh(t,a)}function p2(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Uh(t,a)}var jh;jh=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Lt.current)Jt=!0;else{if((t.lanes&a)===0&&(n.flags&128)===0)return Jt=!1,J_(t,n,a);Jt=(t.flags&131072)!==0}else Jt=!1,ut&&(n.flags&1048576)!==0&&qe(n,z,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ku(t,n),t=n.pendingProps;var h=Zn(n,Et.current);Ha(n,a),h=Nd(null,n,l,t,h,a);var y=Od();return n.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ut(l)?(y=!0,ja(n)):y=!1,n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Sd(n),h.updater=Hu,n.stateNode=h,h._reactInternals=n,Pd(n,l,t,a),n=Wd(null,n,l,!0,y,a)):(n.tag=0,ut&&y&&Xe(n),Ht(null,n,h,a),n=n.child),n;case 16:l=n.elementType;e:{switch(Ku(t,n),t=n.pendingProps,h=l._init,l=h(l._payload),n.type=l,h=n.tag=h2(l),t=Ar(l,t),h){case 0:n=jd(null,n,l,t,a);break e;case 1:n=fh(null,n,l,t,a);break e;case 11:n=uh(null,n,l,t,a);break e;case 14:n=lh(null,n,l,Ar(l.type,t),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Ar(l,h),jd(t,n,l,h,a);case 1:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Ar(l,h),fh(t,n,l,h,a);case 3:e:{if(hh(n),t===null)throw Error(i(387));l=n.pendingProps,y=n.memoizedState,h=y.element,If(t,n),Lu(n,l,null,a);var k=n.memoizedState;if(l=k.element,y.isDehydrated)if(y={element:l,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},n.updateQueue.baseState=y,n.memoizedState=y,n.flags&256){h=Ka(Error(i(423)),n),n=mh(t,n,l,a,h);break e}else if(l!==h){h=Ka(Error(i(424)),n),n=mh(t,n,l,a,h);break e}else for(At=Qr(n.stateNode.containerInfo.firstChild),yt=n,ut=!0,qt=null,a=Tf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Va(),l===h){n=vn(t,n,a);break e}Ht(t,n,l,a)}n=n.child}return n;case 5:return Of(n),t===null&&yd(n),l=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,k=h.children,ao(l,h)?k=null:y!==null&&ao(l,y)&&(n.flags|=32),ph(t,n),Ht(t,n,k,a),n.child;case 6:return t===null&&yd(n),null;case 13:return gh(t,n,a);case 4:return kd(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Fa(n,null,l,a):Ht(t,n,l,a),n.child;case 11:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Ar(l,h),uh(t,n,l,h,a);case 7:return Ht(t,n,n.pendingProps,a),n.child;case 8:return Ht(t,n,n.pendingProps.children,a),n.child;case 12:return Ht(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,h=n.pendingProps,y=n.memoizedProps,k=h.value,at(Mu,l._currentValue),l._currentValue=k,y!==null)if(Xt(y.value,k)){if(y.children===h.children&&!Lt.current){n=vn(t,n,a);break e}}else for(y=n.child,y!==null&&(y.return=n);y!==null;){var M=y.dependencies;if(M!==null){k=y.child;for(var L=M.firstContext;L!==null;){if(L.context===l){if(y.tag===1){L=yn(-1,a&-a),L.tag=2;var Q=y.updateQueue;if(Q!==null){Q=Q.shared;var oe=Q.pending;oe===null?L.next=L:(L.next=oe.next,oe.next=L),Q.pending=L}}y.lanes|=a,L=y.alternate,L!==null&&(L.lanes|=a),xd(y.return,a,n),M.lanes|=a;break}L=L.next}}else if(y.tag===10)k=y.type===n.type?null:y.child;else if(y.tag===18){if(k=y.return,k===null)throw Error(i(341));k.lanes|=a,M=k.alternate,M!==null&&(M.lanes|=a),xd(k,a,n),k=y.sibling}else k=y.child;if(k!==null)k.return=y;else for(k=y;k!==null;){if(k===n){k=null;break}if(y=k.sibling,y!==null){y.return=k.return,k=y;break}k=k.return}y=k}Ht(t,n,h.children,a),n=n.child}return n;case 9:return h=n.type,l=n.pendingProps.children,Ha(n,a),h=_r(h),l=l(h),n.flags|=1,Ht(t,n,l,a),n.child;case 14:return l=n.type,h=Ar(l,n.pendingProps),h=Ar(l.type,h),lh(t,n,l,h,a);case 15:return dh(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Ar(l,h),Ku(t,n),n.tag=1,Ut(l)?(t=!0,ja(n)):t=!1,Ha(n,a),th(n,l,h),Pd(n,l,h,a),Wd(null,n,l,!0,t,a);case 19:return vh(t,n,a);case 22:return ch(t,n,a)}throw Error(i(156,n.tag))};function Wh(t,n){return an(t,n)}function f2(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(t,n,a,l){return new f2(t,n,a,l)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h2(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===he)return 14}return 2}function ai(t,n){var a=t.alternate;return a===null?(a=br(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function al(t,n,a,l,h,y){var k=2;if(l=t,typeof t=="function")uc(t)&&(k=1);else if(typeof t=="string")k=5;else e:switch(t){case V:return Pi(a.children,h,y,n);case I:k=8,h|=8;break;case Y:return t=br(12,a,n,h|2),t.elementType=Y,t.lanes=y,t;case pe:return t=br(13,a,n,h),t.elementType=pe,t.lanes=y,t;case G:return t=br(19,a,n,h),t.elementType=G,t.lanes=y,t;case ge:return sl(a,h,y,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case te:k=10;break e;case me:k=9;break e;case de:k=11;break e;case he:k=14;break e;case ye:k=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=br(k,a,n,h),n.elementType=t,n.type=l,n.lanes=y,n}function Pi(t,n,a,l){return t=br(7,t,l,n),t.lanes=a,t}function sl(t,n,a,l){return t=br(22,t,l,n),t.elementType=ge,t.lanes=a,t.stateNode={isHidden:!1},t}function lc(t,n,a){return t=br(6,t,null,n),t.lanes=a,t}function dc(t,n,a){return n=br(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function m2(t,n,a,l,h){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=l,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function cc(t,n,a,l,h,y,k,M,L){return t=new m2(t,n,a,M,L),n===1?(n=1,y===!0&&(n|=8)):n=0,y=br(3,null,null,n),t.current=y,y.stateNode=t,y.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(y),t}function g2(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function Vh(t){if(!t)return Yr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ut(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Ut(a))return Nu(t,a,n)}return n}function Fh(t,n,a,l,h,y,k,M,L){return t=cc(a,l,!0,t,h,y,k,M,L),t.context=Vh(null),a=t.current,l=Gt(),h=ni(a),y=yn(l,h),y.callback=n??null,Jn(a,y,h),t.current.lanes=h,vi(t,h,l),tr(t,l),t}function ol(t,n,a,l){var h=n.current,y=Gt(),k=ni(h);return a=Vh(a),n.context===null?n.context=a:n.pendingContext=a,n=yn(y,k),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Jn(h,n,k),t!==null&&(Mr(t,h,k,y),Pu(t,h,k)),k}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function pc(t,n){qh(t,n),(t=t.alternate)&&qh(t,n)}function y2(){return null}var Hh=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}ll.prototype.render=fc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));ol(t,n,null,null)},ll.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Di(function(){ol(null,t,null,null)}),n[Nr]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var n=pa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Tr.length&&n!==0&&n<Tr[a].priority;a++);Tr.splice(a,0,t),a===0&&iu(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function v2(t,n,a,l,h){if(h){if(typeof l=="function"){var y=l;l=function(){var Q=ul(k);y.call(Q)}}var k=Fh(n,l,t,0,null,!1,!1,"",Gh);return t._reactRootContainer=k,t[Nr]=k.current,Fn(t.nodeType===8?t.parentNode:t),Di(),k}for(;h=t.lastChild;)t.removeChild(h);if(typeof l=="function"){var M=l;l=function(){var Q=ul(L);M.call(Q)}}var L=cc(t,0,!1,null,null,!1,!1,"",Gh);return t._reactRootContainer=L,t[Nr]=L.current,Fn(t.nodeType===8?t.parentNode:t),Di(function(){ol(n,L,a,l)}),L}function cl(t,n,a,l,h){var y=a._reactRootContainer;if(y){var k=y;if(typeof h=="function"){var M=h;h=function(){var L=ul(k);M.call(L)}}ol(n,k,t,h)}else k=v2(a,n,t,h,l);return ul(k)}ca=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=Nn(n.pendingLanes);a!==0&&(bs(n,a|1),tr(n,ht()),(Je&6)===0&&(Ya=ht()+500,p()))}break;case 13:Di(function(){var l=gn(t,1);if(l!==null){var h=Gt();Mr(l,t,1,h)}}),pc(t,1)}},On=function(t){if(t.tag===13){var n=gn(t,134217728);if(n!==null){var a=Gt();Mr(n,t,134217728,a)}pc(t,134217728)}},tu=function(t){if(t.tag===13){var n=ni(t),a=gn(t,n);if(a!==null){var l=Gt();Mr(a,t,n,l)}pc(t,n)}},pa=function(){return Ze},ru=function(t,n){var a=Ze;try{return Ze=t,n()}finally{Ze=a}},ms=function(t,n,a){switch(n){case"input":if(ot(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var h=La(l);if(!h)throw Error(i(90));Mt(l),ot(l,h)}}}break;case"textarea":ss(t,a);break;case"select":n=a.value,n!=null&&Bt(t,!!a.multiple,n,!1)}},vs=ac,ws=Di;var w2={usingClientEntryPoint:!1,Events:[zi,Kn,La,ys,qo,ac]},ko={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_2={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ia(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ua=pl.inject(_2),vr=pl}catch{}}return rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w2,rr.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(n))throw Error(i(200));return g2(t,n,null,a)},rr.createRoot=function(t,n){if(!hc(t))throw Error(i(299));var a=!1,l="",h=Hh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=cc(t,1,!1,null,null,a,!1,l,h),t[Nr]=n.current,Fn(t.nodeType===8?t.parentNode:t),new fc(n)},rr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=ia(n),t=t===null?null:t.stateNode,t},rr.flushSync=function(t){return Di(t)},rr.hydrate=function(t,n,a){if(!dl(n))throw Error(i(200));return cl(null,t,n,!0,a)},rr.hydrateRoot=function(t,n,a){if(!hc(t))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,h=!1,y="",k=Hh;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(k=a.onRecoverableError)),n=Fh(n,null,t,1,a??null,h,!1,y,k),t[Nr]=n.current,Fn(t),l)for(t=0;t<l.length;t++)a=l[t],h=a._getVersion,h=h(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,h]:n.mutableSourceEagerHydrationData.push(a,h);return new ll(n)},rr.render=function(t,n,a){if(!dl(n))throw Error(i(200));return cl(null,t,n,!1,a)},rr.unmountComponentAtNode=function(t){if(!dl(t))throw Error(i(40));return t._reactRootContainer?(Di(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Nr]=null})}),!0):!1},rr.unstable_batchedUpdates=ac,rr.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!dl(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return cl(t,n,a,!1,l)},rr.version="18.3.1-next-f1338f8080-20240426",rr}var rm;function O2(){if(rm)return yc.exports;rm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),yc.exports=N2(),yc.exports}var nm;function A2(){if(nm)return fl;nm=1;var e=O2();return fl.createRoot=e.createRoot,fl.hydrateRoot=e.hydrateRoot,fl}var R2=A2();function D2({mode:e,setMode:r,challengeNumber:i,streak:s,onOpenHelp:o,onOpenStats:u,onJumpToContext:d}){return j.jsx("header",{className:"app-header",children:j.jsxs("div",{className:"header-inner",children:[j.jsxs("div",{className:"brand-group",children:[j.jsxs("div",{className:"brand-logo","aria-hidden":"true",children:[j.jsx("span",{className:"dot dot-top"}),j.jsx("span",{className:"dot dot-left"}),j.jsx("span",{className:"dot dot-right"})]}),j.jsx("div",{children:j.jsxs("div",{className:"brand-title-row",children:[j.jsx("h1",{className:"brand-title",children:"PYRAMIDLE"}),j.jsxs("span",{className:"daily-badge",children:["#",i]})]})})]}),j.jsxs("nav",{className:"mode-tabs","aria-label":"Modo de jogo",children:[j.jsx("button",{type:"button",className:`mode-tab ${e==="daily"?"active":""}`,onClick:()=>r("daily"),children:"Desafio Diário"}),j.jsx("button",{type:"button",className:`mode-tab ${e==="free"?"active":""}`,onClick:()=>r("free"),children:"Modo Livre"})]}),j.jsxs("div",{className:"header-actions",children:[j.jsx("button",{type:"button",className:"text-link-btn",onClick:d,title:"Ver explicação técnica em slides",children:"Como Funciona"}),j.jsxs("div",{className:"streak-pill",title:"Sequência de dias seguidos",children:[j.jsx("span",{className:"streak-label",children:"Sequência"}),j.jsx("strong",{children:s})]}),j.jsx("button",{type:"button",className:"icon-btn",onClick:u,title:"Estatísticas","aria-label":"Estatísticas",children:"Stats"}),j.jsx("button",{type:"button",className:"icon-btn",onClick:o,title:"Regras do jogo","aria-label":"Regras",children:"Regras"})]})]})})}function M2({geometry:e,state:r,onBallClick:i,lastAiAction:s,solving:o,solved:u,showRadiusPreview:d}){const[c,f]=nt.useState(null),{balls:m,adjMatrix:v,radius:w,width:$,height:S}=e,b=new Set;c!==null&&v[c]&&v[c].forEach((N,E)=>{N===1&&b.add(E)});const C=c!==null?m[c]:null;return j.jsxs("div",{className:`board-card ${u?"board-solved":""}`,children:[j.jsxs("div",{className:"board-top-bar",children:[j.jsxs("div",{className:"legend-row",children:[j.jsxs("span",{className:"legend-item",children:[j.jsx("span",{className:"legend-ball white"})," Branca"]}),j.jsxs("span",{className:"legend-item",children:[j.jsx("span",{className:"legend-ball black"})," Preta (Alvo)"]}),s!==null&&j.jsxs("span",{className:"legend-item ai-legend",children:[j.jsx("span",{className:"legend-ball ai-ring"})," Passo Automático"]})]}),u&&j.jsx("span",{className:"solved-inline-tag",children:"Pirâmide Concluída"})]}),j.jsx("div",{className:"svg-wrapper",children:j.jsxs("svg",{viewBox:`0 0 ${$} ${S}`,className:"pyramid-svg",onMouseLeave:()=>f(null),children:[j.jsxs("defs",{children:[j.jsxs("radialGradient",{id:"ballBlackGrad",cx:"35%",cy:"30%",r:"70%",children:[j.jsx("stop",{offset:"0%",stopColor:"#475569"}),j.jsx("stop",{offset:"55%",stopColor:"#0f172a"}),j.jsx("stop",{offset:"100%",stopColor:"#020617"})]}),j.jsxs("radialGradient",{id:"ballWhiteGrad",cx:"35%",cy:"30%",r:"70%",children:[j.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),j.jsx("stop",{offset:"65%",stopColor:"#e2e8f0"}),j.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),j.jsxs("filter",{id:"aiGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[j.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),j.jsxs("feMerge",{children:[j.jsx("feMergeNode",{in:"blur"}),j.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),d&&C&&!o&&j.jsx("circle",{cx:C.x,cy:C.y,r:w*3,className:"radius-preview-circle"}),m.map(N=>{const E=r[N.index]===1,T=b.has(N.index),A=s===N.index;return j.jsxs("g",{className:`ball-group ${o?"disabled":""}`,onMouseEnter:()=>f(N.index),onClick:()=>!o&&i(N.index),children:[d&&T&&!o&&j.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+4,className:"affected-halo"}),j.jsx("circle",{cx:N.x,cy:N.y,r:N.radius-2,fill:E?"url(#ballBlackGrad)":"url(#ballWhiteGrad)",stroke:E?"#38bdf8":"#cbd5e1",strokeWidth:E?"2.2":"1.5",className:"ball-circle"}),A&&j.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+2,fill:"none",stroke:"#22c55e",strokeWidth:"4.5",filter:"url(#aiGlow)"})]},N.index)})]})})]})}function B2({mode:e,numBalls:r,onChangeNumBalls:i,clicks:s,aiPar:o,blackCount:u,totalBalls:d,solving:c,solved:f,canUseAi:m,onToggleSolve:v,onReset:w,onNewRandomBoard:$,showRadiusPreview:S,setShowRadiusPreview:b}){const C=Math.round(u/d*100);return j.jsxs("section",{className:"controls-panel",children:[j.jsxs("div",{className:"metrics-grid",children:[j.jsxs("div",{className:"metric-box",children:[j.jsx("span",{className:"metric-label",children:"Cliques"}),j.jsx("strong",{className:"metric-value",children:s})]}),j.jsxs("div",{className:"metric-box",children:[j.jsx("span",{className:"metric-label",children:"Referência (Par)"}),j.jsx("strong",{className:"metric-value accent",children:`${o} cliques`})]}),j.jsxs("div",{className:"metric-box",children:[j.jsx("span",{className:"metric-label",children:"Progresso"}),j.jsxs("strong",{className:"metric-value",children:[u,"/",d," (",C,"%)"]}),j.jsx("div",{className:"progress-bar-track",children:j.jsx("div",{className:"progress-bar-fill",style:{width:`${C}%`}})})]})]}),e==="daily"?j.jsx("div",{className:"size-selector-bar",children:j.jsxs("div",{className:"size-label-group",children:[j.jsxs("span",{className:"size-title",children:["Desafio Diário — Pirâmide de Base ",r," (",d," bolas)"]}),j.jsx("span",{className:"size-desc",children:"O tamanho do desafio diário alterna entre as bases 5, 6, 7 e 8 a cada dia"})]})}):j.jsxs("div",{className:"size-selector-bar",children:[j.jsxs("div",{className:"size-label-group",children:[j.jsxs("span",{className:"size-title",children:["Base da Pirâmide: ",r]}),j.jsxs("span",{className:"size-desc",children:[d," bolas no total •"," ",r<=8?"Resolução automática (IA) disponível":"Acima de 8 bolas: desafio manual (par calculado via GF(2))"]})]}),j.jsxs("div",{className:"size-controls-right",children:[j.jsx("button",{type:"button",disabled:c||r<=2,className:"size-btn",onClick:()=>i(Math.max(2,r-1)),title:"Diminuir base",children:"−"}),j.jsx("input",{type:"range",min:2,max:20,value:r,disabled:c,onChange:N=>i(Number(N.target.value)),className:"size-slider"}),j.jsx("button",{type:"button",disabled:c||r>=20,className:"size-btn",onClick:()=>i(Math.min(20,r+1)),title:"Aumentar base",children:"+"}),j.jsx("div",{className:"size-buttons",children:[3,5,6,7,8,10,12,15,20].map(N=>j.jsx("button",{type:"button",disabled:c,className:`size-btn ${r===N?"active":""} ${N>8?"human-only":""}`,onClick:()=>i(N),children:N},N))})]})]}),j.jsxs("div",{className:"actions-row",children:[j.jsxs("div",{className:"left-actions",children:[j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:w,disabled:c||s===0,children:"Reiniciar"}),e==="free"&&j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,disabled:c,children:"Novo Tabuleiro"}),j.jsxs("label",{className:"preview-toggle",children:[j.jsx("input",{type:"checkbox",checked:S,onChange:N=>b(N.target.checked)}),j.jsx("span",{children:"Visualizar alcance"})]})]}),j.jsx("div",{className:"right-actions",children:m?j.jsx("button",{type:"button",className:`btn ${c?"btn-Warning":"btn-primary"}`,onClick:v,disabled:f,children:c?"Pausar Resolução":"Resolver Passo a Passo"}):j.jsx("span",{className:"human-challenge-pill",children:"Modo Manual"})})]})]})}function P2({onBackToGame:e}){return j.jsxs(j.Fragment,{children:[j.jsx("section",{className:"snap-slide context-slide",id:"slide-math",children:j.jsxs("div",{className:"slide-content",children:[j.jsx("span",{className:"slide-kicker",children:"01 / ENGENHARIA DO TABULEIRO"}),j.jsx("h2",{className:"slide-title",children:"Como garantimos que nenhuma pirâmide seja impossível"}),j.jsx("p",{className:"slide-lead",children:"Sorteios puramente aleatórios das cores iniciais frequentemente geram tabuleiros sem solução matemática. Na pirâmide de base 3, por exemplo, 75% das combinações aleatórias são insolúveis porque as bolas intermediárias das arestas invertem exatamente o mesmo subconjunto de bolas."}),j.jsxs("div",{className:"slide-grid-two",children:[j.jsxs("div",{className:"context-card",children:[j.jsx("h3",{children:"Sistema Linear Binário — GF(2)"}),j.jsxs("p",{children:["Duas propriedades algébricas governam o jogo: a ordem dos cliques não altera o resultado final (comutatividade) e clicar duas vezes na mesma bola anula a operação (",j.jsx("code",{children:"1 XOR 1 = 0"}),")."]}),j.jsx("div",{className:"formula-box",children:"A · x ≡ b (mod 2)"}),j.jsxs("p",{className:"card-subtext",children:["Onde ",j.jsx("code",{children:"A"})," é a matriz de adjacência (distância ≤ 3r),"," ",j.jsx("code",{children:"x"})," é o vetor de cliques e ",j.jsx("code",{children:"b"})," representa as bolas que começam brancas."]})]}),j.jsxs("div",{className:"context-card",children:[j.jsx("h3",{children:"Eliminação Gaussiana com XOR"}),j.jsxs("p",{children:["Para validar um tabuleiro, o motor do jogo monta a matriz aumentada"," ",j.jsx("code",{children:"[A | b]"})," e executa o escalonamento de Gauss utilizando a operação lógica ",j.jsx("code",{children:"XOR"})," em vez de subtração."]}),j.jsxs("p",{className:"card-subtext",children:["Caso surja alguma linha com todos os coeficientes nulos igualada a 1 (",j.jsx("code",{children:"[0, 0, ..., 0 | 1]"}),"), o estado é descartado como inconsistente em microssegundos."]})]})]})]})}),j.jsx("section",{className:"snap-slide context-slide",id:"slide-ai",children:j.jsxs("div",{className:"slide-content",children:[j.jsx("span",{className:"slide-kicker",children:"02 / RESOLUÇÃO AUTOMÁTICA"}),j.jsx("h2",{className:"slide-title",children:"Como o resolvedor passo a passo toma decisões"}),j.jsx("p",{className:"slide-lead",children:"Como uma pirâmide de base 8 possui mais de 68 bilhões de estados possíveis, o botão de resolução automática utiliza uma Rede Neural Profunda (Double DQN) treinada por reforço para estimar o valor esperado de clicar em cada bola a partir do estado atual."}),j.jsxs("div",{className:"ai-architecture-row",children:[j.jsxs("div",{className:"mini-spec",children:[j.jsx("strong",{children:"Treinamento Progressivo"}),j.jsx("span",{children:"O modelo aprende inicialmente em tabuleiros a 1 clique da vitória e aumenta gradualmente a complexidade até dominar configurações completas."})]}),j.jsxs("div",{className:"mini-spec",children:[j.jsx("strong",{children:"Memória Anti-Ciclo"}),j.jsx("span",{children:"Impede cliques duplos imediatos e registra pares (estado, ação) visitados para evitar oscilações infinitas, mantendo livre voltar atrás para corrigir rota."})]}),j.jsxs("div",{className:"mini-spec",children:[j.jsx("strong",{children:"Inferência no Navegador"}),j.jsx("span",{children:"Os pesos das camadas lineares treinadas em Python são exportados e executados nativamente em JavaScript, sem necessidade de servidor."})]})]}),j.jsx("div",{className:"slide-footer-action",children:j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,children:"Voltar ao Jogo ↑"})})]})})]})}function L2({isOpen:e,onClose:r,stats:i,dailyResult:s,challengeNumber:o,aiPar:u}){const[d,c]=nt.useState(!1);if(!e)return null;const f=i.played>0?Math.round(i.wins/i.played*100):0,m=()=>{const v=(s==null?void 0:s.clicks)??"—",w=s==null?void 0:s.usedAi,$=typeof v=="number"?v-u:0,S=w?"Resolvido com resolução guiada":$<=0?"Atingiu a referência ótima":`+${$} cliques acima da referência`,b=[`PYRAMIDLE #${o}`,`Cliques: ${v} | Referência: ${u}`,S,`Sequência: ${i.currentStreak} dia(s)`].join(`
`);navigator.clipboard.writeText(b),c(!0),setTimeout(()=>c(!1),2500)};return j.jsx("div",{className:"modal-backdrop",onClick:r,children:j.jsxs("div",{className:"modal-card",onClick:v=>v.stopPropagation(),children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h2",{children:"Desempenho no Desafio Diário"}),j.jsx("button",{type:"button",className:"close-btn",onClick:r,children:"Fechar"})]}),j.jsxs("div",{className:"stats-summary-grid",children:[j.jsxs("div",{className:"stat-item",children:[j.jsx("strong",{children:i.played}),j.jsx("span",{children:"Jogos"})]}),j.jsxs("div",{className:"stat-item",children:[j.jsxs("strong",{children:[f,"%"]}),j.jsx("span",{children:"Vitórias"})]}),j.jsxs("div",{className:"stat-item",children:[j.jsx("strong",{children:i.currentStreak}),j.jsx("span",{children:"Sequência"})]}),j.jsxs("div",{className:"stat-item",children:[j.jsx("strong",{children:i.maxStreak}),j.jsx("span",{children:"Recorde"})]})]}),s?j.jsxs("div",{className:"daily-summary-card",children:[j.jsxs("h3",{children:["Desafio #",o," Concluído"]}),j.jsxs("p",{className:"daily-comparison",children:["Resolvido em ",j.jsxs("strong",{children:[s.clicks," cliques"]})," (Referência:"," ",j.jsxs("strong",{children:[u," cliques"]}),")."]}),s.usedAi&&j.jsx("p",{className:"ai-assisted-note",children:"Nota: A resolução passo a passo foi utilizada nesta partida."}),j.jsx("button",{type:"button",className:"btn btn-primary share-btn",onClick:m,children:d?"Resultado copiado":"Copiar Resultado"})]}):j.jsxs("p",{className:"pending-daily-msg",children:["Conclua o ",j.jsxs("strong",{children:["Desafio Diário #",o]})," para habilitar o resumo para compartilhamento."]})]})})}function U2({isOpen:e,onClose:r,onJumpToContext:i}){return e?j.jsx("div",{className:"modal-backdrop",onClick:r,children:j.jsxs("div",{className:"modal-card help-modal",onClick:s=>s.stopPropagation(),children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h2",{children:"Regras do Jogo"}),j.jsx("button",{type:"button",className:"close-btn",onClick:r,children:"Fechar"})]}),j.jsxs("div",{className:"help-body",children:[j.jsxs("section",{className:"help-section",children:[j.jsx("h3",{children:"Objetivo"}),j.jsxs("p",{children:["Deixe ",j.jsx("strong",{children:"todas as bolas da pirâmide pretas"})," utilizando a menor quantidade de cliques possível."]}),j.jsxs("p",{children:["Ao clicar em uma bola, ela própria e todas as bolas vizinhas dentro de um raio de alcance de ",j.jsx("code",{children:"3 × raio"})," invertem de cor simultaneamente."]})]}),j.jsxs("section",{className:"help-section",children:[j.jsx("h3",{children:"Modos Disponíveis"}),j.jsxs("ul",{children:[j.jsxs("li",{children:[j.jsx("strong",{children:"Desafio Diário:"})," Uma pirâmide única por dia (base 5, 15 bolas), igual para todos os jogadores."]}),j.jsxs("li",{children:[j.jsx("strong",{children:"Modo Livre:"})," Permite escolher o tamanho da base entre 2 e 10 bolas, sortear novos tabuleiros e assistir à resolução automática passo a passo (disponível até 8 bolas na base)."]})]})]}),j.jsx("div",{className:"help-footer",children:j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{r(),i()},children:"Ver explicação matemática nos slides abaixo ↓"})})]})]})}):null}function im(e,r=760,i=500){const s=i*.78/(e*2),o=2*s*.866,u=(e-1)*o+2*s,d=(i-u)/2,c=[];let f=0;for(let w=0;w<e;w++){const $=i-d-s-o*w,S=e-w,b=S*2*s,C=(r-b)/2+s;for(let N=0;N<S;N++){const E=C+N*2*s;c.push({index:f++,x:E,y:$,radius:s,row:w,col:N})}}const m=c.length,v=Array.from({length:m},()=>Array(m).fill(0));for(let w=0;w<m;w++)for(let $=0;$<m;$++){const S=c[w].x-c[$].x,b=c[w].y-c[$].y;Math.hypot(S,b)<=3*s+1e-6&&(v[w][$]=1)}return{balls:c,adjMatrix:v,radius:s,width:r,height:i}}function j2(e,r){const i=r.length,s=r.map(d=>d===1?0:1),o=e.map((d,c)=>[...d,s[c]]);let u=0;for(let d=0;d<i;d++){let c=-1;for(let m=u;m<i;m++)if(o[m][d]===1){c=m;break}if(c===-1)continue;const f=o[u];o[u]=o[c],o[c]=f;for(let m=0;m<i;m++)if(m!==u&&o[m][d]===1)for(let v=0;v<=i;v++)o[m][v]^=o[u][v];u++}for(let d=0;d<i;d++){let c=0;for(let f=0;f<i;f++)c+=o[d][f];if(c===0&&o[d][i]===1)return!1}return!0}function am(e,r){const i=r.length,s=r.map(c=>c===1?0:1),o=e.map((c,f)=>[...c,s[f]]);let u=0;for(let c=0;c<i;c++){let f=-1;for(let v=u;v<i;v++)if(o[v][c]===1){f=v;break}if(f===-1)continue;const m=o[u];o[u]=o[f],o[f]=m;for(let v=0;v<i;v++)if(v!==u&&o[v][c]===1)for(let w=0;w<=i;w++)o[v][w]^=o[u][w];u++}let d=0;for(let c=0;c<u;c++)d+=o[c][i];return d}function Wo(e,r,i){const s=r[i];return e.map((o,u)=>s[u]===1?o^1:o)}function zl(e){return e.every(r=>r===1)}function W2(e,r=Math.random,i=8,s=2){const o=e.length,u=Math.min(i,o),d=Math.min(u,Math.max(1,s));for(let f=0;f<200;f++){let m=Array(o).fill(1);const v=new Set,w=d+Math.floor(r()*Math.max(1,u-d+1));let $=0;for(;v.size<w&&$<200;)v.add(Math.floor(r()*o)),$++;for(const S of v)m=Wo(m,e,S);if(!zl(m)&&j2(e,m)){const S=am(e,m);if(S>=d||f>60)return{initialState:m,optimalHintClicks:S}}}let c=Wo(Array(o).fill(1),e,0);return{initialState:c,optimalHintClicks:am(e,c)}}/*!
 * ONNX Runtime Web v1.31.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Up=Object.defineProperty,V2=Object.getOwnPropertyDescriptor,F2=Object.getOwnPropertyNames,q2=Object.prototype.hasOwnProperty,H2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ae=(e,r,i)=>()=>{if(i)throw i[0];try{return e&&(r=e(e=0)),r}catch(s){throw i=[s],s}},as=(e,r)=>{for(var i in r)Up(e,i,{get:r[i],enumerable:!0})},G2=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of F2(r))!q2.call(e,o)&&o!==i&&Up(e,o,{get:()=>r[o],enumerable:!(s=V2(r,o))||s.enumerable});return e},Vo=e=>G2(Up({},"__esModule",{value:!0}),e),Ja,_n,_c,ts,$c,K0,Q0,jp=ae(()=>{"use strict";Ja=new Map,_n=[],_c=new WeakMap,ts=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=Ja.get(e);if(s===void 0)Ja.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=_n.indexOf(e);o!==-1&&_n.splice(o,1);for(let u=0;u<_n.length;u++)if(Ja.get(_n[u]).priority<=i){_n.splice(u,0,e);return}_n.push(e)}return}throw new TypeError("not a valid backend")},$c=async e=>{let r=Ja.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{if(!i){let s=r.backend,o=_c.get(s);r.initPromise=o?o.then(async()=>s.init(e),async()=>s.init(e)):s.init(e),_c.set(s,r.initPromise)}return await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},K0=async e=>{let r=e.executionProviders||[],i=r.map(f=>typeof f=="string"?f:f.name),s=i.length===0?_n:i,o,u=[],d=new Set;for(let f of s){let m=await $c(f);typeof m=="string"?u.push({name:f,err:m}):(o||(o=m),o===m&&d.add(f))}if(!o)throw new Error(`no available backend found. ERR: ${u.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:m}of u)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${m}`);let c=r.filter(f=>d.has(typeof f=="string"?f:f.name));return[o,new Proxy(e,{get:(f,m)=>m==="executionProviders"?c:Reflect.get(f,m)})]},Q0=async()=>{let e=[];for(let i of _n){if(typeof Ja.get(i).backend.createLoraAdapterHandler!="function")continue;let s=await $c(i);if(typeof s!="string")return s;e.push({name:i,err:s})}let r=e.length===0?"":` ERR: ${e.map(i=>`[${i.name}] ${i.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${r}`)}}),K2=ae(()=>{"use strict";jp()}),Z0,Q2=ae(()=>{"use strict";Z0="1.31.1"}),xc,zt,Y0=ae(()=>{"use strict";Q2(),xc="warning",zt={wasm:{},webgl:{},webgpu:{},versions:{common:Z0},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);xc=e}},get logLevel(){return xc}},Object.defineProperty(zt,"logLevel",{enumerable:!0})}),lt,Z2=ae(()=>{"use strict";Y0(),lt=zt}),Nl,bc,Sr,cr,Ki,Qi,Wp=ae(()=>{"use strict";Y0(),Nl=(e,r)=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||console.timeStamp(`${e}::ORT::${r}`)},bc=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let u=0;u<i.length;u++){if(s&&!i[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[u].trim().split(" ")[1]}`;r&&(d+=`::${r}`),Nl("CPU",d);return}i[u].includes("TRACE_FUNC")&&(s=!0)}},Sr=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||bc("BEGIN",e)},cr=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||bc("END",e)},Ki=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||console.time(`ORT::${e}`)},Qi=e=>{(typeof zt.trace>"u"?!zt.wasm.trace:!zt.trace)||console.timeEnd(`ORT::${e}`)}}),Vp,X0=ae(()=>{"use strict";jp(),Wp(),Vp=class J0{constructor(r,i){this.backend=r,this.handler=i}static async create(r){if(Sr(),typeof r!="string"&&!(r instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let i=await Q0(),s=await i.createLoraAdapterHandler(r);return cr(),new J0(i,s)}async release(){return this.handler.dispose()}}}),ev,tv,Y2=ae(()=>{"use strict";ev=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[3]):(o=e.dims[3],u=e.dims[2]);let d=(r==null?void 0:r.format)!==void 0?r.format:"RGB",c=r==null?void 0:r.norm,f,m;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let v=u*o,w=0,$=v,S=v*2,b=-1;d==="RGBA"?(w=0,$=v,S=v*2,b=v*3):d==="RGB"?(w=0,$=v,S=v*2):d==="RBG"&&(w=0,S=v,$=v*2);for(let C=0;C<u;C++)for(let N=0;N<o;N++){let E=(e.data[w++]-m[0])*f[0],T=(e.data[$++]-m[1])*f[1],A=(e.data[S++]-m[2])*f[2],D=b===-1?255:(e.data[b++]-m[3])*f[3];s.fillStyle="rgba("+E+","+T+","+A+","+D+")",s.fillRect(N,C,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},tv=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,u,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[1],d=e.dims[3]):(o=e.dims[3],u=e.dims[2],d=e.dims[1]);let c=r!==void 0&&r.format!==void 0?r.format:"RGB",f=r==null?void 0:r.norm,m,v;f===void 0||f.mean===void 0?m=[255,255,255,255]:typeof f.mean=="number"?m=[f.mean,f.mean,f.mean,f.mean]:(m=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(m[3]=f.mean[3])),f===void 0||f.bias===void 0?v=[0,0,0,0]:typeof f.bias=="number"?v=[f.bias,f.bias,f.bias,f.bias]:(v=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(v[3]=f.bias[3]));let w=u*o;if(r!==void 0&&(r.format!==void 0&&d===4&&r.format!=="RGBA"||d===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let $=4,S=0,b=1,C=2,N=3,E=0,T=w,A=w*2,D=-1;c==="RGBA"?(E=0,T=w,A=w*2,D=w*3):c==="RGB"?(E=0,T=w,A=w*2):c==="RBG"&&(E=0,A=w,T=w*2),s=i.createImageData(o,u);for(let B=0;B<u*o;S+=$,b+=$,C+=$,N+=$,B++)s.data[S]=(e.data[E++]-v[0])*m[0],s.data[b]=(e.data[T++]-v[1])*m[1],s.data[C]=(e.data[A++]-v[2])*m[2],s.data[N]=D===-1?255:(e.data[D++]-v[3])*m[3]}else throw new Error("Can not access image data");return s}}),hl,rv,nv,iv,av,sv,X2=ae(()=>{"use strict";Fp(),hl=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},u,d;typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:u=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:d=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let c=r.format!==void 0?r.format:"RGBA",f=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",m=i*s,v=f==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),w=4,$=0,S=1,b=2,C=3,N=0,E=m,T=m*2,A=-1;c==="RGB"&&(w=3,$=0,S=1,b=2,C=-1),f==="RGBA"?A=m*3:f==="RBG"?(N=0,T=m,E=m*2):f==="BGR"&&(T=0,E=m,N=m*2);for(let D=0;D<m;D++,$+=w,b+=w,S+=w,C+=w)v[N++]=(e[$]+d[0])/u[0],v[E++]=(e[S]+d[1])/u[1],v[T++]=(e[b]+d[2])/u[2],A!==-1&&C!==-1&&(v[A++]=(e[C]+d[3])/u[3]);return f==="RGBA"?new dr("float32",v,[1,4,i,s]):new dr("float32",v,[1,3,i,s])},rv=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",d,c=r??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=v=>typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||v instanceof OffscreenCanvas?v.getContext("2d"):null;if(i){let v=f();v.width=e.width,v.height=e.height;let w=m(v);if(w!=null){let $=e.height,S=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&($=r.resizedHeight,S=r.resizedWidth),r!==void 0){if(c=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=$,c.width=S}else c.tensorFormat="RGBA",c.height=$,c.width=S;w.drawImage(e,0,0),d=w.getImageData(0,0,S,$).data}else throw new Error("Can not access image data")}else if(s){let v,w;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(v=r.resizedHeight,w=r.resizedWidth):(v=e.height,w=e.width),r!==void 0&&(c=r),c.format="RGBA",c.height=v,c.width=w,r!==void 0){let $=f();$.width=w,$.height=v;let S=m($);if(S!=null)S.putImageData(e,0,0),d=S.getImageData(0,0,w,v).data;else throw new Error("Can not access image data")}else d=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let v=f();v.width=e.width,v.height=e.height;let w=m(v);if(w!=null){let $=e.height,S=e.width;return w.drawImage(e,0,0,S,$),d=w.getImageData(0,0,S,$).data,c.height=$,c.width=S,hl(d,c)}else throw new Error("Can not access image data")}else{if(u)return new Promise((v,w)=>{let $=f(),S=m($);if(!e||!S)return w();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{$.width=b.width,$.height=b.height,S.drawImage(b,0,0,$.width,$.height);let C=S.getImageData(0,0,$.width,$.height);c.height=$.height,c.width=$.width,v(hl(C.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return hl(d,c);throw new Error("Input data provided is not supported - aborted tensor creation")},nv=(e,r)=>{let{width:i,height:s,download:o,dispose:u}=r,d=[1,s,i,4];return new dr({location:"texture",type:"float32",texture:e,dims:d,download:o,dispose:u})},iv=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new dr({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:u})},av=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new dr({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:u})},sv=(e,r,i)=>new dr({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),qi,Po,Sc,ov,J2=ae(()=>{"use strict";qi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Po=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Sc=!1,ov=()=>{if(!Sc){Sc=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,s=typeof i<"u"&&i.from;e&&(qi.set("int64",BigInt64Array),Po.set(BigInt64Array,"int64")),r&&(qi.set("uint64",BigUint64Array),Po.set(BigUint64Array,"uint64")),s?(qi.set("float16",i),Po.set(i,"float16")):qi.set("float16",Uint16Array)}}}),uv,lv,e$=ae(()=>{"use strict";Fp(),uv=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},lv=(e,r)=>{switch(e.location){case"cpu":return new dr(e.type,e.data,r);case"cpu-pinned":return new dr({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new dr({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new dr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new dr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),dr,Fp=ae(()=>{"use strict";Y2(),X2(),J2(),e$(),dr=class{constructor(e,r,i){ov();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let d=qi.get(s);if(!d)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,c;if(typeof e=="string")if(s=e,c=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");d=r}else{let f=qi.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?d=f.from(r,BigInt):d=f.from(r)}else if(r instanceof f)d=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")d=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&r instanceof Uint16Array&&f!==Uint16Array)d=new globalThis.Float16Array(r.buffer,r.byteOffset,r.length);else throw new TypeError(`A ${s} tensor's data must be type of ${f}`)}else if(c=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")s="string",d=e;else if(f==="boolean")s="bool",d=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",d=Uint8Array.from(e);else{let f=Po.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=f,d=e}if(c===void 0)c=[d.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");o=c,this.cpuData=d,this.dataLocation="cpu"}let u=uv(o);if(this.cpuData&&u!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=u}static async fromImage(e,r){return rv(e,r)}static fromTexture(e,r){return nv(e,r)}static fromGpuBuffer(e,r){return iv(e,r)}static fromMLTensor(e,r){return av(e,r)}static fromPinnedBuffer(e,r,i){return sv(e,r,i)}toDataURL(e){return ev(this,e)}toImageData(e){return tv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return lv(this,e)}}}),Vr,dv=ae(()=>{"use strict";Fp(),Vr=dr}),cv,t$=ae(()=>{"use strict";jp(),X0(),dv(),Wp(),cv=class pv{constructor(r,i){this.handler=r,this.backend=i}async run(r,i,s){Sr(),Ki("InferenceSession.run");let o={},u={};if(typeof r!="object"||r===null||r instanceof Vr||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Vr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let v of i){if(typeof v!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(v)===-1)throw new RangeError(`'fetches' contains invalid output name: ${v}.`);o[v]=null}if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let v=!1,w=Object.getOwnPropertyNames(i);for(let $ of this.outputNames)if(w.indexOf($)!==-1){let S=i[$];(S===null||S instanceof Vr)&&(v=!0,d=!1,o[$]=S)}if(v){if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else u=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let v of this.inputNames)if(typeof r[v]>"u")throw new Error(`input '${v}' is missing in 'feeds'.`);if(d)for(let v of this.outputNames)o[v]=null;let c;if(u.activeLoraAdapters!==void 0){if(!Array.isArray(u.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");c=u.activeLoraAdapters.map(v=>{if(!(v instanceof Vp))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(v.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return v.handler})}let f=await this.handler.run(r,o,u,c),m={};for(let v in f)if(Object.hasOwnProperty.call(f,v)){let w=f[v];w instanceof Vr?m[v]=w:m[v]=new Vr(w.type,w.data,w.dims)}return Qi("InferenceSession.run"),cr(),m}async release(){return this.handler.dispose()}static async create(r,i,s,o){Sr(),Ki("InferenceSession.create");let u,d={};if(typeof r=="string"){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let v=r,w=0,$=r.byteLength;if(typeof i=="object"&&i!==null)d=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=v.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${v.byteLength}).`);if($=r.byteLength-w,typeof s=="number"){if($=s,!Number.isSafeInteger($))throw new RangeError("'byteLength' must be an integer.");if($<=0||w+$>v.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${v.byteLength-w}].`);if(typeof o=="object"&&o!==null)d=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(v,w,$)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await K0(d),m=await c.createInferenceSessionHandler(u,f);return Qi("InferenceSession.create"),cr(),new pv(m,c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),qp,r$=ae(()=>{"use strict";t$(),qp=cv}),fv,n$=ae(()=>{"use strict";X0(),fv=Vp}),i$=ae(()=>{"use strict"}),a$=ae(()=>{"use strict"}),s$=ae(()=>{"use strict"}),o$=ae(()=>{"use strict"}),u$={};as(u$,{InferenceSession:()=>qp,LoraAdapter:()=>fv,TRACE:()=>Nl,TRACE_EVENT_BEGIN:()=>Ki,TRACE_EVENT_END:()=>Qi,TRACE_FUNC_BEGIN:()=>Sr,TRACE_FUNC_END:()=>cr,Tensor:()=>Vr,env:()=>lt,registerBackend:()=>ts});var fr=ae(()=>{"use strict";K2(),Z2(),r$(),n$(),dv(),i$(),a$(),Wp(),s$(),o$()}),Hp=ae(()=>{"use strict"}),hv={};as(hv,{default:()=>mv});var kc,Ec,mv,l$=ae(()=>{"use strict";var e;S_(),Ji(),Gp(),kc="ort-wasm-proxy-worker",Ec=((e=globalThis.self)==null?void 0:e.name)===kc,Ec&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":Kp(s.wasm).then(()=>{pf(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:u}=s;ff(u,o).then(()=>{postMessage({type:i})},d=>{postMessage({type:i,err:d})});break}case"copy-from":{let{buffer:o}=s,u=Pl(o);postMessage({type:i,out:u});break}case"create":{let{model:o,options:u}=s;hf(o,u).then(d=>{postMessage({type:i,out:d})},d=>{postMessage({type:i,err:d})});break}case"release":mf(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:u,inputs:d,outputIndices:c,options:f}=s;gf(o,u,d,c,new Array(c.length).fill(null),f).then(m=>{m.some(v=>v[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:m},vf([...d,...m]))},m=>{postMessage({type:i,err:m})});break}case"end-profiling":yf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),mv=Ec?null:r=>new Worker(r??lr,{type:"module",name:kc})}),gv={};as(gv,{default:()=>yv});async function sm(e={}){var co,Au;var r=e,i=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,o=s&&((co=self.name)==null?void 0:co.startsWith("em-pthread"));r.mountExternalData=(p,g)=>{p.startsWith("./")&&(p=p.substring(2)),(r.jd||(r.jd=new Map)).set(p,g)},r.unmountExternalData=()=>{delete r.jd,delete r.ke,delete r.je,delete r.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let u=p=>async(...g)=>{var x;try{if(r.hd)throw Error("Session already started");let _=r.hd={Vd:g[0],errors:[]},z=await p(...g);if(r.hd!==_)throw Error("Session mismatch");(x=r.pd)==null||x.flush();let R=_.errors;if(0<R.length){let U=await Promise.all(R);if(U=U.filter(Z=>Z),0<U.length)throw Error(U.join(`
`))}return z}finally{r.hd=null}};r.jsepInit=(p,g)=>{if(p==="webgpu"){[r.pd,r.Ld,r.Pd,r.rd,r.Od,r.ic,r.Qd,r.Sd,r.Md,r.Nd,r.Rd]=g;let x=r.pd;r.jsepRegisterBuffer=(_,z,R,U)=>x.registerBuffer(_,z,R,U),r.jsepGetBuffer=_=>x.getBuffer(_),r.jsepCreateDownloader=(_,z,R)=>x.createDownloader(_,z,R),r.jsepOnCreateSession=_=>{x.onCreateSession(_)},r.jsepOnReleaseSession=_=>{x.onReleaseSession(_)},r.jsepOnRunStart=_=>x.onRunStart(_),r.Td=(_,z)=>{x.upload(_,z)}}else if(p==="webnn"){let x=g[0];[r.ce,r.Cd,r.webnnEnsureTensor,r.Dd,r.webnnDownloadTensor,r.be,r.webnnEnableTraceEvent]=g.slice(1),r.webnnReleaseTensorId=r.Cd,r.webnnUploadTensor=r.Dd,r.webnnRegisterMLContext=r.be,r.webnnOnRunStart=_=>x.onRunStart(_),r.webnnOnRunEnd=x.onRunEnd.bind(x),r.webnnOnReleaseSession=_=>{x.onReleaseSession(_)},r.webnnCreateMLTensorDownloader=(_,z)=>x.createMLTensorDownloader(_,z),r.webnnRegisterMLTensor=(_,z,R,U)=>x.registerMLTensor(_,z,R,U),r.webnnCreateMLContext=_=>x.createMLContext(_),r.webnnRegisterGraphInput=x.registerGraphInput.bind(x),r.webnnIsGraphInput=x.isGraphInput.bind(x),r.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),r.webnnIsGraphOutput=x.isGraphOutput.bind(x),r.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),r.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let d=()=>{let p=g=>(...x)=>{let _=Pt;return x=g(...x),Pt!=_?new Promise((z,R)=>{Rn={resolve:z,reject:R}}):x};(g=>{for(let x of g)r[x]=p(r[x])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),u!==void 0&&(r._OrtRun=u(r._OrtRun),r._OrtRunWithBinding=u(r._OrtRunWithBinding)),d=void 0};r.asyncInit=()=>{d==null||d()};var c,f,m=(p,g)=>{throw g},v=import.meta.url,w="";if(i||s){try{w=new URL(".",v).href}catch{}s&&(f=p=>{var g=new XMLHttpRequest;return g.open("GET",p,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),c=async p=>{if(V(p))return new Promise((x,_)=>{var z=new XMLHttpRequest;z.open("GET",p,!0),z.responseType="arraybuffer",z.onload=()=>{z.status==200||z.status==0&&z.response?x(z.response):_(z.status)},z.onerror=_,z.send(null)});var g=await fetch(p,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var $,S,b,C,N,E,T=console.log.bind(console),A=console.error.bind(console),D=T,B=A,P=!1,V=p=>p.startsWith("file://");function I(){kr.buffer!=te.buffer&&F()}if(o){let p=function(g){try{var x=g.data,_=x.bd;if(_==="load"){let z=[];self.onmessage=R=>z.push(R),E=()=>{postMessage({bd:"loaded"});for(let R of z)p(R);self.onmessage=p};for(let R of x.Hd)r[R]&&!r[R].proxy||(r[R]=(...U)=>{postMessage({bd:"callHandler",Fd:R,args:U})},R=="print"&&(D=r[R]),R=="printErr"&&(B=r[R]));kr=x.Zd,F(),S=x.$d,Ee(),Yn()}else if(_==="run"){(function(z){var R=(I(),he)[z+52>>>2>>>0];z=(I(),he)[z+56>>>2>>>0],Ls(R,R-z),Ue(R)})(x.ad),dn(x.ad,0,0,1,0,0),pi(),ca(x.ad),Y||(yu(),Y=!0);try{us(x.Xd,x.nd)}catch(z){if(z!="unwind")throw z}}else x.target!=="setimmediate"&&(_==="checkMailbox"?Y&&On():_&&(B(`worker: received unknown command ${_}`),B(x)))}catch(z){throw vu(),z}};var Y=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=p}var te,me,de,pe,G,he,ye,ge,ee,re,se,O=!1;function F(){var p=kr.buffer;r.HEAP8=te=new Int8Array(p),de=new Int16Array(p),r.HEAPU8=me=new Uint8Array(p),pe=new Uint16Array(p),r.HEAP32=G=new Int32Array(p),r.HEAPU32=he=new Uint32Array(p),ye=new Float32Array(p),ge=new Float64Array(p),ee=new BigInt64Array(p),re=new BigUint64Array(p)}function ne(){O=!0,o?E():zr.vb()}function X(p){throw B(p="Aborted("+p+")"),P=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),N==null||N(p),p}function ve(){return{a:{na:no,jb:Pa,g:hi,G:jl,f:ps,o:fs,h:hs,$:ms,b:En,S:Tn,Ja:ys,n:qo,aa:Cn,_a:ra,Fa:In,Ha:Ho,$a:zn,Ya:gi,Ra:yi,Xa:na,la:Go,Ga:Ko,Da:Qo,Za:Fr,Ea:_s,eb:Zo,ga:Wl,ya:ht,wa:vr,fa:ar,N:Fl,I:ql,xa:la,_:vi,za:Kl,Ua:bs,Ba:tu,Ka:ru,ua:Ss,ha:fa,Ta:ca,bb:Hr,Q:wi,r:ya,c:sa,kb:ks,y:ou,M:Kr,D:Es,m:va,s:Ts,lb:wa,J:_a,R:uu,j:Ft,u:Bn,q:Cs,k:_i,Oa:Yl,Pa:ba,Qa:lu,Ma:du,Na:cu,va:pu,gb:Xl,db:ed,v:td,ba:rd,ia:nd,cb:Jl,V:id,ab:Os,Ca:ad,F:Is,U:sd,ma:Sa,Aa:ud,ib:od,hb:ld,Va:Ln,Wa:hu,Ia:ot,T:Ds,La:Ms,ka:Bs,Sa:Ps,ja:ln,nb:Or,oa:Ua,ob:Ou,pa:Ut,H:La,e:cd,t:ao,w:io,B:uo,pb:Lt,Z:Et,x:oo,qa:mn,X:zu,ca:Yr,qb:at,ea:pd,O:hd,sb:Qn,ra:st,tb:lo,L:zi,Y:Zn,d:so,A:fd,l:Cu,mb:Wa,p:Iu,z:Gn,C:Qr,E:wr,K:md,sa:Kn,P:Nu,da:hn,W:ja,ub:Nr,ta:Ii,rb:Zr,i:dd,a:kr,fb:je}}}async function Ee(){function p(_,z){var R=zr=_.exports;_={};for(let[U,Z]of Object.entries(R))typeof Z=="function"?(R=Gr(Z),_[U]=R):_[U]=Z;return zr=_,zr=(function(){var U=zr,Z=fe=>Oe=>fe(Oe)>>>0,ue=fe=>()=>fe()>>>0;return(U=Object.assign({},U)).wb=Z(U.wb),U.ec=ue(U.ec),U.gc=Z(U.gc),U.uc=Z(U.uc),U.vc=ue(U.vc),U.zc=Z(U.zc),U})(),hr.push(zr.hc),gu=(_=zr).wb,yu=_.xb,r._OrtInit=_.yb,r._OrtGetLastError=_.zb,r._OrtCreateSessionOptions=_.Ab,r._OrtAppendExecutionProvider=_.Bb,r._OrtGetEpDevices=_.Cb,r._OrtEpDevice_EpName=_.Db,r._OrtAppendExecutionProviderV2=_.Eb,r._OrtAddFreeDimensionOverride=_.Fb,r._OrtAddSessionConfigEntry=_.Gb,r._OrtReleaseSessionOptions=_.Hb,r._OrtCreateSession=_.Ib,r._OrtReleaseSession=_.Jb,r._OrtGetInputOutputCount=_.Kb,r._OrtGetInputOutputMetadata=_.Lb,r._OrtFree=_.Mb,r._OrtCreateTensor=_.Nb,r._OrtGetTensorData=_.Ob,r._OrtReleaseTensor=_.Pb,r._OrtCreateLoraAdapter=_.Qb,r._OrtReleaseLoraAdapter=_.Rb,r._OrtCreateRunOptions=_.Sb,r._OrtAddRunConfigEntry=_.Tb,r._OrtRunOptionsAddActiveLoraAdapter=_.Ub,r._OrtReleaseRunOptions=_.Vb,r._OrtCreateBinding=_.Wb,r._OrtBindInput=_.Xb,r._OrtBindOutput=_.Yb,r._OrtClearBoundOutputs=_.Zb,r._OrtReleaseBinding=_._b,r._OrtRunWithBinding=_.$b,r._OrtRun=_.ac,r._OrtEndProfiling=_.bc,r._JsepOutput=_.cc,r._JsepGetNodeName=_.dc,bi=_.ec,or=r._free=_.fc,Cr=r._malloc=_.gc,dn=_.jc,vu=_.kc,Si=_.lc,wu=_.mc,Ea=_.nc,Ta=_.oc,Ca=_.pc,We=_.qc,Un=_.rc,Ls=_.sc,Ue=_.tc,Us=_.uc,Ve=_.vc,_u=_.wc,js=_.xc,Xt=_.yc,jn=_.zc,Ws=_.Ac,Ia=_.Bc,Vs=_.Cc,Fs=_.Dc,za=_.Ec,$u=_.Fc,xu=_.Gc,cn=_.Hc,Na=_.Ic,Wn=_.Jc,Oa=_.Kc,qs=_.Lc,ki=_.Mc,pn=_.Nc,Aa=_.Oc,Hs=_.Pc,Ei=_.Qc,Gs=_.Rc,Ks=_.Sc,Qs=_.Tc,Zs=_.Uc,Ys=_.Vc,Xs=_.Wc,Ir=_.Xc,Ra=_.Yc,Da=_._c,bu=_.$c,Su=_.kd,Vn=_.ld,ku=_.qd,Js=_.vd,eo=_.wd,it=_.xd,Ma=_.yd,Ti=_.zd,Fn=_.Ad,to=_.Bd,Ba=_.Gd,qn=_.Jd,Ci=_.fe,fn=_.ge,ro=_.he,Eu=_.ie,S=z,zr}var g,x=ve();return r.instantiateWasm?new Promise(_=>{r.instantiateWasm(x,(z,R)=>{_(p(z,R))})}):o?p(new WebAssembly.Instance(S,ve()),S):(se??(se=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href),g=await(async function(_){var z=se;if(!$&&!V(z))try{var R=fetch(z,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(R,_)}catch(U){B(`wasm streaming compile failed: ${U}`),B("falling back to ArrayBuffer instantiation")}return(async function(U,Z){try{var ue=await(async function(fe){if(!$)try{var Oe=await c(fe);return new Uint8Array(Oe)}catch{}if(fe==se&&$)fe=new Uint8Array($);else{if(!f)throw"both async and sync fetching of the wasm failed";fe=f(fe)}return fe})(U);return await WebAssembly.instantiate(ue,Z)}catch(fe){B(`failed to asynchronously prepare wasm: ${fe}`),X(fe)}})(z,_)})(x),p(g.instance,g.module))}class Ie{constructor(g){Kh(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var Be=p=>{p.terminate(),p.onmessage=()=>{}},De=[],ft=0,Qt=null,Mt=p=>{kt.length==0&&(os(),ss(kt[0]));var g=kt.pop();if(!g)return 6;Zt.push(g),Bt[p.ad]=g,g.ad=p.ad;var x={bd:"run",Xd:p.Wd,nd:p.nd,ad:p.ad};return g.postMessage(x,p.ud),0},Ne=0,$e=(p,g,...x)=>{var _,z=16*x.length,R=Ve(),U=Us(z),Z=U>>>3;for(_ of x)typeof _=="bigint"?((I(),ee)[Z++>>>0]=1n,(I(),ee)[Z++>>>0]=_):((I(),ee)[Z++>>>0]=0n,(I(),ge)[Z++>>>0]=_);return p=Si(p,0,z,U,g),Ue(R),p};function je(p){if(o)return $e(0,1,p);if(b=p,!(0<Ne)){for(var g of Zt)Be(g);for(g of kt)Be(g);kt=[],Zt=[],Bt={},P=!0}m(0,new Ie(p))}function Fe(p){if(o)return $e(1,0,p);ot(p)}var ot=p=>{if(b=p,o)throw Fe(p),"unwind";je(p)},kt=[],Zt=[],hr=[],Bt={},kn=p=>{var g=p.ad;delete Bt[g],kt.push(p),Zt.splice(Zt.indexOf(p),1),p.ad=0,wu(g)};function pi(){hr.forEach(p=>p())}var ss=p=>new Promise(g=>{p.onmessage=z=>{var R=z.data;if(z=R.bd,R.md&&R.md!=bi()){var U=Bt[R.md];U?U.postMessage(R,R.ud):B(`Internal error! Worker sent a message "${z}" to target pthread ${R.md}, but that thread no longer exists!`)}else z==="checkMailbox"?On():z==="spawnThread"?Mt(R):z==="cleanupThread"?Ze(()=>{kn(Bt[R.Yd])}):z==="loaded"?(p.loaded=!0,g(p)):R.target==="setimmediate"?p.postMessage(R):z==="uncaughtException"?p.onerror(R.error):z==="callHandler"?r[R.Fd](...R.args):z&&B(`worker sent an unknown command ${z}`)},p.onerror=z=>{throw B(`worker sent an error! ${z.filename}:${z.lineno}: ${z.message}`),z};var x,_=[];for(x of[])r.propertyIsEnumerable(x)&&_.push(x);p.postMessage({bd:"load",Hd:_,Zd:kr,$d:S})});function os(){var p=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});kt.push(p)}var kr,us=(p,g)=>{Ne=0,p=Ia(p,g),0<Ne?b=p:Ea(p)},nn=[],fi=0;function hi(p){var g=new cs(p>>>=0);return(I(),te)[g.cd+12>>>0]==0&&(ls(g,!0),fi--),ds(g,!1),nn.push(g),jn(p)}var mr=0,jl=()=>{We(0,0);var p=nn.pop();_u(p.od),mr=0};function ls(p,g){g=g?1:0,(I(),te)[p.cd+12>>>0]=g}function ds(p,g){g=g?1:0,(I(),te)[p.cd+13>>>0]=g}class cs{constructor(g){this.od=g,this.cd=g-24}}var mi=p=>{var g=mr;if(!g)return Un(0),0;var x=new cs(g);(I(),he)[x.cd+16>>>2>>>0]=g;var _=(I(),he)[x.cd+4>>>2>>>0];if(!_)return Un(0),g;for(var z of p){if(z===0||z===_)break;if(Xt(z,_,x.cd+16))return Un(z),g}return Un(_),g};function ps(){return mi([])}function fs(p){return mi([p>>>0])}function hs(p,g,x,_){return mi([p>>>0,g>>>0,x>>>0,_>>>0])}var ms=()=>{var p=nn.pop();p||X("no exception to throw");var g=p.od;throw(I(),te)[p.cd+13>>>0]==0&&(nn.push(p),ds(p,!0),ls(p,!1),fi++),js(g),mr=g};function En(p,g,x){var _=new cs(p>>>=0);throw g>>>=0,x>>>=0,(I(),he)[_.cd+16>>>2>>>0]=0,(I(),he)[_.cd+4>>>2>>>0]=g,(I(),he)[_.cd+8>>>2>>>0]=x,js(p),fi++,mr=p}var Tn=()=>fi;function gs(p,g,x,_){return o?$e(2,1,p,g,x,_):ys(p,g,x,_)}function ys(p,g,x,_){if(p>>>=0,g>>>=0,x>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var z=[];return o&&z.length===0?gs(p,g,x,_):(p={Wd:x,ad:p,nd:_,ud:z},o?(p.bd="spawnThread",postMessage(p,z),0):Mt(p))}function qo(p){throw mr||(mr=p>>>0),mr}var vs=globalThis.TextDecoder&&new TextDecoder,ws=(p,g,x,_)=>{if(x=g+x,_)return x;for(;p[g]&&!(g>=x);)++g;return g},ta=(p,g=0,x,_)=>{if(16<(x=ws(p,g>>>=0,x,_))-g&&p.buffer&&vs)return vs.decode(p.buffer instanceof ArrayBuffer?p.subarray(g,x):p.slice(g,x));for(_="";g<x;){var z=p[g++];if(128&z){var R=63&p[g++];if((224&z)==192)_+=String.fromCharCode((31&z)<<6|R);else{var U=63&p[g++];65536>(z=(240&z)==224?(15&z)<<12|R<<6|U:(7&z)<<18|R<<12|U<<6|63&p[g++])?_+=String.fromCharCode(z):(z-=65536,_+=String.fromCharCode(55296|z>>10,56320|1023&z))}}else _+=String.fromCharCode(z)}return _},dt=(p,g,x)=>(p>>>=0)?ta((I(),me),p,g,x):"";function Cn(p,g,x){return o?$e(3,1,p,g,x):0}function ra(p,g){if(o)return $e(4,1,p,g)}function In(p,g){if(o)return $e(5,1,p,g)}function Ho(p,g,x){if(o)return $e(6,1,p,g,x)}function zn(p,g,x){return o?$e(7,1,p,g,x):0}function gi(p,g){if(o)return $e(8,1,p,g)}function yi(p,g,x){if(o)return $e(9,1,p,g,x)}function na(p,g,x,_){if(o)return $e(10,1,p,g,x,_)}function Go(p,g,x,_){if(o)return $e(11,1,p,g,x,_)}function Ko(p,g,x,_){if(o)return $e(12,1,p,g,x,_)}function Qo(p){if(o)return $e(13,1,p)}function Fr(p,g){if(o)return $e(14,1,p,g)}function _s(p,g,x){if(o)return $e(15,1,p,g,x)}var Zo=()=>X(""),gr=p=>{p>>>=0;for(var g="";;){var x=(I(),me)[p++>>>0];if(!x)return g;g+=String.fromCharCode(x)}},ia={},aa={},an=class extends Error{constructor(p){super(p),this.name="BindingError"}};function yr(p,g,x={}){return(function(_,z,R={}){var U=z.name;if(!_)throw new an(`type "${U}" must have a positive integer typeid pointer`);if(aa.hasOwnProperty(_)){if(R.Id)return;throw new an(`Cannot register type '${U}' twice`)}aa[_]=z,ia.hasOwnProperty(_)&&(z=ia[_],delete ia[_],z.forEach(Z=>Z()))})(p,g,x)}var Yo=(p,g,x)=>{switch(g){case 1:return x?_=>(I(),te)[_>>>0]:_=>(I(),me)[_>>>0];case 2:return x?_=>(I(),de)[_>>>1>>>0]:_=>(I(),pe)[_>>>1>>>0];case 4:return x?_=>(I(),G)[_>>>2>>>0]:_=>(I(),he)[_>>>2>>>0];case 8:return x?_=>(I(),ee)[_>>>3>>>0]:_=>(I(),re)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${p}`)}};function Wl(p,g,x,_,z){p>>>=0,x>>>=0,g=gr(g>>>0);let R=U=>U;if(_=_===0n){let U=8*x;R=Z=>BigInt.asUintN(U,Z),z=R(z)}yr(p,{name:g,Zc:R,ed:(U,Z)=>(typeof Z=="number"&&(Z=BigInt(Z)),Z),dd:Yo(g,x,!_),gd:null})}function ht(p,g,x,_){yr(p>>>=0,{name:g=gr(g>>>0),Zc:function(z){return!!z},ed:function(z,R){return R?x:_},dd:function(z){return this.Zc((I(),me)[z>>>0])},gd:null})}var Xo=[],Er=[0,1,,1,null,1,!0,1,!1,1];function sa(p){9<(p>>>=0)&&--Er[p+1]===0&&(Er[p]=void 0,Xo.push(p))}var Ot=p=>{if(!p)throw new an(`Cannot use deleted val. handle = ${p}`);return Er[p]},ir=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Xo.pop()||Er.length;return Er[g]=p,Er[g+1]=1,g}};function oa(p){return this.Zc((I(),he)[p>>>2>>>0])}var ua={name:"emscripten::val",Zc:p=>{var g=Ot(p);return sa(p),g},ed:(p,g)=>ir(g),dd:oa,gd:null};function vr(p){return yr(p>>>0,ua)}var Vl=(p,g)=>{switch(g){case 4:return function(x){return this.Zc((I(),ye)[x>>>2>>>0])};case 8:return function(x){return this.Zc((I(),ge)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${p}`)}};function ar(p,g,x){x>>>=0,yr(p>>>=0,{name:g=gr(g>>>0),Zc:_=>_,ed:(_,z)=>z,dd:Vl(g,x),gd:null})}function Fl(p,g,x,_,z){p>>>=0,x>>>=0,g=gr(g>>>0);let R=Z=>Z;if(_===0){var U=32-8*x;R=Z=>Z<<U>>>U,z=R(z)}yr(p,{name:g,Zc:R,ed:(Z,ue)=>ue,dd:Yo(g,x,_!==0),gd:null})}function ql(p,g,x){function _(R){var U=(I(),he)[R>>>2>>>0];return R=(I(),he)[R+4>>>2>>>0],new z((I(),te).buffer,R,U)}var z=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];yr(p>>>=0,{name:x=gr(x>>>0),Zc:_,dd:_},{Id:!0})}var qr=(p,g,x)=>{var _=(I(),me);if(g>>>=0,0<x){var z=g;x=g+x-1;for(var R=0;R<p.length;++R){var U=p.codePointAt(R);if(127>=U){if(g>=x)break;_[g++>>>0]=U}else if(2047>=U){if(g+1>=x)break;_[g++>>>0]=192|U>>6,_[g++>>>0]=128|63&U}else if(65535>=U){if(g+2>=x)break;_[g++>>>0]=224|U>>12,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U}else{if(g+3>=x)break;_[g++>>>0]=240|U>>18,_[g++>>>0]=128|U>>12&63,_[g++>>>0]=128|U>>6&63,_[g++>>>0]=128|63&U,R++}}_[g>>>0]=0,p=g-z}else p=0;return p},sn=p=>{for(var g=0,x=0;x<p.length;++x){var _=p.charCodeAt(x);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++x):g+=3}return g};function la(p,g){yr(p>>>=0,{name:g=gr(g>>>0),Zc(x){var _=(I(),he)[x>>>2>>>0];return _=dt(x+4,_,!0),or(x),_},ed(x,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var z=typeof _=="string";if(!(z||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new an("Cannot pass non-string to std::string");var R=z?sn(_):_.length,U=Cr(4+R+1),Z=U+4;return(I(),he)[U>>>2>>>0]=R,z?qr(_,Z,R+1):(I(),me).set(_,Z>>>0),x!==null&&x.push(or,U),U},dd:oa,gd(x){or(x)}})}var Nn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,da=(p,g,x)=>{if(p>>>=1,16<(g=ws((I(),pe),p,g/2,x))-p&&Nn)return Nn.decode((I(),pe).slice(p,g));for(x="";p<g;++p){var _=(I(),pe)[p>>>0];x+=String.fromCharCode(_)}return x},Hl=(p,g,x)=>{if(x??(x=2147483647),2>x)return 0;var _=g;x=(x-=2)<2*p.length?x/2:p.length;for(var z=0;z<x;++z){var R=p.charCodeAt(z);(I(),de)[g>>>1>>>0]=R,g+=2}return(I(),de)[g>>>1>>>0]=0,g-_},Gl=p=>2*p.length,$s=(p,g,x)=>{var _="";p>>>=2;for(var z=0;!(z>=g/4);z++){var R=(I(),he)[p+z>>>0];if(!R&&!x)break;_+=String.fromCodePoint(R)}return _},Jo=(p,g,x)=>{if(g>>>=0,x??(x=2147483647),4>x)return 0;var _=g;x=_+x-4;for(var z=0;z<p.length;++z){var R=p.codePointAt(z);if(65535<R&&z++,(I(),G)[g>>>2>>>0]=R,(g+=4)+4>x)break}return(I(),G)[g>>>2>>>0]=0,g-_},xs=p=>{for(var g=0,x=0;x<p.length;++x)65535<p.codePointAt(x)&&x++,g+=4;return g};function vi(p,g,x){if(p>>>=0,g>>>=0,x=gr(x>>>=0),g===2)var _=da,z=Hl,R=Gl;else _=$s,z=Jo,R=xs;yr(p,{name:x,Zc:U=>{var Z=(I(),he)[U>>>2>>>0];return Z=_(U+4,Z*g,!0),or(U),Z},ed:(U,Z)=>{if(typeof Z!="string")throw new an(`Cannot pass non-string to C++ string type ${x}`);var ue=R(Z),fe=Cr(4+ue+g);return(I(),he)[fe>>>2>>>0]=ue/g,z(Z,fe+4,ue+g),U!==null&&U.push(or,fe),fe},dd:oa,gd(U){or(U)}})}function Kl(p,g){yr(p>>>=0,{Kd:!0,name:g=gr(g>>>0),Zc:()=>{},ed:()=>{}})}function bs(p){dn(p>>>0,!s,1,!i,131072,!1),pi()}var Ze=p=>{if(!P)try{if(p(),!(0<Ne))try{o?bi()&&Ea(b):ot(b)}catch(g){g instanceof Ie||g=="unwind"||m(0,g)}}catch(g){g instanceof Ie||g=="unwind"||m(0,g)}},eu=!Atomics.waitAsync||((Au=globalThis.navigator)==null?void 0:Au.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ca(p){p>>>=0,eu||(Atomics.waitAsync((I(),G),p>>>2,p).value.then(On),p+=128,Atomics.store((I(),G),p>>>2,1))}var On=()=>Ze(()=>{var p=bi();p&&(ca(p),Ca())});function tu(p,g){(p>>>=0)==g>>>0?setTimeout(On):o?postMessage({md:p,bd:"checkMailbox"}):(p=Bt[p])&&p.postMessage({bd:"checkMailbox"})}var pa=[];function ru(p,g,x,_,z){for(g>>>=0,z>>>=0,pa.length=0,x=z>>>3,_=z+_>>>3;x<_;){var R;R=(I(),ee)[x++>>>0]?(I(),ee)[x++>>>0]:(I(),ge)[x++>>>0],pa.push(R)}return(g?Hn[g]:Tu[p])(...pa)}var Ss=()=>{Ne=0};function fa(p){p>>>=0,o?postMessage({bd:"cleanupThread",Yd:p}):kn(Bt[p])}function Hr(p){}var sr=p=>{try{p()}catch(g){X(g)}};function Gr(p){var g=(...x)=>{ha.push(p);try{return p(...x)}finally{P||(ha.pop(),Pt&&Yt===1&&ha.length===0&&(Yt=0,Ne+=1,sr(fn),typeof Fibers<"u"&&Fibers.ne()))}};return nu.set(p,g),g}var Yt=0,Pt=null,Tr=0,ha=[],ma=new Map,An=new Map,nu=new Map,iu=0,Rn=null,au=[],su=p=>(function(g){if(!P){if(Yt===0){var x=!1,_=!1;g((z=0)=>{if(!P&&(Tr=z,x=!0,_)){Yt=2,sr(()=>ro(Pt)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),z=!1;try{var R=(function(){var ue=(I(),G)[Pt+8>>>2>>>0];return ue=An.get(ue),ue=nu.get(ue),--Ne,ue()})()}catch(ue){R=ue,z=!0}var U=!1;if(!Pt){var Z=Rn;Z&&(Rn=null,(z?Z.reject:Z.resolve)(R),U=!0)}if(z&&!U)throw R}}),_=!0,x||(Yt=1,Pt=(function(){var z=Cr(65548),R=z+12;if((I(),he)[z>>>2>>>0]=R,(I(),he)[z+4>>>2>>>0]=R+65536,R=ha[0],!ma.has(R)){var U=iu++;ma.set(R,U),An.set(U,R)}return R=ma.get(R),(I(),G)[z+8>>>2>>>0]=R,z})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),sr(()=>Ci(Pt)))}else Yt===2?(Yt=0,sr(Eu),or(Pt),Pt=null,au.forEach(Ze)):X(`invalid state: ${Yt}`);return Tr}})(g=>{p().then(g)});function wi(p){return p>>>=0,su(async()=>{var g=await Ot(p);return ir(g)})}var on=[],Dn=p=>{var g=on.length;return on.push(p),g},ga=(p,g)=>{for(var x=Array(p),_=0;_<p;++_){var z=_,R=(I(),he)[g+4*_>>>2>>>0],U=aa[R];if(U===void 0)throw p=`parameter ${_}`,R=gu(R),g=gr(R),or(R),new an(`${p} has unknown type ${g}`);x[z]=U}return x},Ql=(p,g,x)=>{var _=[];return p=p(_,x),_.length&&((I(),he)[g>>>2>>>0]=ir(_)),p},Zl={},Mn=p=>{var g=Zl[p];return g===void 0?gr(p):g};function ya(p,g,x){var[_,...z]=ga(p,g>>>0);g=_.ed.bind(_);var R=z.map(ue=>ue.dd.bind(ue));p--;var U={toValue:Ot};switch(p=R.map((ue,fe)=>{var Oe=`argFromPtr${fe}`;return U[Oe]=ue,`${Oe}(args${fe?"+"+8*fe:""})`}),x){case 0:var Z="toValue(handle)";break;case 2:Z="new (toValue(handle))";break;case 3:Z="";break;case 1:U.getStringOrSymbol=Mn,Z="toValue(handle)[getStringOrSymbol(methodName)]"}return Z+=`(${p})`,_.Kd||(U.toReturnWire=g,U.emval_returnValue=Ql,Z=`return emval_returnValue(toReturnWire, destructorsRef, ${Z})`),Z=`return function (handle, methodName, destructorsRef, args) {
  ${Z}
  }`,x=new Function(Object.keys(U),Z)(...Object.values(U)),Z=`methodCaller<(${z.map(ue=>ue.name)}) => ${_.name}>`,Dn(Object.defineProperty(x,"name",{value:Z}))}function ks(p,g){return g>>>=0,(p=Ot(p>>>0))==Ot(g)}function ou(p){return(p>>>=0)?(p=Mn(p),ir(globalThis[p])):ir(globalThis)}function Kr(p){return p=Mn(p>>>0),ir(r[p])}function Es(p,g){return g>>>=0,p=Ot(p>>>0),g=Ot(g),ir(p[g])}function va(p){9<(p>>>=0)&&(Er[p+1]+=1)}function Ts(p,g,x,_,z){return on[p>>>0](g>>>0,x>>>0,_>>>0,z>>>0)}function wa(p,g,x,_,z){return Ts(p>>>0,g>>>0,x>>>0,_>>>0,z>>>0)}function _a(){return ir([])}function uu(p){p=Ot(p>>>0);for(var g=Array(p.length),x=0;x<p.length;x++)g[x]=p[x];return ir(g)}function Ft(p){return ir(Mn(p>>>0))}function Bn(){return ir({})}function Cs(p){for(var g=Ot(p>>>=0);g.length;){var x=g.pop();g.pop()(x)}sa(p)}function _i(p,g,x){g>>>=0,x>>>=0,p=Ot(p>>>0),g=Ot(g),x=Ot(x),p[g]=x}function Yl(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getUTCSeconds(),(I(),G)[g+4>>>2>>>0]=p.getUTCMinutes(),(I(),G)[g+8>>>2>>>0]=p.getUTCHours(),(I(),G)[g+12>>>2>>>0]=p.getUTCDate(),(I(),G)[g+16>>>2>>>0]=p.getUTCMonth(),(I(),G)[g+20>>>2>>>0]=p.getUTCFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(I(),G)[g+28>>>2>>>0]=p}var $a=p=>p%4==0&&(p%100!=0||p%400==0),xa=[0,31,60,91,121,152,182,213,244,274,305,335],Pn=[0,31,59,90,120,151,181,212,243,273,304,334];function ba(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getSeconds(),(I(),G)[g+4>>>2>>>0]=p.getMinutes(),(I(),G)[g+8>>>2>>>0]=p.getHours(),(I(),G)[g+12>>>2>>>0]=p.getDate(),(I(),G)[g+16>>>2>>>0]=p.getMonth(),(I(),G)[g+20>>>2>>>0]=p.getFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getDay();var x=($a(p.getFullYear())?xa:Pn)[p.getMonth()]+p.getDate()-1|0;(I(),G)[g+28>>>2>>>0]=x,(I(),G)[g+36>>>2>>>0]=-60*p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset();var _=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(x!=_&&p.getTimezoneOffset()==Math.min(_,x)),(I(),G)[g+32>>>2>>>0]=p}function lu(p){p>>>=0;var g=new Date((I(),G)[p+20>>>2>>>0]+1900,(I(),G)[p+16>>>2>>>0],(I(),G)[p+12>>>2>>>0],(I(),G)[p+8>>>2>>>0],(I(),G)[p+4>>>2>>>0],(I(),G)[p>>>2>>>0],0),x=(I(),G)[p+32>>>2>>>0],_=g.getTimezoneOffset(),z=new Date(g.getFullYear(),6,1).getTimezoneOffset(),R=new Date(g.getFullYear(),0,1).getTimezoneOffset(),U=Math.min(R,z);return 0>x?(I(),G)[p+32>>>2>>>0]=+(z!=R&&U==_):0<x!=(U==_)&&(z=Math.max(R,z),g.setTime(g.getTime()+6e4*((0<x?U:z)-_))),(I(),G)[p+24>>>2>>>0]=g.getDay(),x=($a(g.getFullYear())?xa:Pn)[g.getMonth()]+g.getDate()-1|0,(I(),G)[p+28>>>2>>>0]=x,(I(),G)[p>>>2>>>0]=g.getSeconds(),(I(),G)[p+4>>>2>>>0]=g.getMinutes(),(I(),G)[p+8>>>2>>>0]=g.getHours(),(I(),G)[p+12>>>2>>>0]=g.getDate(),(I(),G)[p+16>>>2>>>0]=g.getMonth(),(I(),G)[p+20>>>2>>>0]=g.getYear(),p=g.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function du(p,g,x,_,z,R,U){return o?$e(16,1,p,g,x,_,z,R,U):-52}function cu(p,g,x,_,z,R){if(o)return $e(17,1,p,g,x,_,z,R)}var $i={},Is=()=>performance.timeOrigin+performance.now();function pu(p,g){if(o)return $e(18,1,p,g);if($i[p]&&(clearTimeout($i[p].id),delete $i[p]),!g)return 0;var x=setTimeout(()=>{delete $i[p],Ze(()=>Ta(p,performance.timeOrigin+performance.now()))},g);return $i[p]={id:x,me:g},0}function Xl(p,g,x,_){p>>>=0,g>>>=0,x>>>=0,_>>>=0;var z=new Date().getFullYear(),R=new Date(z,0,1).getTimezoneOffset();z=new Date(z,6,1).getTimezoneOffset();var U=Math.max(R,z);(I(),he)[p>>>2>>>0]=60*U,(I(),G)[g>>>2>>>0]=+(R!=z),p=(g=Z=>{var ue=Math.abs(Z);return`UTC${0<=Z?"-":"+"}${String(Math.floor(ue/60)).padStart(2,"0")}${String(ue%60).padStart(2,"0")}`})(R),g=g(z),z<R?(qr(p,x,17),qr(g,_,17)):(qr(p,_,17),qr(g,x,17))}var Jl=()=>Date.now();function ed(p,g,x){return x>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(I(),ee)[x>>>3>>>0]=BigInt(p),0):28}var zs=[],Ns=(p,g)=>{zs.length=0;for(var x;x=(I(),me)[p++>>>0];){var _=x!=105;g+=(_&=x!=112)&&g%8?4:0,zs.push(x==112?(I(),he)[g>>>2>>>0]:x==106?(I(),ee)[g>>>3>>>0]:x==105?(I(),G)[g>>>2>>>0]:(I(),ge)[g>>>3>>>0]),g+=_?8:4}return zs};function td(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Hn[p](...g)}function rd(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Hn[p](...g)}var nd=()=>{};function id(p,g){return B(dt(p>>>0,g>>>0))}var Os=()=>{throw Ne+=1,"unwind"};function ad(){return 4294901760}var sd=()=>navigator.hardwareConcurrency,un={},xi=p=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+g[1]:0},fu=p=>{for(var g of p)(p=xi(g))&&(un[p]=g)};function od(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),fu(p),un.sd=xi(p[3]),un.Ud=p,un.sd}function Sa(p){if(!(p=un[p>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(p))p=g[1];else{if(!(g=/^(.+?)@/.exec(p)))return 0;p=g[1]}or(Sa.td??0),g=sn(p)+1;var x=Cr(g);return x&&qr(p,x,g),Sa.td=x,Sa.td}function ud(p){p>>>=0;var g=(I(),me).length;if(p<=g||4294901760<p)return!1;for(var x=1;4>=x;x*=2){var _=g*(1+.2/x);_=Math.min(_,p+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(p,_)/65536))-kr.buffer.byteLength+65535)/65536|0;try{kr.grow(_),F();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}function ld(p,g,x){if(p>>>=0,g>>>=0,un.sd==p)var _=un.Ud;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),fu(_);for(var z=3;_[z]&&xi(_[z])!=p;)++z;for(p=0;p<x&&_[p+z];++p)(I(),G)[g+4*p>>>2>>>0]=xi(_[p+z]);return p}var As,Rs={},ka=()=>{var _;if(!As){var p,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Rs)Rs[p]===void 0?delete g[p]:g[p]=Rs[p];var x=[];for(p in g)x.push(`${p}=${g[p]}`);As=x}return As};function Ln(p,g){if(o)return $e(19,1,p,g);p>>>=0,g>>>=0;var x,_=0,z=0;for(x of ka()){var R=g+_;(I(),he)[p+z>>>2>>>0]=R,_+=qr(x,R,1/0)+1,z+=4}return 0}function hu(p,g){if(o)return $e(20,1,p,g);p>>>=0,g>>>=0;var x=ka();for(var _ of((I(),he)[p>>>2>>>0]=x.length,p=0,x))p+=sn(_)+1;return(I(),he)[g>>>2>>>0]=p,0}function Ds(p){return o?$e(21,1,p):52}function Ms(p,g,x,_,z){return o?$e(22,1,p,g,x,_,z):52}function Bs(p,g,x,_){return o?$e(23,1,p,g,x,_):52}function Ps(p,g,x,_){return o?$e(24,1,p,g,x,_):70}var mu=[null,[],[]];function ln(p,g,x,_){if(o)return $e(25,1,p,g,x,_);g>>>=0,x>>>=0,_>>>=0;for(var z=0,R=0;R<x;R++){var U=(I(),he)[g>>>2>>>0],Z=(I(),he)[g+4>>>2>>>0];g+=8;for(var ue=0;ue<Z;ue++){var fe=p,Oe=(I(),me)[U+ue>>>0],qe=mu[fe];Oe===0||Oe===10?((fe===1?D:B)(ta(qe)),qe.length=0):qe.push(Oe)}z+=Z}return(I(),he)[_>>>2>>>0]=z,0}function dd(p){return p>>>0}o||(function(){for(var p=r.numThreads-1;p--;)os();De.push(async()=>{var g=(async function(){if(!o)return Promise.all(kt.map(ss))})();ft++,await g,--ft==0&&Qt&&(g=Qt,Qt=null,g())})})(),o||(kr=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F()),r.wasmBinary&&($=r.wasmBinary),r.stackSave=()=>Ve(),r.stackRestore=p=>Ue(p),r.stackAlloc=p=>Us(p),r.setValue=function(p,g,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(I(),te)[p>>>0]=g;break;case"i16":(I(),de)[p>>>1>>>0]=g;break;case"i32":(I(),G)[p>>>2>>>0]=g;break;case"i64":(I(),ee)[p>>>3>>>0]=BigInt(g);break;case"float":(I(),ye)[p>>>2>>>0]=g;break;case"double":(I(),ge)[p>>>3>>>0]=g;break;case"*":(I(),he)[p>>>2>>>0]=g;break;default:X(`invalid type for setValue: ${x}`)}},r.getValue=function(p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(I(),te)[p>>>0];case"i16":return(I(),de)[p>>>1>>>0];case"i32":return(I(),G)[p>>>2>>>0];case"i64":return(I(),ee)[p>>>3>>>0];case"float":return(I(),ye)[p>>>2>>>0];case"double":return(I(),ge)[p>>>3>>>0];case"*":return(I(),he)[p>>>2>>>0];default:X(`invalid type for getValue: ${g}`)}},r.UTF8ToString=dt,r.stringToUTF8=qr,r.lengthBytesUTF8=sn;var gu,yu,bi,or,Cr,dn,vu,Si,wu,Ea,Ta,Ca,We,Un,Ls,Ue,Us,Ve,_u,js,Xt,jn,Ws,Ia,Vs,Fs,za,$u,xu,cn,Na,Wn,Oa,qs,ki,pn,Aa,Hs,Ei,Gs,Ks,Qs,Zs,Ys,Xs,Ir,Ra,Da,bu,Su,Vn,ku,Js,eo,it,Ma,Ti,Fn,to,Ba,qn,Ci,fn,ro,Eu,zr,Tu=[je,Fe,gs,Cn,ra,In,Ho,zn,gi,yi,na,Go,Ko,Qo,Fr,_s,du,cu,pu,Ln,hu,Ds,Ms,Bs,Ps,ln],Hn={1124124:(p,g,x,_,z)=>{if(r===void 0||!r.jd)return 1;if((p=dt(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=r.jd.get(p)))return 2;if(g=Number(g>>>0),x=Number(x>>>0),_=Number(_>>>0),g+x>p.byteLength)return 3;try{let R=p.subarray(g,g+x);switch(z){case 0:(I(),me).set(R,_>>>0);break;case 1:r.ae?r.ae(_,R):r.Td(_,R);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(p,g,x)=>{r.Dd(p,(I(),me).subarray(g>>>0,g+x>>>0))},1125084:()=>r.ce(),1125126:p=>{r.Cd(p)},1125163:()=>{r.Md()},1125194:()=>{r.Nd()},1125223:()=>{r.Rd()},1125248:p=>r.Ld(p),1125281:p=>r.Pd(p),1125313:(p,g,x)=>{r.rd(Number(p),Number(g),Number(x),!0)},1125376:(p,g,x)=>{r.rd(Number(p),Number(g),Number(x))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:p=>{r.ic("Abs",p,void 0)},1125541:p=>{r.ic("Neg",p,void 0)},1125592:p=>{r.ic("Floor",p,void 0)},1125645:p=>{r.ic("Ceil",p,void 0)},1125697:p=>{r.ic("Reciprocal",p,void 0)},1125755:p=>{r.ic("Sqrt",p,void 0)},1125807:p=>{r.ic("Exp",p,void 0)},1125858:p=>{r.ic("Erf",p,void 0)},1125909:p=>{r.ic("Sigmoid",p,void 0)},1125964:(p,g,x)=>{r.ic("HardSigmoid",p,{alpha:g,beta:x})},1126043:p=>{r.ic("HardSwish",p,void 0)},1126100:p=>{r.ic("Log",p,void 0)},1126151:p=>{r.ic("Sin",p,void 0)},1126202:p=>{r.ic("Cos",p,void 0)},1126253:p=>{r.ic("Tan",p,void 0)},1126304:p=>{r.ic("Asin",p,void 0)},1126356:p=>{r.ic("Acos",p,void 0)},1126408:p=>{r.ic("Atan",p,void 0)},1126460:p=>{r.ic("Sinh",p,void 0)},1126512:p=>{r.ic("Cosh",p,void 0)},1126564:p=>{r.ic("Asinh",p,void 0)},1126617:p=>{r.ic("Acosh",p,void 0)},1126670:p=>{r.ic("Atanh",p,void 0)},1126723:p=>{r.ic("Tanh",p,void 0)},1126775:p=>{r.ic("Not",p,void 0)},1126826:(p,g,x)=>{r.ic("Clip",p,{min:g,max:x})},1126895:p=>{r.ic("Clip",p,void 0)},1126947:(p,g)=>{r.ic("Elu",p,{alpha:g})},1127005:p=>{r.ic("Gelu",p,void 0)},1127057:p=>{r.ic("Relu",p,void 0)},1127109:(p,g)=>{r.ic("LeakyRelu",p,{alpha:g})},1127173:(p,g)=>{r.ic("ThresholdedRelu",p,{alpha:g})},1127243:(p,g)=>{r.ic("Cast",p,{to:g})},1127301:p=>{r.ic("Add",p,void 0)},1127352:p=>{r.ic("Sub",p,void 0)},1127403:p=>{r.ic("Mul",p,void 0)},1127454:p=>{r.ic("Div",p,void 0)},1127505:p=>{r.ic("Pow",p,void 0)},1127556:p=>{r.ic("Equal",p,void 0)},1127609:p=>{r.ic("Greater",p,void 0)},1127664:p=>{r.ic("GreaterOrEqual",p,void 0)},1127726:p=>{r.ic("Less",p,void 0)},1127778:p=>{r.ic("LessOrEqual",p,void 0)},1127837:(p,g,x,_,z)=>{r.ic("ReduceMean",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128012:(p,g,x,_,z)=>{r.ic("ReduceMax",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128186:(p,g,x,_,z)=>{r.ic("ReduceMin",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128360:(p,g,x,_,z)=>{r.ic("ReduceProd",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128535:(p,g,x,_,z)=>{r.ic("ReduceSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128709:(p,g,x,_,z)=>{r.ic("ReduceL1",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128882:(p,g,x,_,z)=>{r.ic("ReduceL2",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129055:(p,g,x,_,z)=>{r.ic("ReduceLogSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129232:(p,g,x,_,z)=>{r.ic("ReduceSumSquare",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129412:(p,g,x,_,z)=>{r.ic("ReduceLogSumExp",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129592:p=>{r.ic("Where",p,void 0)},1129645:(p,g,x)=>{r.ic("Transpose",p,{perm:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129769:(p,g,x,_)=>{r.ic("DepthToSpace",p,{blocksize:g,mode:dt(x),format:_?"NHWC":"NCHW"})},1129902:(p,g,x,_)=>{r.ic("DepthToSpace",p,{blocksize:g,mode:dt(x),format:_?"NHWC":"NCHW"})},1130035:(p,g,x,_)=>{r.ic("DFT",p,{axis:g,inverse:x,onesided:_})},1130127:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt,yt)=>{r.ic("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,U],strides:[Z],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:Oe?Array.from((I(),G).subarray(Number(Oe)>>>0,Number(qe)>>>0)):[],outputShape:Xe?Array.from((I(),G).subarray(Number(Xe)>>>0,Number(tt)>>>0)):[],activation:dt(yt)})},1130560:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("ConvTranspose",p,{format:Z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[ue>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],outputShape:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[],activation:dt(tt)})},1131221:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt,yt)=>{r.ic("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,U],strides:[Z],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:Oe?Array.from((I(),G).subarray(Number(Oe)>>>0,Number(qe)>>>0)):[],outputShape:Xe?Array.from((I(),G).subarray(Number(Xe)>>>0,Number(tt)>>>0)):[],activation:dt(yt)})},1131654:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("ConvTranspose",p,{format:Z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(U)>>>0,(Number(U)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[ue>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],outputShape:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[],activation:dt(tt)})},1132315:(p,g)=>{r.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132406:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("AveragePool",p,{format:tt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],strides:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[]})},1132885:(p,g)=>{r.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132976:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("AveragePool",p,{format:tt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],strides:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[]})},1133455:(p,g)=>{r.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1133542:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("MaxPool",p,{format:tt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],strides:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[]})},1134017:(p,g)=>{r.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1134104:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt)=>{r.ic("MaxPool",p,{format:tt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],strides:qe?Array.from((I(),G).subarray(Number(qe)>>>0,Number(Xe)>>>0)):[]})},1134579:(p,g,x,_,z)=>{r.ic("Gemm",p,{alpha:g,beta:x,transA:_,transB:z})},1134683:p=>{r.ic("MatMul",p,void 0)},1134737:(p,g,x,_)=>{r.ic("ArgMax",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134845:(p,g,x,_)=>{r.ic("ArgMin",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134953:(p,g)=>{r.ic("Softmax",p,{axis:g})},1135016:(p,g)=>{r.ic("Concat",p,{axis:g})},1135076:(p,g,x,_,z)=>{r.ic("Split",p,{axis:g,numOutputs:x,splitSizes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1135232:p=>{r.ic("Expand",p,void 0)},1135286:(p,g)=>{r.ic("Gather",p,{axis:Number(g)})},1135357:(p,g)=>{r.ic("GatherElements",p,{axis:Number(g)})},1135436:(p,g)=>{r.ic("GatherND",p,{batch_dims:Number(g)})},1135515:(p,g,x,_,z,R,U,Z,ue,fe,Oe)=>{r.ic("Resize",p,{antialias:g,axes:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],coordinateTransformMode:dt(z),cubicCoeffA:R,excludeOutside:U,extrapolationValue:Z,keepAspectRatioPolicy:dt(ue),mode:dt(fe),nearestMode:dt(Oe)})},1135877:(p,g,x,_,z,R,U)=>{r.ic("Slice",p,{starts:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[],ends:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[],axes:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[]})},1136141:p=>{r.ic("Tile",p,void 0)},1136193:(p,g,x)=>{r.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136307:(p,g,x)=>{r.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136421:p=>{r.ic("Range",p,void 0)},1136474:(p,g)=>{r.ic("Einsum",p,{equation:dt(g)})},1136555:(p,g,x,_,z)=>{r.ic("Pad",p,{mode:g,value:x,pads:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1136698:(p,g,x,_,z,R)=>{r.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1136867:(p,g,x,_,z,R)=>{r.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1137036:(p,g,x)=>{r.ic("CumSum",p,{exclusive:Number(g),reverse:Number(x)})},1137133:(p,g,x)=>{r.ic("DequantizeLinear",p,{axis:g,blockSize:x})},1137223:(p,g,x,_,z)=>{r.ic("GridSample",p,{align_corners:g,mode:dt(x),padding_mode:dt(_),format:z?"NHWC":"NCHW"})},1137393:(p,g,x,_,z)=>{r.ic("GridSample",p,{align_corners:g,mode:dt(x),padding_mode:dt(_),format:z?"NHWC":"NCHW"})},1137563:(p,g)=>{r.ic("ScatterND",p,{reduction:dt(g)})},1137648:(p,g,x,_,z,R,U,Z,ue)=>{r.ic("Attention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R,qkvHiddenSizes:U?Array.from((I(),G).subarray(Number(Z)>>>0,Number(Z)+U>>>0)):[],pastPresentShareBuffer:!!ue})},1137920:p=>{r.ic("BiasAdd",p,void 0)},1137975:p=>{r.ic("BiasSplitGelu",p,void 0)},1138036:p=>{r.ic("FastGelu",p,void 0)},1138092:(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt,yt,At)=>{r.ic("Conv",p,{format:qe?"NHWC":"NCHW",auto_pad:g,dilations:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],group:z,kernel_shape:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(U)>>>0)):[],pads:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],strides:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Oe)>>>0)):[],w_is_const:()=>!!(I(),te)[Number(Xe)>>>0],activation:dt(tt),activation_params:yt?Array.from((I(),ye).subarray(Number(yt)>>>0,Number(At)>>>0)):[]})},1138676:p=>{r.ic("Gelu",p,void 0)},1138728:(p,g,x,_,z,R,U,Z,ue)=>{r.ic("GroupQueryAttention",p,{numHeads:g,kvNumHeads:x,scale:_,softcap:z,doRotary:R,rotaryInterleaved:U,smoothSoftmax:Z,localWindowSize:ue})},1138945:(p,g,x,_)=>{r.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139056:(p,g,x,_)=>{r.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139167:(p,g,x,_,z,R)=>{r.ic("MatMulNBits",p,{k:g,n:x,accuracyLevel:_,bits:z,blockSize:R})},1139294:(p,g,x,_,z,R)=>{r.ic("MultiHeadAttention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R})},1139453:(p,g)=>{r.ic("QuickGelu",p,{alpha:g})},1139517:(p,g,x,_,z)=>{r.ic("RotaryEmbedding",p,{interleaved:!!g,numHeads:x,rotaryEmbeddingDim:_,scale:z})},1139656:(p,g,x)=>{r.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139758:(p,g,x)=>{r.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139860:(p,g,x,_)=>{r.ic("GatherBlockQuantized",p,{gatherAxis:g,quantizeAxis:x,blockSize:_})},1139981:p=>{r.Qd(p)},1140015:(p,g)=>r.Sd(Number(p),Number(g),r.hd.Vd,r.hd.errors)};function Pa(p,g,x){return su(async()=>{await r.Od(Number(p),Number(g),Number(x))})}function no(){return typeof wasmOffsetConverter<"u"}function io(p,g,x,_){var z=Ve();try{return Oa(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function ao(p,g,x){var _=Ve();try{return Na(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;We(1,0)}}function so(p){var g=Ve();try{xu(p)}catch(x){if(Ue(g),x!==x+0)throw x;We(1,0)}}function cd(p,g){var x=Ve();try{return Ia(p,g)}catch(_){if(Ue(x),_!==_+0)throw _;We(1,0)}}function Cu(p,g,x){var _=Ve();try{Ws(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;We(1,0)}}function pd(p,g,x,_){var z=Ve();try{return Hs(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function fd(p,g){var x=Ve();try{qs(p,g)}catch(_){if(Ue(x),_!==_+0)throw _;We(1,0)}}function oo(p,g,x,_,z,R,U){var Z=Ve();try{return Wn(p,g,x,_,z,R,U)}catch(ue){if(Ue(Z),ue!==ue+0)throw ue;We(1,0)}}function Qr(p,g,x,_,z,R){var U=Ve();try{Vs(p,g,x,_,z,R)}catch(Z){if(Ue(U),Z!==Z+0)throw Z;We(1,0)}}function Iu(p,g,x,_){var z=Ve();try{za(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function Gn(p,g,x,_,z){var R=Ve();try{cn(p,g,x,_,z)}catch(U){if(Ue(R),U!==U+0)throw U;We(1,0)}}function wr(p,g,x,_,z,R,U){var Z=Ve();try{pn(p,g,x,_,z,R,U)}catch(ue){if(Ue(Z),ue!==ue+0)throw ue;We(1,0)}}function Ii(p,g,x,_,z,R,U){var Z=Ve();try{Aa(p,g,x,_,z,R,U)}catch(ue){if(Ue(Z),ue!==ue+0)throw ue;We(1,0)}}function Nr(p,g,x,_,z,R,U,Z){var ue=Ve();try{Qs(p,g,x,_,z,R,U,Z)}catch(fe){if(Ue(ue),fe!==fe+0)throw fe;We(1,0)}}function uo(p,g,x,_,z){var R=Ve();try{return ki(p,g,x,_,z)}catch(U){if(Ue(R),U!==U+0)throw U;We(1,0)}}function hd(p,g,x){var _=Ve();try{return $u(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;We(1,0)}}function md(p,g,x,_,z,R,U,Z){var ue=Ve();try{Zs(p,g,x,_,z,R,U,Z)}catch(fe){if(Ue(ue),fe!==fe+0)throw fe;We(1,0)}}function hn(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe){var Xe=Ve();try{Ei(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe)}catch(tt){if(Ue(Xe),tt!==tt+0)throw tt;We(1,0)}}function zi(p,g,x){var _=Ve();try{return Ys(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;return We(1,0),0n}}function Kn(p,g,x,_,z,R,U,Z,ue){var fe=Ve();try{Fs(p,g,x,_,z,R,U,Z,ue)}catch(Oe){if(Ue(fe),Oe!==Oe+0)throw Oe;We(1,0)}}function La(p){var g=Ve();try{return Xs(p)}catch(x){if(Ue(g),x!==x+0)throw x;We(1,0)}}function lo(p,g){var x=Ve();try{return Ba(p,g)}catch(_){if(Ue(x),_!==_+0)throw _;return We(1,0),0n}}function Qn(p,g,x,_){var z=Ve();try{return Ir(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function Zr(p,g,x,_,z,R,U){var Z=Ve();try{qn(p,g,x,_,z,R,U)}catch(ue){if(Ue(Z),ue!==ue+0)throw ue;We(1,0)}}function st(p){var g=Ve();try{return Ra(p)}catch(x){if(Ue(g),x!==x+0)throw x;return We(1,0),0n}}function at(p,g,x,_,z){var R=Ve();try{return Js(p,g,x,_,z)}catch(U){if(Ue(R),U!==U+0)throw U;We(1,0)}}function Yr(p,g,x,_,z,R){var U=Ve();try{return eo(p,g,x,_,z,R)}catch(Z){if(Ue(U),Z!==Z+0)throw Z;We(1,0)}}function Et(p,g,x,_,z,R){var U=Ve();try{return Gs(p,g,x,_,z,R)}catch(Z){if(Ue(U),Z!==Z+0)throw Z;We(1,0)}}function Lt(p,g,x,_,z,R){var U=Ve();try{return it(p,g,x,_,z,R)}catch(Z){if(Ue(U),Z!==Z+0)throw Z;We(1,0)}}function mn(p,g,x,_,z,R,U,Z){var ue=Ve();try{return Ks(p,g,x,_,z,R,U,Z)}catch(fe){if(Ue(ue),fe!==fe+0)throw fe;We(1,0)}}function Zn(p,g,x,_,z){var R=Ve();try{return Ma(p,g,x,_,z)}catch(U){if(Ue(R),U!==U+0)throw U;return We(1,0),0n}}function Ut(p,g,x,_){var z=Ve();try{return Ti(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function Ua(p,g,x,_){var z=Ve();try{return Fn(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function zu(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe){var Xe=Ve();try{return to(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe)}catch(tt){if(Ue(Xe),tt!==tt+0)throw tt;We(1,0)}}function Nu(p,g,x,_,z,R,U,Z,ue,fe,Oe){var qe=Ve();try{Vn(p,g,x,_,z,R,U,Z,ue,fe,Oe)}catch(Xe){if(Ue(qe),Xe!==Xe+0)throw Xe;We(1,0)}}function ja(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt,yt,At){var ut=Ve();try{ku(p,g,x,_,z,R,U,Z,ue,fe,Oe,qe,Xe,tt,yt,At)}catch(qt){if(Ue(ut),qt!==qt+0)throw qt;We(1,0)}}function Ou(p,g,x){var _=Ve();try{return Da(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;We(1,0)}}function Or(p,g,x){var _=Ve();try{return bu(p,g,x)}catch(z){if(Ue(_),z!==z+0)throw z;We(1,0)}}function Wa(p,g,x,_){var z=Ve();try{Su(p,g,x,_)}catch(R){if(Ue(z),R!==R+0)throw R;We(1,0)}}function Yn(){if(0<ft)Qt=Yn;else if(o)C==null||C(r),ne();else{for(var p=De;0<p.length;)p.shift()(r);0<ft?Qt=Yn:(r.calledRun=!0,P||(ne(),C==null||C(r)))}}return o||(zr=await Ee(),Yn()),r.PTR_SIZE=4,O?r:new Promise((p,g)=>{C=p,N=g})}var yv,om,d$=ae(()=>{"use strict";var e,r;yv=sm,om=(r=(e=globalThis.self)==null?void 0:e.name)==null?void 0:r.startsWith("em-pthread"),om&&sm()}),Tc,Sp,um,lr,vv,ml,lm,dm,Cc,cm,Ic,wv,zc,_v,Gp=ae(()=>{"use strict";Hp(),Tc=typeof location>"u"?void 0:location.origin,Sp=import.meta.url>"file:"&&import.meta.url<"file;",um=()=>{if(Sp){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Tc).href}return import.meta.url},lr=um(),vv=()=>{if(lr&&!lr.startsWith("blob:"))return lr.substring(0,lr.lastIndexOf("/")+1)},ml=(e,r)=>{try{let i=r??lr;return(i?new URL(e,i):new URL(e)).origin===Tc}catch{return!1}},lm=(e,r)=>{let i=r??lr;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},dm=(e,r)=>`${r??"./"}${e}`,Cc=async e=>{let r=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},cm=async e=>(await import(e)).default,Ic=(l$(),Vo(hv)).default,wv=async()=>{if(!lr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ml(lr))return[void 0,Ic()];let e=await Cc(lr);return[e,Ic(e)]},zc=(d$(),Vo(gv)).default,_v=async(e,r,i,s)=>{let o=zc&&!(e||r);if(o)if(lr)o=ml(lr)||s&&!i;else if(s&&!i)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,zc];{let u="ort-wasm-simd-threaded.jsep.mjs",d=e??lm(u,r),c=i&&d&&!ml(d,r),f=c?await Cc(d):d??dm(u,r);return[c?f:void 0,await cm(f)]}}}),Nc,gl,To,Oc,pm,fm,hm,Kp,rt,Ji=ae(()=>{"use strict";Gp(),gl=!1,To=!1,Oc=!1,pm=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},hm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Kp=async e=>{if(gl)return Promise.resolve();if(To)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Oc)throw new Error("previous call to 'initializeWebAssembly()' failed.");To=!0;let r=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!hm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let s=pm();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,u=typeof o=="string"?o:void 0,d=o==null?void 0:o.mjs,c=(d==null?void 0:d.href)??d,f=o==null?void 0:o.wasm,m=(f==null?void 0:f.href)??f,v=e.wasmBinary,[w,$]=await _v(c,u,i>1,!!v||!!m),S=!1,b=[];if(r>0&&b.push(new Promise(C=>{setTimeout(()=>{S=!0,C()},r)})),b.push(new Promise((C,N)=>{let E={numThreads:i};if(v)E.wasmBinary=v,E.locateFile=T=>T;else if(m||u)E.locateFile=T=>m??u+T;else if(c&&c.indexOf("blob:")!==0)E.locateFile=T=>new URL(T,c).href;else if(w){let T=vv();T&&(E.locateFile=A=>T+A)}$(E).then(T=>{To=!1,gl=!0,Nc=T,C(),w&&URL.revokeObjectURL(w)},T=>{To=!1,Oc=!0,N(T)})})),await Promise.race(b),S)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},rt=()=>{if(gl&&Nc)return Nc;throw new Error("WebAssembly is not initialized yet.")}}),Wr,Ol,Qe,Qp=ae(()=>{"use strict";Ji(),Wr=(e,r)=>{let i=rt(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},Ol=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,u])=>{let d=r?r+o:o;if(typeof u=="object")Ol(u,d+".",i,s);else if(typeof u=="string"||typeof u=="number")s(d,u.toString());else if(typeof u=="boolean")s(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Qe=e=>{let r=rt(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetLastError(o,o+s);let u=Number(r.getValue(o,s===4?"i32":"i64")),d=r.getValue(o+s,"*"),c=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${c}`)}finally{r.stackRestore(i)}}}),$v,c$=ae(()=>{"use strict";Ji(),Qp(),$v=(e,r)=>{let i=rt(),s=0,o=[],u=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(u.terminate=!1);let d=0;(e==null?void 0:e.tag)!==void 0&&(d=Wr(e.tag,o)),s=i._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,d),s===0&&Qe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ol(e.extra,"",new WeakSet,(c,f)=>{let m=Wr(c,o),v=Wr(f,o);i._OrtAddRunConfigEntry(s,m,v)!==0&&Qe(`Can't set a run config entry: ${c} - ${f}.`)});for(let c of r)i._OrtRunOptionsAddActiveLoraAdapter(s,c)!==0&&Qe("Can't add an active LoRA adapter.");return[s,o]}catch(d){throw s!==0&&i._OrtReleaseRunOptions(s),o.forEach(c=>i._free(c)),d}}}),mm,gm,ym,Li,vm,xv,p$=ae(()=>{"use strict";Ji(),Qp(),mm=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},gm=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ym=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Li=(e,r,i,s)=>{let o=Wr(r,s),u=Wr(i,s);rt()._OrtAddSessionConfigEntry(e,o,u)!==0&&Qe(`Can't set a session config entry: ${r} - ${i}.`)},vm=async(e,r,i)=>{let s=r.executionProviders;for(let o of s){let u=typeof o=="string"?o:o.name,d=[],c;switch(u){case"webnn":if(u="WEBNN",Li(e,"session.disable_quant_qdq","1",i),Li(e,"session.disable_qdq_constant_folding","1",i),typeof o!="string"){let $=o==null?void 0:o.deviceType;$&&Li(e,"deviceType",$,i)}break;case"webgpu":if(u="JS",typeof o!="string"){let $=o;if($!=null&&$.preferredLayout){if($.preferredLayout!=="NCHW"&&$.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${$.preferredLayout}`);Li(e,"preferredLayout",$.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let f=d.length,m=0,v=0;if(f>0){m=rt()._malloc(f*rt().PTR_SIZE),i.push(m),v=rt()._malloc(f*rt().PTR_SIZE),i.push(v);for(let $=0;$<f;$++)rt().setValue(m+$*rt().PTR_SIZE,d[$][0],"*"),rt().setValue(v+$*rt().PTR_SIZE,d[$][1],"*")}let w;if(c===void 0){let $=Wr(u,i);w=await rt()._OrtAppendExecutionProvider(e,$,m,v,f)}w!==0&&Qe(`Can't append execution provider: ${u}.`)}},xv=async e=>{let r=rt(),i=0,s=[],o=e||{};ym(o);try{let u=mm(o.graphOptimizationLevel??"all"),d=gm(o.executionMode??"sequential"),c=typeof o.logId=="string"?Wr(o.logId,s):0,f=o.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let m=o.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let v=typeof o.optimizedModelFilePath=="string"?Wr(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(u,!!o.enableCpuMemArena,!!o.enableMemPattern,d,!!o.enableProfiling,0,c,f,m,v),i===0&&Qe("Can't create session options."),o.executionProviders&&await vm(i,o,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);Li(i,"enableGraphCapture",o.enableGraphCapture.toString(),s)}if(o.freeDimensionOverrides)for(let[w,$]of Object.entries(o.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof $!="number"||!Number.isInteger($)||$<0)throw new Error(`free dimension override value must be a non-negative integer: ${$}`);let S=Wr(w,s);r._OrtAddFreeDimensionOverride(i,S,$)!==0&&Qe(`Can't set a free dimension override: ${w} - ${$}.`)}return o.extra!==void 0&&Ol(o.extra,"",new WeakSet,(w,$)=>{Li(i,w,$,s)}),[i,s]}catch(u){throw i!==0&&r._OrtReleaseSessionOptions(i)!==0&&Qe("Can't release session options."),s.forEach(d=>r._free(d)),u}}}),Hi,bn,Gi,Ll,Al,Zp,Yp,kp,ze=ae(()=>{"use strict";Hi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},bn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Gi=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,u)=>o*u,1);return i>0?Math.ceil(s*i):void 0},Ll=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Al=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Zp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",kp=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ul,Xp=ae(()=>{"use strict";Hp(),Ul=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),u;try{u=new ArrayBuffer(s)}catch(c){if(c instanceof RangeError){let f=Math.ceil(s/65536);u=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let d=0;for(;;){let{done:c,value:f}=await o.read();if(c)break;let m=f.byteLength;new Uint8Array(u,d,m).set(f),d+=m}return new Uint8Array(u,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),wm,_m,$m,xm,Jp,bm,Ge,Sn=ae(()=>{"use strict";ze(),wm=["V","I","W","E","F"],_m=(e,r)=>{console.log(`[${wm[e]},${new Date().toISOString()}]${r}`)},Jp=(e,r)=>{$m=e,xm=r},bm=(e,r)=>{let i=Al(e),s=Al($m);i>=s&&_m(i,typeof r=="function"?r():r)},Ge=(...e)=>{xm&&bm(...e)}}),Sm,ns,K,Rl,bv,Sv,kv,Me=ae(()=>{"use strict";Sm=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},ns=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let u=Math.max(e.length,r.length),d=new Array(u);if(i){if(s<2||o<2)return;let c=Sm.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(c===void 0)return;[d[u-2],d[u-1]]=c}for(let c=i?3:1;c<=u;c++){let f=s-c<0?1:e[s-c],m=o-c<0?1:r[o-c];if(f!==m&&f>1&&m>1)return;let v=Math.max(f,m);if(f&&m)d[u-c]=Math.max(f,m);else{if(v>1)return;d[u-c]=0}}return d}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},K=class Cl{static size(r){return Cl.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),u=s-1;for(;u>=0;){if(r[u]%i===0){o[u]=r[u]/i;break}if(i%r[u]!==0)throw new Error("cannot convert shape");o[u]=1,i/=r[u],u--}for(u--;u>=0;u--)o[u]=r[u];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return Cl.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return Cl.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let u=i;u<s;u++){if(r[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(r[u])}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,u)=>o+i[u]+i[u+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Rl=class li{static adjustPoolAttributes(r,i,s,o,u,d){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let c=0;c<i.length-2;c++)c>=s.length?s.push(i[c+2]):s[c]=i[c+2];for(let c=0;c<s.length;c++)if(c<o.length){if(o[c]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let c=0;c<s.length;c++)if(c<u.length){if(u[c]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let c=0;c<s.length*2;c++)if(c<d.length){if(d[c]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let c=0;c<s.length;c++){if(s[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[c]>=s[c]||d[c+s.length]>=s[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,u,d,c){if(c){if(u.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<r.length-2;f++)li.adjustPadAndReturnShape(r[f+(d?1:2)],i[f],s[f],o[f],u,f,f+r.length-2,c)}}static computePoolOutputShape(r,i,s,o,u,d,c,f=0){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return li.computeShapeHelper(r,i,m,s,o,u,d,c,f),m}static computeConvOutputShape(r,i,s,o,u,d,c){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[r[0],i[0]];return li.computeShapeHelper(!1,r,f,s,o,u,d,c),f}static computeShapeHelper(r,i,s,o,u,d,c,f,m=0){if(r)for(let v=0;v<i.length-2;v++)s.push(1);else for(let v=0;v<i.length-2;v++)s.push(li.adjustPadAndReturnShape(i[v+2],o[v],u[v],d[v],c,v,v+i.length-2,f,m))}static computeOutputSize(r,i,s,o,u){let d=Math.floor(r/i)+1;return u===1&&(d=Math.ceil(r/i)+1,(d-1)*i>=s+o&&(d-=1)),d}static adjustPadAndReturnShape(r,i,s,o,u,d,c,f,m=0){let v=s*(o-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return u[d]=0,u[c]=0,li.computeOutputSize(r-v,i,r,0,m);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=(Math.floor((r+i-1)/i)-1)*i+o-r;return u[d]=Math.floor(f==="SAME_LOWER"?(w+1)/2:w/2),u[c]=w-u[d],li.computeOutputSize(r+u[d]+u[c]-v,i,r,u[d],m)}default:throw new Error("Unsupported AutoPad type")}else return li.computeOutputSize(r+u[d]+u[c]-v,i,r,u[d],m)}},bv=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let u,d,c;r?(u=e[1],d=e[0]):(u=e[0],d=e[1]);let f=-1;if(s?(c=i[0],f=1):(c=i[1],f=0),i[f]!==d)throw new Error("dimension mismatch");if(u<=0||c<=0||d<=0)throw new Error("invalid shape specified");if(o&&!ns.isValidBroadcast(o,[u,c]))throw new Error("gemm: invalid bias shape for broadcast");return[u,c,d]}},Sv=-34028234663852886e22,kv=34028234663852886e22}),ef,Ev=ae(()=>{"use strict";ze(),ef=(e,r)=>new(Ll(r))(e)}),Ac,km,Rc,Em,Dc,Tm,Mc,Bc,Pc,Cm,Tv,f$=ae(()=>{"use strict";ze(),Sn(),Ac=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),km=(e,r)=>{if(r==="int32")return e;let i=Ac.get(r);if(!i)throw new Error(`WebNN backend does not support data type: ${r}`);let s=i/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);let o=e.byteLength/s,u=new(Ll(r))(e.buffer,e.byteOffset,o);switch(r){case"int64":case"uint64":{let d=new Int32Array(o);for(let c=0;c<o;c++){let f=u[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[c]=Number(f)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(r==="uint32"&&u.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${r} to 'int32'`)}},Rc=(e,r)=>{if(r==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,i);switch(r){case"int64":{let o=BigInt64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"uint64":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let o=BigUint64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"int8":{if(s.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let o=Int8Array.from(s,Number);return new Uint8Array(o.buffer)}case"uint8":{if(s.some(o=>o<0||o>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let o=Uint32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${r}`)}},Em=1,Dc=()=>Em++,Tm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Mc=(e,r)=>{let i=Ac.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return r.length>0?Math.ceil(r.reduce((s,o)=>s*o)*i/8):0},Bc=class{constructor(e){this.isDataConverted=!1;let{sessionId:r,context:i,tensor:s,dataType:o,shape:u,fallbackDataType:d}=e;this.sessionId=r,this.mlContext=i,this.mlTensor=s,this.dataType=o,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Mc(this.dataType,this.tensorShape)}destroy(){Ge("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let r=await this.mlContext.readTensor(this.mlTensor),i=Rc(new Uint8Array(r),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return new Uint8Array(i).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,r,i){return this.mlContext===e&&this.dataType===r&&this.tensorShape.length===i.length&&this.tensorShape.every((s,o)=>s===i[o])}setIsDataConverted(e){this.isDataConverted=e}},Pc=class{constructor(e,r){this.tensorManager=e,this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,r,i,s){let o=this.tensorManager.getMLContext(e),u=this.tensorManager.getMLOpSupportLimits(e),d;if(!(u!=null&&u.input.dataTypes.includes(r))){if(d=Tm.get(r),!d||!(u!=null&&u.input.dataTypes.includes(d)))throw new Error(`WebNN backend does not support data type: ${r}`);Ge("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${r} to ${d}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(o,r,i))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Mc(r,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,r,i,c,!0,!0,d),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let r=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")r=km(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(r);return}else Ge("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(r):this.activeUpload=new Uint8Array(r)}async download(e){var r,i;if(this.activeUpload){let s=(r=this.wrapper)!=null&&r.isDataConverted?Rc(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(s):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s);return}else return s.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Cm=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let r=this.backend.getMLContext(e);if(!r)throw new Error("MLContext not found for session.");return r}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Dc();return this.tensorTrackersById.set(e,new Pc(this)),e}releaseTensorId(e){let r=this.tensorTrackersById.get(e);r&&(this.tensorTrackersById.delete(e),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(e,r,i,s,o){Ge("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${i}, shape: ${s}, copyOld: ${o}}`);let u=this.tensorTrackersById.get(r);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(e,i,s,o)}upload(e,r){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(r)}async download(e,r){Ge("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(r)}releaseTensorsForSession(e){for(let r of this.freeTensors)r.sessionId===e&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==e)}registerTensor(e,r,i,s){let o=this.getMLContext(e),u=Dc(),d=new Bc({sessionId:e,context:o,tensor:r,dataType:i,shape:s});return this.tensorTrackersById.set(u,new Pc(this,d)),this.externalTensors.add(d),u}async getCachedTensor(e,r,i,s,o,u,d){let c=this.getMLContext(e);for(let[m,v]of this.freeTensors.entries())if(v.canReuseTensor(c,r,i)){Ge("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}`);let w=this.freeTensors.splice(m,1)[0];return w.sessionId=e,w}Ge("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}}`);let f=await c.createTensor({dataType:d??r,shape:i,dimensions:i,usage:s,writable:o,readable:u});return new Bc({sessionId:e,context:c,tensor:f,dataType:r,shape:i,fallbackDataType:d})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tv=(...e)=>new Cm(...e)}),Co,Im,Cv,h$=ae(()=>{"use strict";ze(),Ji(),Ev(),f$(),Sn(),Co=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Im=(e,r)=>{if(e===r)return!0;if(e===void 0||r===void 0)return!1;let i=Object.keys(e).sort(),s=Object.keys(r).sort();return i.length===s.length&&i.every((o,u)=>o===s[u]&&e[o]===r[o])},Cv=class{constructor(e){this.tensorManager=Tv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Jp(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ge("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ge("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let r=this.temporarySessionTensorIds.get(e);if(r){for(let i of r)Ge("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){let i=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let r=this.mlContextCache.findIndex(i=>Im(i.options,e));if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,r.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let r=this.mlContextBySessionId.get(e);if(!r)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(r);let s=this.mlContextCache.findIndex(o=>o.mlContext===r);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ge("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s,o){let u=Co.get(i);if(!u)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,r,u,s,o)}async createTemporaryTensor(e,r,i){Ge("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${i}}`);let s=Co.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,o,s,i,!1);let u=this.temporarySessionTensorIds.get(e);return u?u.push(o):this.temporarySessionTensorIds.set(e,[o]),o}uploadTensor(e,r){if(!rt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ge("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return ef(i,r)}}registerMLTensor(e,r,i,s){let o=Co.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);let u=this.tensorManager.registerTensor(e,r,o,s);return Ge("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${o}, dimensions: ${s}} -> {tensorId: ${u}}`),u}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,r){let i=this.sessionGraphInputs.get(e);return i?i.includes(r):!1}isGraphOutput(e,r){let i=this.sessionGraphOutputs.get(e);return i?i.includes(r):!1}isGraphInputOutputTypeSupported(e,r,i=!0){let s=Co.get(Hi(r)),o=this.mlOpSupportLimitsBySessionId.get(e);return typeof s>"u"?!1:i?!!(o!=null&&o.input.dataTypes.includes(s)):!!(o!=null&&o.output.dataTypes.includes(s))}flush(){}}}),tf=ae(()=>{"use strict"}),Lc,yl,vl,zm,Nm,Uc,Ep,Om,Iv,m$=ae(()=>{"use strict";Sn(),tf(),Lc=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),yl=[],vl=e=>Math.ceil(Number(e)/16)*16,zm=e=>{for(let r=0;r<yl.length;r++){let i=yl[r];if(e<=i)return i}return Math.ceil(e/16)*16},Nm=1,Uc=()=>Nm++,Ep=async(e,r,i,s)=>{let o=vl(i),u=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=e.getCommandEncoder();e.endComputePass(),d.copyBufferToBuffer(r,0,u,0,o),e.flush(),await u.mapAsync(GPUMapMode.READ);let c=u.getMappedRange();if(s){let f=s();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{u.destroy()}},Om=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Lc)yl.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,u=vl(o),d=this.storageCache.get(e);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==o)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${o}`);if(u===o&&s%4===0)this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,i,s,o);else{let c=new Uint8Array(u);c.set(r),this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,c,0,u)}Ge("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=vl(i.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return Ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Uc();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),Ge("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ge("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=zm(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||u){let c=(o?this.freeBuffers:this.freeUniformBuffers).get(i);c?c.length>0?s=c.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let d={id:Uc(),type:0,buffer:s};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(e)}),Ge("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${d.id}`),d}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(r);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ge("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,r){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Ep(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Lc.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ge("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Iv=(...e)=>new Om(...e)}),Am,Ye,pt=ae(()=>{"use strict";Am=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ye=e=>new Am(e)}),is,wl,St,bt,ke,ct,Tp,rs,di,be,Io,J,_e,zv,rf,Rm,Nv,Le=ae(()=>{"use strict";ze(),Me(),is=64,wl=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},St=(e,r=1)=>{let i=wl(e,r);return typeof i=="string"?i:i[0]},bt=(e,r=1)=>{let i=wl(e,r);return typeof i=="string"?i:i[1]},ke=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:K.computeStrides(i)})}),r},ct=e=>e%4===0?4:e%2===0?2:1,Tp=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,rs=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,di=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,be=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,Io=(e,r,i,s,o)=>{let u=typeof i=="number",d=u?i:i.length,c=[...new Array(d).keys()],f=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=wl(r,o),v=typeof m=="string"?m:m[1],w=typeof m=="string"?m:m[0],$={indices:f,value:v,storage:w,tensor:r},S=O=>typeof O=="string"?O:`${O}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},C=u?"uniforms.":"",N=`${C}${e}_shape`,E=`${C}${e}_strides`,T="";for(let O=0;O<d-1;O++)T+=`
    let dim${O} = current / ${be(E,O,d)};
    let rest${O} = current % ${be(E,O,d)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;T+=`indices[${d-1}] = current;`;let A=d<2?"":`
  fn o2i_${e}(offset: u32) -> ${$.indices} {
    var indices: ${$.indices};
    var current = offset;
    ${T}
    return indices;
  }`,D=O=>(b.offsetToIndices=!0,d<2?O:`o2i_${e}(${O})`),B=[];if(d>=2)for(let O=d-1;O>=0;O--)B.push(`${be(E,O,d)} * (indices[${O}])`);let P=d<2?"":`
  fn i2o_${e}(indices: ${$.indices}) -> u32 {
    return ${B.join("+")};
  }`,V=O=>(b.indicesToOffset=!0,d<2?O:`i2o_${e}(${O})`),I=(...O)=>d===0?"0u":`${$.indices}(${O.map(S).join(",")})`,Y=(O,F)=>d<2?`${O}`:`${be(O,F,d)}`,te=(O,F,ne)=>d<2?`${O}=${ne};`:`${be(O,F,d)}=${ne};`,me={},de=(O,F)=>{b.broadcastedIndicesToOffset=!0;let ne=`${F.name}broadcastedIndicesTo${e}Offset`;if(ne in me)return`${ne}(${O})`;let X=[];for(let ve=d-1;ve>=0;ve--){let Ee=F.indicesGet("outputIndices",ve+F.rank-d);X.push(`${Y(E,ve)} * (${Ee} % ${Y(N,ve)})`)}return me[ne]=`fn ${ne}(outputIndices: ${F.type.indices}) -> u32 {
             return ${X.length>0?X.join("+"):"0u"};
           }`,`${ne}(${O})`},pe=(O,F)=>(()=>{if($.storage===$.value)return`${e}[${O}]=${F};`;if($.storage==="vec2<u32>"&&$.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${F}), select(0u, 0xFFFFFFFFu, ${F} < 0));`;if($.storage==="vec2<u32>"&&$.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${F}), 0u);`;if($.storage==="u32"&&$.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${F}));`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),G=O=>(()=>{if($.storage===$.value)return`${e}[${O}]`;if($.storage==="vec2<u32>"&&$.value==="i32")return`i32(${e}[${O}].x)`;if($.storage==="vec2<u32>"&&$.value==="u32")return`u32(${e}[${O}].x)`;if($.storage==="u32"&&$.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),he=d<2?"":`
  fn get_${e}ByIndices(indices: ${$.indices}) -> ${v} {
    return ${G(`i2o_${e}(indices)`)};
  }`,ye=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${O}) -> ${v} {
    return get_${e}ByIndices(${I(F)});
  }`})(),ge=(...O)=>{if(O.length!==d)throw new Error(`indices length must be ${d}`);let F=O.map(S).join(",");return d===0?G("0u"):d===1?G(F[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${F})`)},ee=O=>d<2?G(O):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${O})`),re=d<2?"":`
  fn set_${e}ByIndices(indices: ${$.indices}, value: ${v}) {
    ${pe(`i2o_${e}(indices)`,"value")}
  }`,se=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${O}, value: ${v}) {
    set_${e}ByIndices(${I(F)}, value);
  }`})();return{impl:()=>{let O=[],F=!1;return b.offsetToIndices&&(O.push(A),F=!0),b.indicesToOffset&&(O.push(P),F=!0),b.broadcastedIndicesToOffset&&(Object.values(me).forEach(ne=>O.push(ne)),F=!0),b.set&&(O.push(se),F=!0),b.setByIndices&&(O.push(re),F=!0),b.get&&(O.push(ye),F=!0),b.getByIndices&&(O.push(he),F=!0),!u&&F&&O.unshift(`const ${N} = ${$.indices}(${i.join(",")});`,`const ${E} = ${$.indices}(${K.computeStrides(i).join(",")});`),O.join(`
`)},type:$,offsetToIndices:D,indicesToOffset:V,broadcastedIndicesToOffset:de,indices:I,indicesGet:Y,indicesSet:te,set:(...O)=>{if(O.length!==d+1)throw new Error(`indices length must be ${d}`);let F=O[d];if(typeof F!="string")throw new Error("value must be string");let ne=O.slice(0,d).map(S).join(",");return d===0?pe("0u",F):d===1?pe(ne[0],F):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${ne}, ${F})`)},setByOffset:pe,setByIndices:(O,F)=>d<2?pe(O,F):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${F});`),get:ge,getByOffset:G,getByIndices:ee,usage:s,name:e,strides:E,shape:N,rank:d}},J=(e,r,i,s=1)=>Io(e,r,i,"input",s),_e=(e,r,i,s=1)=>Io(e,r,i,"output",s),zv=(e,r,i)=>Io(e,r,i,"atomicOutput",1),rf=(e,r,i,s=1)=>Io(e,r,i,"internal",s),Rm=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=is){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},Nv=(e,r)=>new Rm(e,r)}),Dm,jc,Mm,Bm,Pm,Lm,pr,Ov,Av,ci=ae(()=>{"use strict";ze(),Me(),pt(),Le(),Dm=(e,r)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(r.length!==0&&r.length!==e[0].dims.length)throw new Error(`perm size ${r.length} does not match input rank ${e[0].dims.length}`)},jc=(e,r)=>r.length!==0?r:[...new Array(e).keys()].reverse(),Mm=(e,r)=>K.sortBasedOnPerm(e,jc(e.length,r)),Bm=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let u=0;u<r;++u)o+=`a[${e[u]}]=i[${u}];`;return o+="return a;}"},Pm=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},Lm=(e,r)=>{let i=0;for(let s=0;s<e.length;++s)if(r[e[s]]!==1){if(e[s]<i)return!1;i=e[s]}return!0},pr=(e,r)=>{let i=e.dataType,s=e.dims.length,o=jc(s,r),u=Mm(e.dims,o),d=e.dims,c=u,f=s<2||Lm(o,e.dims),m;if(f)return m=b=>{let C=J("input",i,d,4),N=_e("output",i,c,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(C,N)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:m};let{newShape:v,newPerm:w}=Pm(e.dims,o),$=K.areEqual(w,[2,3,1]),S=K.areEqual(w,[3,1,2]);if(v.length===2||$||S){d=$?[v[0],v[1]*v[2]]:S?[v[0]*v[1],v[2]]:v,c=[d[1],d[0]];let b=16;return m=C=>{let N=J("a",i,d.length),E=_e("output",i,c.length);return`
  ${C.registerUniform("output_size","u32").declareVariables(N,E)}
  var<workgroup> tile : array<array<${E.type.value}, ${b+1}>, ${b}>;
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
      ${E.setByIndices(`${E.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let C=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c[1]/b),y:Math.ceil(c[0]/b)},programUniforms:[{type:12,data:C},...ke(d,c)]}},getShaderSource:m}}return m=b=>{let C=J("a",i,d.length),N=_e("output",i,c.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(C,N)}

  ${Bm(o,s,C,N)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${N.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${N.setByOffset("global_idx",C.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(d,c)]}},getShaderSource:m}},Ov=(e,r)=>{Dm(e.inputs,r.perm),e.compute(pr(e.inputs[0],r.perm))},Av=e=>Ye({perm:e.perm})}),Um,jm,Wm,Vm,Fm,qm,Hm,Gm,Km,Qm,Br,Rv,Dv,Mv,Bv,Pv,Lv,Uv,jv,Wv,Vv,g$=ae(()=>{"use strict";ze(),Me(),Le(),nf(),ci(),Um={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},jm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Wm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Vm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fm=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},qm=(e,r)=>{let i=[],s=e.length;for(let u=0;u<s;u++)r.indexOf(u)===-1&&i.push(e[u]);let o=r.map(u=>e[u]);return[i,o]},Hm=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let u=0;u<i;u++)r.indexOf(u)===-1?s.push(e[o++]):s.push(1);return s},Gm=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},Km=(e,r)=>{let i=[];if(!Gm(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},Qm=(e,r,i,s,o,u,d)=>{let c=i[0].dims,f=K.size(u),m=K.size(d),v=J("_A",i[0].dataType,c),w=_e("output",o,u),$=64;f===1&&($=256);let S=`
          var<workgroup> aBestValues : array<f32, ${$}>;
       `,b=C=>`
        ${C.registerUniform("reduceSize","u32").declareVariables(v,w)}
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
           let candidate = f32(${v.getByOffset("offset + k")});
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
        }`;return{name:e,shaderCache:{hint:`${r};${$}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:f},programUniforms:[{type:12,data:m}]})}},Br=(e,r,i,s)=>{let o=e.inputs.length===1?i:Cp(e.inputs,i),u=o.axes;u.length===0&&!o.noopWithEmptyAxes&&(u=e.inputs[0].dims.map((S,b)=>b));let d=K.normalizeAxes(u,e.inputs[0].dims.length),c=d,f=e.inputs[0],m=Km(c,e.inputs[0].dims.length);m.length>0&&(f=e.compute(pr(e.inputs[0],m),{inputs:[0],outputs:[-1]})[0],c=Fm(c.length,f.dims.length));let[v,w]=qm(f.dims,c),$=v;o.keepDims&&($=Hm(v,d)),e.compute(Qm(r,o.cacheKey,[f],s,e.inputs[0].dataType,$,w),{inputs:[f]})},Rv=(e,r)=>{Br(e,"ReduceMeanShared",r,"mean")},Dv=(e,r)=>{Br(e,"ReduceL1Shared",r,"l1")},Mv=(e,r)=>{Br(e,"ReduceL2Shared",r,"l2")},Bv=(e,r)=>{Br(e,"ReduceLogSumExpShared",r,"logSumExp")},Pv=(e,r)=>{Br(e,"ReduceMaxShared",r,"max")},Lv=(e,r)=>{Br(e,"ReduceMinShared",r,"min")},Uv=(e,r)=>{Br(e,"ReduceProdShared",r,"prod")},jv=(e,r)=>{Br(e,"ReduceSumShared",r,"sum")},Wv=(e,r)=>{Br(e,"ReduceSumSquareShared",r,"sumSquare")},Vv=(e,r)=>{Br(e,"ReduceLogSumShared",r,"logSum")}}),Pr,Zm,Dl,Cp,Lr,Ym,Xm,Jm,eg,tg,rg,ng,ig,ag,sg,Ur,Fv,qv,Hv,Gv,Kv,Qv,Zv,Yv,Xv,Jv,nf=ae(()=>{"use strict";ze(),Me(),pt(),Le(),g$(),Pr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dl=(e,r,i,s,o,u,d=!1,c=!1)=>{let f=[],m=i[0].dims,v=m.length,w=K.normalizeAxes(o,v),$=!c&&w.length===0;m.forEach((C,N)=>{$||w.indexOf(N)>=0?d&&f.push(1):f.push(C)});let S=f.length,b=K.size(f);return{name:e,shaderCache:r,getShaderSource:C=>{let N=[],E=J("_A",i[0].dataType,v),T=_e("output",u,S),A=s(E,T,w),D=A[2];for(let B=0,P=0;B<v;B++)$||w.indexOf(B)>=0?(d&&P++,D=`for(var j${B}: u32 = 0; j${B} < ${m[B]}; j${B}++) {
                  ${A[2].includes("last_index")?`let last_index = j${B};`:""}
                  ${E.indicesSet("input_indices",B,`j${B}`)}
                  ${D}
                }`):(N.push(`${E.indicesSet("input_indices",B,T.indicesGet("output_indices",P))};`),P++);return`

        ${C.registerUniform("output_size","u32").declareVariables(E,T)}

        ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${E.type.indices};
          let output_indices = ${T.offsetToIndices("global_idx")};

          ${N.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${D}
          ${A[3]}
          ${A.length===4?T.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(m,f)]})}},Cp=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ye({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},Lr=(e,r,i,s)=>{let o=e.inputs,u=o.length===1?i:Cp(o,i);e.compute(Dl(r,{hint:u.cacheKey,inputDependencies:["rank"]},[o[0]],u.noopWithEmptyAxes&&u.axes.length===0?Zm:s,u.axes,o[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},Ym=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Xm=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Jm=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},eg=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},tg=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceMax",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(i.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},rg=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceMean",r,(i,s,o)=>{let u=1;for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&(u*=e.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${u});`]})},ng=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceMin",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},ig=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},ag=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},sg=(e,r)=>{Pr(e.inputs),Lr(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Ur=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let u=0;u<r.length;u++)r.indexOf(u)===-1?s*=e[u]:o*=e[u];return o<32&&s>1024},Fv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rg(e,r):Rv(e,r)},qv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Xm(e,r):Dv(e,r)},Hv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Jm(e,r):Mv(e,r)},Gv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?eg(e,r):Bv(e,r)},Kv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?tg(e,r):Pv(e,r)},Qv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ng(e,r):Lv(e,r)},Zv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ig(e,r):Uv(e,r)},Yv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ag(e,r):jv(e,r)},Xv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?sg(e,r):Wv(e,r)},Jv=(e,r)=>{Ur(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Ym(e,r):Vv(e,r)}}),Wc,e1,t1,Ip,y$=ae(()=>{"use strict";ze(),pt(),nf(),Wc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},e1=(e,r)=>{Wc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Dl("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},t1=(e,r)=>{Wc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Dl("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},Ip=e=>Ye(e)}),og,_l,ug,lg,dg,Fo,cg,r1,af=ae(()=>{"use strict";ze(),Me(),tf(),Le(),og=(e,r)=>{let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4],c=e[5];if(d&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],m=i.dims[1],v=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==v)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=o.dims[0]/3,$=w,S=$;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of r.qkvHiddenSizes)if(A%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=r.qkvHiddenSizes[0],$=r.qkvHiddenSizes[1],S=r.qkvHiddenSizes[2]}let b=m;if(w!==$)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==w+$+S)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let C=0;if(d){if($!==S)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==$/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(C=d.dims[3])}let N=b+C,E=-1,T=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==r.numHeads||c.dims[2]!==m||c.dims[3]!==N)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:C,kvSequenceLength:b,totalSequenceLength:N,maxSequenceLength:E,inputHiddenSize:v,hiddenSize:w,vHiddenSize:S,headSize:Math.floor(w/r.numHeads),vHeadSize:Math.floor(S/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:T,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},_l=(e,r,i)=>r&&e?`
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
    `,ug=(e,r,i,s,o,u,d,c)=>{let f=ct(d?1:u),m=64,v=u/f;v<m&&(m=32);let w=Math.ceil(u/f/m),$=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:o},{type:12,data:v},{type:12,data:w}],S=St(e.dataType,f),b=bt(1,f),C=["type"];d&&C.push("type"),c&&C.push("type");let N=E=>{let T=_e("x",e.dataType,e.dims,f),A=[T],D=d?J("seq_lens",d.dataType,d.dims):void 0;D&&A.push(D);let B=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;B&&A.push(B);let P=bt(e.dataType),V=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${m}>;
  var<workgroup> thread_sum: array<f32, ${m}>;
  ${E.registerUniforms(V).declareVariables(...A)}
  ${E.mainStart([m,1,1])}
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${S};${f}`,inputDependencies:C},getShaderSource:N,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:o,z:r*i},programUniforms:$})}},lg=(e,r,i,s,o,u,d,c,f)=>{let m=d+u.kvSequenceLength,v=[u.batchSize,u.numHeads,u.sequenceLength,m],w=e>1&&s,$=u.kvNumHeads?u.kvNumHeads:u.numHeads,S=w?[u.batchSize,$,m,u.headSize]:void 0,b=u.nReps?u.nReps:1,C=u.scale===0?1/Math.sqrt(u.headSize):u.scale,N=ct(u.headSize),E=u.headSize/N,T=12,A={x:Math.ceil(m/T),y:Math.ceil(u.sequenceLength/T),z:u.batchSize*u.numHeads},D=[{type:12,data:u.sequenceLength},{type:12,data:E},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:C},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:b}],B=w&&s&&K.size(s.dims)>0,P=["type","type"];B&&P.push("type"),o&&P.push("type"),c&&P.push("type"),f&&P.push("type");let V=[{dims:v,dataType:r.dataType,gpuDataType:0}];w&&V.push({dims:S,dataType:r.dataType,gpuDataType:0});let I=Y=>{let te=J("q",r.dataType,r.dims,N),me=J("key",i.dataType,i.dims,N),de=[te,me];if(B){let re=J("past_key",s.dataType,s.dims,N);de.push(re)}o&&de.push(J("attention_bias",o.dataType,o.dims));let pe=c?J("seq_lens",c.dataType,c.dims):void 0;pe&&de.push(pe);let G=f?J("total_sequence_length_input",f.dataType,f.dims):void 0;G&&de.push(G);let he=_e("output",r.dataType,v),ye=[he];w&&ye.push(_e("present_key",r.dataType,S,N));let ge=bt(1,N),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${T}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${T*T}>;
  var<workgroup> tileK: array<${te.type.storage}, ${T*T}>;
  ${Y.registerUniforms(ee).declareVariables(...de,...ye)}
  ${Y.mainStart([T,T,1])}
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
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${N};${o!==void 0};${s!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:V,dispatchGroup:A,programUniforms:D}),getShaderSource:I}},dg=(e,r,i,s,o,u,d=void 0,c=void 0)=>{let f=u+o.kvSequenceLength,m=o.nReps?o.nReps:1,v=o.vHiddenSize*m,w=e>1&&s,$=o.kvNumHeads?o.kvNumHeads:o.numHeads,S=w?[o.batchSize,$,f,o.headSize]:void 0,b=[o.batchSize,o.sequenceLength,v],C=12,N={x:Math.ceil(o.vHeadSize/C),y:Math.ceil(o.sequenceLength/C),z:o.batchSize*o.numHeads},E=[{type:12,data:o.sequenceLength},{type:12,data:f},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:v},{type:12,data:u},{type:12,data:o.kvSequenceLength},{type:12,data:m}],T=w&&s&&K.size(s.dims)>0,A=["type","type"];T&&A.push("type"),d&&A.push("type"),c&&A.push("type");let D=[{dims:b,dataType:r.dataType,gpuDataType:0}];w&&D.push({dims:S,dataType:r.dataType,gpuDataType:0});let B=P=>{let V=J("probs",r.dataType,r.dims),I=J("v",i.dataType,i.dims),Y=[V,I];T&&Y.push(J("past_value",s.dataType,s.dims));let te=d?J("seq_lens",d.dataType,d.dims):void 0;d&&Y.push(te);let me=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;c&&Y.push(me);let de=[_e("output",r.dataType,b)];w&&de.push(_e("present_value",r.dataType,S));let pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${C}u;
  var<workgroup> tileQ: array<${V.type.value}, ${C*C}>;
  var<workgroup> tileV: array<${V.type.value}, ${C*C}>;
  ${P.registerUniforms(pe).declareVariables(...Y,...de)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:D,dispatchGroup:N,programUniforms:E}),getShaderSource:B}},Fo=(e,r,i,s,o,u,d,c,f,m,v=void 0,w=void 0)=>{let $=Math.min(e.outputCount,1+(d?1:0)+(c?1:0)),S=$>1?d:void 0,b=$>1?c:void 0,C=$>1?m.pastSequenceLength:0,N=C+m.kvSequenceLength,E=f&&K.size(f.dims)>0?f:void 0,T=[r,i];S&&K.size(S.dims)>0&&T.push(S),E&&T.push(E),v&&T.push(v),w&&T.push(w);let A=e.compute(lg($,r,i,S,E,m,C,v,w),{inputs:T,outputs:$>1?[-1,1]:[-1]})[0];e.compute(ug(A,m.batchSize,m.numHeads,C,m.sequenceLength,N,v,w),{inputs:v&&w?[A,v,w]:[A],outputs:[]});let D=[A,s];b&&K.size(b.dims)>0&&D.push(b),v&&D.push(v),w&&D.push(w),e.compute(dg($,A,s,b,m,C,v,w),{inputs:D,outputs:$>1?[0,2]:[0]})},cg=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,u=r.headSize,d=12,c={x:Math.ceil(r.headSize/d),y:Math.ceil(r.sequenceLength/d),z:r.batchSize*r.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],m=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],v=w=>{let $=_e("output_q",f[0].dataType,i),S=_e("output_k",f[0].dataType,i),b=_e("output_v",f[0].dataType,i),C=J("input",f[0].dataType,f[0].dims),N=J("weight",f[1].dataType,f[1].dims),E=J("bias",f[2].dataType,f[2].dims),T=C.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${T}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${T}, ${d*d}>;
  var<workgroup> tileWeightK: array<${T}, ${d*d}>;
  var<workgroup> tileWeightV: array<${T}, ${d*d}>;
  ${w.registerUniforms(A).declareVariables(C,N,E,$,S,b)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:m}),getShaderSource:v},{inputs:f,outputs:[-1,-1,-1]})},r1=(e,r)=>{let i=og(e.inputs,r),[s,o,u]=cg(e,i);return Fo(e,s,o,u,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),pg,fg,hg,n1,v$=ae(()=>{"use strict";fr(),ze(),Me(),pt(),Le(),pg=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,u)=>{let d=o.length;if(d!==s.length)throw new Error(`${u}: num dimensions != ${d}`);o.forEach((c,f)=>{if(c!==s[f])throw new Error(`${u}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},fg=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,u=e[0].dims,d=s?ct(u[u.length-1]):1,c=o==="NHWC"&&u.length>1?d:1,f=K.size(u)/d,m=s,v=m?u.length:u,w=J("x",e[0].dataType,e[0].dims,d),$=J("scale",e[1].dataType,e[1].dims,c),S=J("bias",e[2].dataType,e[2].dims,c),b=J("inputMean",e[3].dataType,e[3].dims,c),C=J("inputVar",e[4].dataType,e[4].dims,c),N=_e("y",e[0].dataType,v,d),E=()=>{let A="";if(s)A=`let cOffset = ${u.length===1?"0u":o==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(o==="NCHW")A=`
            ${N.indicesSet("outputIndices","0","0")}
            let cOffset = ${N.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${$.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let D=1;D<$.rank;D++)A+=`cIndices[${D}] = outputIndices[${D}];`;A+=`let cOffset = ${$.indicesToOffset("cIndices")};`}return A},T=A=>`
  const epsilon = ${i};
  ${A.registerUniform("outputSize","u32").declareVariables(w,$,S,b,C,N)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${N.offsetToIndices(`global_idx * ${d}`)};
    ${E()}
    let scale = ${$.getByOffset("cOffset")};
    let bias = ${S.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${C.getByOffset("cOffset")};
    let x = ${w.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${N.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:T,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m?[{type:12,data:f},...ke(u)]:[{type:12,data:f}]})}},hg=e=>Ye(e),n1=(e,r)=>{let{inputs:i,outputCount:s}=e,o=hg({...r,outputCount:s});if(lt.webgpu.validateInputContent&&pg(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fg(i,o))}}),mg,gg,i1,w$=ae(()=>{"use strict";Me(),Le(),mg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gg=e=>{let r=e[0].dims,i=e[0].dims[2],s=K.size(r)/4,o=e[0].dataType,u=J("input",o,r,4),d=J("bias",o,[i],4),c=J("residual",o,r,4),f=_e("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:m=>`
  const channels = ${i}u / 4;
  ${m.declareVariables(u,d,c,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},i1=e=>{mg(e.inputs),e.compute(gg(e.inputs))}}),yg,Ke,a1,s1,o1,u1,l1,d1,c1,p1,f1,vg,h1,m1,g1,y1,Lo,v1,Il,w1,_1,$1,x1,b1,S1,k1,E1,T1,C1,I1,z1,N1,O1,A1,R1,D1,Vc,M1,zp,Np,B1,P1,L1,wg,_g,U1,sf=ae(()=>{"use strict";ze(),Me(),pt(),Le(),yg=(e,r,i,s,o,u,d)=>{let c=Math.ceil(r/4),f="";typeof o=="string"?f=`${o}(a)`:f=o("a");let m=J("inputData",i,[c],4),v=_e("outputData",s,[c],4),w=[{name:"vec_size",type:"u32"}];return d&&w.push(...d),`
      ${e.registerUniforms(w).declareVariables(m,v)}

  ${u??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${v.setByOffset("global_idx",f)}
  }`},Ke=(e,r,i,s,o,u=e.dataType,d,c)=>{let f=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return d&&f.push(...d),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:m=>yg(m,K.size(e.dims),e.dataType,u,i,s,c),getRunData:m=>({outputs:[{dims:e.dims,dataType:u}],dispatchGroup:{x:Math.ceil(K.size(m[0].dims)/64/4)},programUniforms:f})}},a1=e=>{e.compute(Ke(e.inputs[0],"Abs","abs"))},s1=e=>{e.compute(Ke(e.inputs[0],"Acos","acos"))},o1=e=>{e.compute(Ke(e.inputs[0],"Acosh","acosh"))},u1=e=>{e.compute(Ke(e.inputs[0],"Asin","asin"))},l1=e=>{e.compute(Ke(e.inputs[0],"Asinh","asinh"))},d1=e=>{e.compute(Ke(e.inputs[0],"Atan","atan"))},c1=e=>{e.compute(Ke(e.inputs[0],"Atanh","atanh"))},p1=e=>Ye(e),f1=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(Ke(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},vg=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ye({min:r,max:i})},h1=(e,r)=>{let i=r||vg(e.inputs),s=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},m1=e=>{e.compute(Ke(e.inputs[0],"Ceil","ceil"))},g1=e=>{e.compute(Ke(e.inputs[0],"Cos","cos"))},y1=e=>{e.compute(Ke(e.inputs[0],"Cosh","cosh"))},Lo=e=>Ye(e),v1=(e,r)=>{let i=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
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
}`,w1=e=>{let r=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Il(r)))},_1=e=>{e.compute(Ke(e.inputs[0],"Exp","exp"))},$1=e=>{e.compute(Ke(e.inputs[0],"Floor","floor"))},x1=e=>{let r=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Il(r)))},b1=(e,r)=>{let i=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},S1=e=>{e.compute(Ke(e.inputs[0],"Not",r=>`!${r}`))},k1=e=>{e.compute(Ke(e.inputs[0],"Neg",r=>`-${r}`))},E1=e=>{e.compute(Ke(e.inputs[0],"Reciprocal",r=>`1.0/${r}`))},T1=e=>{let r=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Relu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > vec4<${r}>(0.0))`))},C1=e=>{e.compute(Ke(e.inputs[0],"Sigmoid",r=>`(1.0 / (1.0 + exp(-${r})))`))},I1=e=>Ye(e),z1=(e,r)=>{let i=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${s} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},N1=e=>{let r=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSwish",i=>`${i} * max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), vec4<${r}>(${r}(1.0 / 6.0)) * ${i} + vec4<${r}>(0.5)))`))},O1=e=>{e.compute(Ke(e.inputs[0],"Sin","sin"))},A1=e=>{e.compute(Ke(e.inputs[0],"Sinh","sinh"))},R1=e=>{e.compute(Ke(e.inputs[0],"Sqrt","sqrt"))},D1=e=>{e.compute(Ke(e.inputs[0],"Tan","tan"))},Vc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,M1=e=>{e.compute(Ke(e.inputs[0],"Tanh",Vc))},zp=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Vc("v")};
}
`,Np=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,B1=e=>{let r=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"FastGelu",Np,zp(r),void 0,e.inputs[0].dataType))},P1=(e,r)=>{let i=bt(e.inputs[0].dataType);return e.compute(Ke(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},L1=e=>{e.compute(Ke(e.inputs[0],"Log","log"))},wg=(e,r)=>`
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
`,_g=e=>`quick_gelu_impl(${e})`,U1=(e,r)=>{let i=bt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"QuickGelu",_g,wg(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),$g,xg,j1,_$=ae(()=>{"use strict";Me(),Le(),sf(),$g=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xg=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=J("input",e[0].dataType,e[0].dims,4),s=J("bias",e[0].dataType,[e[0].dims[2]],4),o=_e("output",e[0].dataType,r,4),u=K.size(r)/4,d=St(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:c=>`
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
  }`}},j1=e=>{$g(e.inputs),e.compute(xg(e.inputs))}}),bg,Sg,jr,W1,V1,F1,q1,H1,G1,K1,Q1,Z1,Y1,$$=ae(()=>{"use strict";ze(),Me(),Le(),bg=(e,r,i,s,o,u,d,c,f,m,v,w)=>{let $,S;typeof c=="string"?$=S=(T,A)=>`${c}((${T}),(${A}))`:typeof c=="function"?$=S=c:($=c.scalar,S=c.vector);let b=_e("outputData",v,s.length,4),C=J("aData",f,r.length,4),N=J("bData",m,i.length,4),E;if(o)if(u){let T=K.size(r)===1,A=K.size(i)===1,D=r.length>0&&r[r.length-1]%4===0,B=i.length>0&&i[i.length-1]%4===0;T||A?E=b.setByOffset("global_idx",S(T?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"),A?`${N.type.value}(${N.getByOffset("0")}.x)`:N.getByOffset("global_idx"))):E=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${C.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${N.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",S(d||D?C.getByOffset("offsetA / 4u"):`${C.type.value}(${C.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||B?N.getByOffset("offsetB / 4u"):`${N.type.value}(${N.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else E=b.setByOffset("global_idx",S(C.getByOffset("global_idx"),N.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let T=(A,D,B="")=>{let P=`aData[indexA${D}][componentA${D}]`,V=`bData[indexB${D}][componentB${D}]`;return`
            let outputIndices${D} = ${b.offsetToIndices(`global_idx * 4u + ${D}u`)};
            let offsetA${D} = ${C.broadcastedIndicesToOffset(`outputIndices${D}`,b)};
            let offsetB${D} = ${N.broadcastedIndicesToOffset(`outputIndices${D}`,b)};
            let indexA${D} = offsetA${D} / 4u;
            let indexB${D} = offsetB${D} / 4u;
            let componentA${D} = offsetA${D} % 4u;
            let componentB${D} = offsetB${D} % 4u;
            ${A}[${D}] = ${B}(${$(P,V)});
          `};v===9?E=`
            var data = vec4<u32>(0);
            ${T("data",0,"u32")}
            ${T("data",1,"u32")}
            ${T("data",2,"u32")}
            ${T("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:E=`
            ${T("outputData[global_idx]",0)}
            ${T("outputData[global_idx]",1)}
            ${T("outputData[global_idx]",2)}
            ${T("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(C,N,b)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${E}
      }`},Sg=(e,r,i,s,o,u,d=i.dataType)=>{let c=i.dims.map(Number),f=s.dims.map(Number),m=!K.areEqual(c,f),v=c,w=K.size(c),$=!1,S=!1,b=[m];if(m){let C=ns.calcShape(c,f,!1);if(!C)throw new Error("Can't perform binary op on the given tensors");v=C.slice(),w=K.size(v);let N=K.size(c)===1,E=K.size(f)===1,T=c.length>0&&c[c.length-1]%4===0,A=f.length>0&&f[f.length-1]%4===0;b.push(N),b.push(E),b.push(T),b.push(A);let D=1;for(let B=1;B<v.length;B++){let P=c[c.length-B],V=f[f.length-B];if(P===V)D*=P;else break}D%4===0?(S=!0,$=!0):(N||E||T||A)&&($=!0)}else $=!0;return b.push($),{name:e,shaderCache:{hint:r+b.map(C=>C.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:C=>bg(C,c,f,v,$,m,S,o,i.dataType,s.dataType,d,u),getRunData:()=>({outputs:[{dims:v,dataType:d}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(v)/4)},...ke(c,f,v)]})}},jr=(e,r,i,s,o,u)=>{e.compute(Sg(r,o??"",e.inputs[0],e.inputs[1],i,s,u))},W1=e=>{jr(e,"Add",(r,i)=>`${r}+${i}`)},V1=e=>{jr(e,"Div",(r,i)=>`${r}/${i}`)},F1=e=>{jr(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},q1=e=>{jr(e,"Mul",(r,i)=>`${r}*${i}`)},H1=e=>{let r=J("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;jr(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
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
      `)},G1=e=>{jr(e,"Sub",(r,i)=>`${r}-${i}`)},K1=e=>{jr(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},Q1=e=>{jr(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},Z1=e=>{jr(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},Y1=e=>{jr(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),kg,Eg,X1,J1,x$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),kg=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,u=s.dims.length;e.forEach((d,c)=>{if(c!==i){if(d.dataType!==o)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((f,m)=>{if(m!==r&&f!==s.dims[m])throw new Error("non concat dimensions must match")})}})},Eg=(e,r,i,s,o=0)=>{let u=e.reduce((E,T)=>E+K.size(T.dims),0),d=new Array(e.length),c=new Array(e.length),f=new Array(e.length),m=0,v=o,w=[],$=[],S=[{type:12,data:u}];for(let E=0;E<e.length;++E)d[E]=m,c[E]=v,m+=K.size(e[E].dims),v+=e[E].dims[r],$.push(e[E].dims.length),f[E]=J(`input${E}`,s,$[E]),w.push("rank"),S.push({type:12,data:d[E]}),S.push({type:12,data:c[E]});for(let E=0;E<e.length;++E)S.push(...ke(e[E].dims));S.push(...ke(i));let b=_e("output",s,i.length),C=f.map((E,T)=>{let A=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${T}`};
        var outputIndices = ${E.offsetToIndices("inputOffset")};
        ${b.indicesGet("outputIndices",r)} += uniforms.outputAxisOffset${T};
        ${b.setByIndices("outputIndices",E.getByOffset("inputOffset"))}`;return e.length===1?A:T===0?`if (inputIndex == 0u) {${A}}`:T===e.length-1?`else {${A}}`:`else if (inputIndex == ${T}u) {${A}}`}).join(`
`),N=E=>`

  ${(()=>{E.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)E.registerUniform(`inputOffset${T}`,"u32"),E.registerUniform(`outputAxisOffset${T}`,"u32");return E.declareVariables(...f,b)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${f.slice(1).map((T,A)=>`if (global_idx < uniforms.inputOffset${A+1}) {
      return ${A}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${C}
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:S}),getShaderSource:N}},X1=(e,r)=>{let i=e.inputs,s=i[0].dims,o=K.normalizeAxis(r.axis,s.length);kg(i,o);let u=s.slice();u[o]=i.reduce((m,v)=>m+(v.dims.length>o?v.dims[o]:0),0);let d=i.filter(m=>K.size(m.dims)>0);if(d.length===0){e.output(0,u);return}let c=e.deviceLimits.maxStorageBuffersPerShaderStage-1,f=0;for(let m=0;m<d.length;m+=c){let v=d.slice(m,m+c);e.compute(Eg(v,o,u,i[0].dataType,f),{inputs:v,outputs:[0]}),f+=v.reduce((w,$)=>w+$.dims[o],0)}},J1=e=>Ye({axis:e.axis})}),Zi,Yi,Xi,of,ea=ae(()=>{"use strict";ze(),Me(),Zi=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Yi=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},Xi=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},of=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[Sv,kv];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Nt,ew,uf=ae(()=>{"use strict";Nt=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},ew=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),tw,b$=ae(()=>{"use strict";tw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),jo,lf,df=ae(()=>{"use strict";ze(),Me(),Le(),ea(),jo=(e,r,i,s,o)=>{let u=s-i;return`
      ${Array.from({length:i}).map((d,c)=>`
      if (${be(r.shape,c,r.rank)} != 1) {
        ${r.indicesSet(e,c,be(o,c+u,s))}
      } else {
        ${r.indicesSet(e,c,0)}
      }`).join("")}
`},lf=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d[d.length-2],m=c[c.length-1],v=d[d.length-1],w=ct(m),$=ct(v),S=ct(f),b=K.size(i)/w/S,C=e.length>2,N=s?s.slice(0,-2):i.slice(0,-2),E=[K.size(N),f,m],T=[{type:12,data:b},{type:12,data:f},{type:12,data:m},{type:12,data:v}];Yi(r,T),T.push(...ke(N,d,c)),C&&T.push(...ke(e[2].dims)),T.push(...ke(E));let A=D=>{let B=rf("batch_dims",e[0].dataType,N.length),P=J("a",e[0].dataType,d.length,$),V=J("b",e[1].dataType,c.length,w),I=_e("output",e[0].dataType,E.length,w),Y=St(I.type.tensor),te=Zi(r,I.type.value,Y),me=[P,V],de="";if(C){let he=o?w:1;me.push(J("bias",e[2].dataType,e[2].dims.length,he)),de=`${o?`value += bias[col / ${he}];`:`value += ${I.type.value}(bias[row + i]);`}`}let pe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Xi(r,pe);let G=()=>{let he=`var a_data: ${P.type.value};`;for(let ye=0;ye<$;ye++)he+=`
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
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${w};${$};${S};${o}`,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:T}),getShaderSource:A}}}),Tg,Cg,Op,Fc,Ig,Ap,zg,Ml,cf=ae(()=>{"use strict";ze(),Me(),Le(),ea(),df(),uf(),Tg=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,Cg=(e,r)=>e?`
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
        }`,Op=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32)=>{let f=r[1]*e[1],m=r[0]*e[0],v=o?f:u,w=o?u:f,$=v/r[0],S=u/r[1];if(!((o&&$===4&&e[1]===4||!o&&($===3||$===4))&&v%r[0]===0&&u%r[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${$} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${$} must be 3 or 4.
  tileAWidth ${v} must be divisible by workgroupSize[0]${r[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${$}<${i}>, ${v/$}>, ${w}>;
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
}`},Fc=(e,r)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,Ig=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ap=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32,f=!1)=>{let m=e[1]*r[1],v=e[0]*r[0],w=o?m:u,$=o?u:m;if(!($%r[1]===0&&w%r[0]===0&&u%r[1]===0))throw new Error(`tileAHight ${$} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${r[0]}, tileInner ${u} must be divisible by workgroupSize[1]${r[1]}`);let S=$/r[1],b=w/r[0],C=u/r[1],N=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${v};

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
            for (var inputCol = localCol; inputCol < ${v}; inputCol = inputCol + ${r[0]}) {
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
  var<workgroup> mm_Bsub : array<array<${i}, ${v}>, ${u}>;
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
`},zg=(e,r,i,s,o=!1)=>{let[u,d,c,f]=s,m=St(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Nt(e,m)} {
      var value = ${Nt(e,m)}(0.0);
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

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Nt(e,m)} {
      var value = ${Nt(e,m)}(0.0);
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

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Nt(e,m)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${o?"bias[colIn]":`${Nt(e,m)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ml=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d.slice(0,-2),m=c.slice(0,-2),v=s?s.slice(0,-2):i.slice(0,-2),w=K.size(v),$=d[d.length-2],S=d[d.length-1],b=c[c.length-1],C=S%4===0&&b%4===0,N=$<=8?[4,1,1]:[4,4,1],E=[8,8,1],T=[Math.ceil(b/E[0]/N[0]),Math.ceil($/E[1]/N[1]),Math.ceil(w/E[2]/N[2])],A=C?4:1,D=[...f,$,S/A],B=D.length,P=[...m,S,b/A],V=P.length,I=[w,$,b/A],Y=[{type:6,data:$},{type:6,data:b},{type:6,data:S}];Yi(r,Y),Y.push(...ke(v,D,P));let te=["rank","rank"],me=e.length>2;me&&(Y.push(...ke(e[2].dims)),te.push("rank")),Y.push(...ke(I));let de=pe=>{let G=v.length,he=rf("batchDims",e[0].dataType,G,1),ye=St(e[0].dataType),ge=J("a",e[0].dataType,B,A),ee=J("b",e[1].dataType,V,A),re=_e("result",e[0].dataType,I.length,A),se=[ge,ee];if(me){let ve=o?A:1;se.push(J("bias",e[2].dataType,e[2].dims.length,ve))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Xi(r,O);let F=St(re.type.tensor),ne=Zi(r,re.type.value,F),X=zg(A,me,ne,[he,ge,ee,re],o);return`
  ${pe.registerUniforms(O).registerInternalVariables(he).declareVariables(...se,re)}
  ${X}
  ${C?Op(N,E,ye,he):Ap(N,E,ye,he)}
                   `};return{name:"MatMul",shaderCache:{hint:`${N};${r.activation};${C};${o}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:Y}),getShaderSource:de}}}),Ng,rw,S$=ae(()=>{"use strict";ze(),Sn(),Le(),ea(),uf(),b$(),cf(),Ng=(e,r,i,s,o=!1,u,d=4,c=4,f=4,m="f32")=>{let v=Y=>{switch(Y){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${Y} is not supported.`)}},w=Y=>{switch(Y){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${Y} is not supported.`)}},$=e?`
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
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",C=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",N=e?"row":"col",E=e?"col":"row",T=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${N} / outWidth;
    let outCol = ${N} % outWidth;

    let WRow = ${E} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${E} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${E} % inChannels;
    var resData = ${Nt(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${C}) {
      ${$}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${v(d)}
    }
    return resData;`,A=e?r&&s?`
    let col = colIn * ${d};
    ${T}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${T}
    }
    return ${Nt(d,m)}(0.0);`:s&&i?`
    let col = colIn * ${d};
    ${T}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${T}
    }
    return ${Nt(d,m)}(0.0);`,D=e?s&&i?w(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w(c)}
    }
    return ${Nt(c,m)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${w(c)}
    }
    return ${Nt(c,m)}(0.0);`,B=Nt(f,m),P=Nt(e?d:c,m),V=Nt(e?c:d,m),I=Zi(u,B,m);return`
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
    }`},rw=(e,r,i,s,o,u,d,c,f)=>{let m=r.format==="NHWC",v=m?e[0].dims[3]:e[0].dims[1],w=i[0],$=m?i[2]:i[3],S=m?i[1]:i[2],b=m?i[3]:i[1],C=m&&(v%4===0||v%3===0)&&b%4===0,N=m?b:$*S,E=m?$*S:b,T=[8,8,1],A=s<=8?[4,1,1]:[4,4,1],D=[Math.ceil(N/T[0]/A[0]),Math.ceil(E/T[1]/A[1]),Math.ceil(w/T[2]/A[2])];Ge("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${D}`);let B=C?m&&v%4!==0?3:4:1,P=T[1]*A[1],V=T[0]*A[0],I=Math.max(T[0]*B,T[1]),Y=s%P===0,te=o%V===0,me=u%I===0,de=C?[B,4,4]:[1,1,1],pe=[{type:6,data:s},{type:6,data:o},{type:6,data:u},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];Yi(r,pe),pe.push(...ke(e[0].dims,e[1].dims));let G=["rank","rank"];d&&(pe.push(...ke(e[2].dims)),G.push("rank")),pe.push(...ke(i));let he=ye=>{let ge=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Xi(r,ge);let ee=C?4:1,re=St(e[0].dataType),se=`
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
        ${Ng(m,Y,te,me,d,r,de[0],de[1],de[2],re)}
        ${C?Op(A,T,re,void 0,!m,I):Ap(A,T,re,void 0,!m,I,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${B};${C};${Y};${te};${me};${P};${V};${I}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:D[0],y:D[1],z:D[2]},programUniforms:pe}),getShaderSource:he}}}),Og,qc,zo,Ag,Hc,Rg,nw,iw,k$=ae(()=>{"use strict";ze(),Sn(),Me(),Le(),ea(),uf(),Og=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},qc=e=>typeof e=="number"?[e,e,e]:e,zo=(e,r)=>r<=1?e:e+(e-1)*(r-1),Ag=(e,r,i,s=1)=>{let o=zo(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},Hc=(e,r,i,s,o)=>{o==null&&(o=Ag(e,r[0],s[0]));let u=[0,0,0,i];for(let d=0;d<3;d++)e[d]+2*o>=r[d]&&(u[d]=Math.trunc((e[d]-r[d]+2*o)/s[d]+1));return u},Rg=(e,r,i,s,o,u,d,c,f,m)=>{let v,w,$,S;if(e==="VALID"&&(e=0),typeof e=="number"){v={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Hc([r,i,s,1],[c,f,m],1,[o,u,d],e);w=b[0],$=b[1],S=b[2]}else if(Array.isArray(e)){if(!e.every((C,N,E)=>C===E[0]))throw Error(`Unsupported padding parameter: ${e}`);v={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Hc([r,i,s,1],[c,f,m],1,[o,u,d],e[0]);w=b[0],$=b[1],S=b[2]}else if(e==="SAME_UPPER"){w=Math.ceil(r/o),$=Math.ceil(i/u),S=Math.ceil(s/d);let b=(w-1)*o+c-r,C=($-1)*u+f-i,N=(S-1)*d+m-s,E=Math.floor(b/2),T=b-E,A=Math.floor(C/2),D=C-A,B=Math.floor(N/2),P=N-B;v={top:A,bottom:D,left:B,right:P,front:E,back:T}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:v,outDepth:w,outHeight:$,outWidth:S}},nw=(e,r,i,s,o,u=!1,d="channelsLast")=>{let c,f,m,v,w;if(d==="channelsLast")[c,f,m,v,w]=e;else if(d==="channelsFirst")[c,w,f,m,v]=e;else throw new Error(`Unknown dataFormat ${d}`);let[$,,S,b,C]=r,[N,E,T]=qc(i),[A,D,B]=qc(s),P=zo(S,A),V=zo(b,D),I=zo(C,B),{padInfo:Y,outDepth:te,outHeight:me,outWidth:de}=Rg(o,f,m,v,N,E,T,P,V,I),pe=u?$*w:$,G=[0,0,0,0,0];return d==="channelsFirst"?G=[c,pe,te,me,de]:d==="channelsLast"&&(G=[c,te,me,de,pe]),{batchSize:c,dataFormat:d,inDepth:f,inHeight:m,inWidth:v,inChannels:w,outDepth:te,outHeight:me,outWidth:de,outChannels:pe,padInfo:Y,strideDepth:N,strideHeight:E,strideWidth:T,filterDepth:S,filterHeight:b,filterWidth:C,effectiveFilterDepth:P,effectiveFilterHeight:V,effectiveFilterWidth:I,dilationDepth:A,dilationHeight:D,dilationWidth:B,inShape:e,outShape:G,filterShape:r}},iw=(e,r,i,s,o,u)=>{let d=u==="channelsLast",c=d?e[0].dims[3]:e[0].dims[1],f=!1,m=[64,1,1],v={x:i.map((T,A)=>A)},w=[Math.ceil(Og(v.x.map(T=>i[T]))/m[0]),1,1];Ge("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let $=f?d&&c%4!==0?3:4:1,S=K.size(i),b=[{type:12,data:S},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];Yi(r,b),b.push(...ke(e[0].dims,e[1].dims));let C=["rank","rank"],N=e.length===3;N&&(b.push(...ke(e[2].dims)),C.push("rank")),b.push(...ke(i));let E=T=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];Xi(r,A);let D=f?4:1,B=St(e[0].dataType),P=J("x",e[0].dataType,e[0].dims.length,$===3?1:$),V=J("W",e[1].dataType,e[1].dims.length,D),I=[P,V],Y=_e("result",e[0].dataType,i.length,D),te="";if(N){let pe=J("bias",e[2].dataType,e[2].dims.length,D);I.push(pe),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${f?`vec4<${B}>`:B} {
          return bias[${d?be("coords",4,5):be("coords",1,5)}${f?"/ 4":""}];
        }`}let me=Nt($,B),de=Zi(r,me,B);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${P.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${V.getByIndices("aIndices")};
            }
          ${T.registerUniforms(A).declareVariables(...I,Y)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
              ${de}
              result[global_idx] = ${B}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${d};${$};${N}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:b}),getShaderSource:E}}}),aw,sw,E$=ae(()=>{"use strict";ze(),Me(),Le(),ea(),aw=(e,r,i,s)=>{let o=e.length>2,u=o?"value += b[output_channel];":"",d=e[0].dims,c=e[1].dims,f=r.format==="NHWC",m=f?i[3]:i[1],v=m/r.group,w=f&&v>=4?ct(m):1,$=K.size(i)/w,S=[{type:12,data:$},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:v}];Yi(r,S),S.push(...ke(d,[c[0],c[1],c[2],c[3]/w]));let b=o?["rank","rank","rank"]:["rank","rank"];S.push(...ke([i[0],i[1],i[2],i[3]/w]));let C=N=>{let E=_e("output",e[0].dataType,i.length,w),T=St(E.type.tensor),A=Zi(r,E.type.value,T),D=J("x",e[0].dataType,d.length),B=J("w",e[1].dataType,c.length,w),P=[D,B];o&&P.push(J("b",e[2].dataType,e[2].dims,w));let V=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Xi(r,V);let I=f?`
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
  ${N.registerUniforms(V).declareVariables(...P,E)}

  ${N.mainStart()}
    ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${E.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${f?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${f?1:2}], outputIndices[${f?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${w} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${f?2:1}];

    var value: ${E.type.value} = ${E.type.value}(0);
    ${I}
    ${u}
    ${A}
    ${E.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},sw=(e,r,i,s)=>{let o=e.length>2,u=ct(i[3]),d=ct(i[2]),c=K.size(i)/u/d,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/u],m=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/u],v=[i[0],i[1],i[2],i[3]/u],w=[{type:12,data:c},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];Yi(r,w),w.push(...ke(f,m,v));let $=(d-1)*r.strides[1]+m[1],S=b=>{let C=_e("output",e[0].dataType,v.length,u),N=St(C.type.tensor),E=Zi(r,C.type.value,N),T=J("x",e[0].dataType,f.length,u),A=J("w",e[1].dataType,m.length,u),D=[T,A];o&&D.push(J("b",e[2].dataType,e[2].dims,u));let B=o?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Xi(r,P),`
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
      ${E}
      ${C.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${u};${d};${$};${m[0]};${m[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}),getShaderSource:S}}}),Dg,$l,Mg,xl,Rp,Gc,Bg,Pg,Dp,T$=ae(()=>{"use strict";Me(),S$(),k$(),cf(),E$(),ea(),df(),ci(),Dg=(e,r,i,s,o,u)=>{let d=e[0],c=e.slice(u?1:2,u?3:4),f=c.length,m=r[0],v=r.slice(2).map(($,S)=>$+($-1)*(i[S]-1)),w=c.map(($,S)=>$+s[S]+s[S+f]).map(($,S)=>Math.floor(($-v[S]+o[S])/o[S]));return w.splice(0,0,d),w.splice(u?3:1,0,m),w},$l=[2,3,1,0],Mg=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},xl=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let u=2;u<r[1].dims.length;++u)i[u-2]===0&&(i[u-2]=r[1].dims[u]);let s=e.pads.slice();Rl.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},Rp=e=>{let r=of(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,u=e.group,d=e.kernel_shape,c=e.pads,f=e.strides,m=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},Gc=(e,r,i,s)=>{let o=i.format==="NHWC",u=Dg(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let P=[r[0]];if(o){let V=e.kernelCustomData.wT??e.compute(pr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),P.push(V)}else P.push(r[1]);r.length===3&&P.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(sw(P,i,u,s),{inputs:P}):e.compute(aw(P,i,u,s),{inputs:P});return}let d=r.length===3,c=r[0].dims[o?1:2],f=r[0].dims[o?2:3],m=r[0].dims[o?3:1],v=r[1].dims[2],w=r[1].dims[3],$=u[o?1:2],S=u[o?2:3],b=u[o?3:1],C=o&&v===c&&w===f&&i.pads[0]===0&&i.pads[1]===0;if(C||v===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let P=u[0],V,I,Y,te=[];if(o){let pe=e.kernelCustomData.wT??e.compute(pr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=pe),C){let G=c*f*m;V=r[0].reshape([1,P,G]),I=pe.reshape([1,G,b]),Y=[1,P,b]}else V=r[0].reshape([P,c*f,m]),I=pe.reshape([1,m,b]),Y=[P,$*S,b];te.push(V),te.push(I)}else V=r[0].reshape([P,m,c*f]),I=r[1].reshape([1,b,m]),Y=[P,b,$*S],te.push(I),te.push(V);d&&te.push(r[2]);let me=Y[2],de=te[0].dims[te[0].dims.length-1];me<8&&de<8?e.compute(lf(te,i,u,Y,o,s),{inputs:te}):e.compute(Ml(te,i,u,Y,o,s),{inputs:te});return}let N=!0,E=e.kernelCustomData.wT??e.compute(pr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=E);let T=[r[0],E];d&&T.push(r[2]);let A=o?$*S:b,D=o?b:$*S,B=v*w*m;e.compute(rw(T,i,u,A,D,B,d,N,s),{inputs:T})},Bg=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],u=[1].concat(r.strides),d=[1].concat(r.dilations),c=[1].concat(r.kernelShape),f=xl({...r,pads:o,strides:u,dilations:d,kernelShape:c},s);Gc(e,s,f,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Pg=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=xl(i,r),u=i.autoPad==="NOTSET"?i.pads:i.autoPad,d=nw(r[0].dims,r[1].dims,i.strides,i.dilations,u,!1,s);e.compute(iw(r,o,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],s))},Dp=(e,r)=>{if(Mg(e.inputs,r),e.inputs[0].dims.length===3)Bg(e,r);else if(e.inputs[0].dims.length===5)Pg(e,e.inputs,r);else{let i=xl(r,e.inputs);Gc(e,e.inputs,i)}}}),ow,C$=ae(()=>{"use strict";ze(),Sn(),Me(),Le(),ow=(e,r,i)=>{let s=e.length>2,o=r.outputShape,u=r.format==="NHWC",d=r.group,c=e[1].dims,f=c[2]/d,m=c[3],v=u?ct(f):1,w=u&&m===1&&f>=4,$=w?Math.floor(f/4)*4:Math.floor(f/v)*v,S=f-$,b=u?ct(m):1,C=u?m===1?v:b:1,N=K.size(o)/b,E=[Math.ceil(N/64),1,1];Ge("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${E}`);let T=["rank","rank"],A=[r.strides[0],r.strides[1]],D=[r.kernelShape[u?1:2],r.kernelShape[u?2:3]],B=[r.dilations[0],r.dilations[1]],P=[D[0]+(r.dilations[0]<=1?0:(r.kernelShape[u?1:2]-1)*(r.dilations[0]-1)),D[1]+(r.dilations[1]<=1?0:(r.kernelShape[u?2:3]-1)*(r.dilations[1]-1))],V=[P[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),P[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],I=[{type:12,data:N},{type:12,data:A},{type:12,data:D},{type:12,data:B},{type:12,data:P},{type:6,data:V},{type:12,data:$},{type:12,data:f},{type:12,data:m},...ke(e[0].dims,e[1].dims)];s&&(I.push(...ke(e[2].dims)),T.push("rank")),I.push(...ke(o));let Y=te=>{let me=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:D.length},{name:"dilations",type:"u32",length:D.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:V.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],de=St(e[0].dataType),pe=u?1:2,G=u?2:3,he=u?3:1,ye=J("W",e[1].dataType,e[1].dims.length,C),ge=J("Dy",e[0].dataType,e[0].dims.length,v),ee=[ge,ye];s&&ee.push(J("bias",e[2].dataType,[o[he]].length,b));let re=_e("result",e[0].dataType,o.length,b),se=()=>{let ne="";if(w)v===4?ne+=`
        let xValue = ${ge.getByOffset("x_offset")};
        let wValue = ${ye.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:v===2?ne+=`
          dotProd = dotProd + dot(vec4<${de}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}), vec4<${de}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:v===1&&(ne+=`
          dotProd = dotProd + dot(vec4<${de}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}, ${ge.getByOffset("x_offset + 2u")}, ${ge.getByOffset("x_offset + 3u")}), vec4<${de}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}, ${ye.getByOffset("w_offset + 2u")}, ${ye.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ne+=`
                  let xValue = ${u?ge.getByOffset(`${ge.indicesToOffset(`${ge.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${v}`):ge.get("batch","inputChannel","idyR","idyC")};
        `,v===1)ne+=`
          let w_offset = ${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ye.getByOffset(`w_offset / ${C}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let X=0;X<v;X++)ne+=`
            let wValue${X} = ${ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${X}, wOutChannel)`)} / ${C}`)};
            dotProd = dotProd + xValue[${X}] * wValue${X};`;return ne},O=()=>{if(S===0)return"";if(!w)throw new Error(`packInputAs4 ${w} is not true.`);let ne="";if(v===1){ne+="dotProd = dotProd";for(let X=0;X<S;X++)ne+=`
            + ${ge.getByOffset(`x_offset + ${X}`)} * ${ye.getByOffset(`w_offset + ${X}`)}`;ne+=";"}else if(v===2){if(S!==2)throw new Error(`Invalid inputChannelsRemainder ${S}.`);ne+=`
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
                var x_offset = ${ge.indicesToOffset(`${ge.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${v};
                var w_offset = ${ye.indicesToOffset(`${ye.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${C};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${w?4:v}) {
                  ${se()}
                  inputChannel = inputChannel + ${w?4:v};
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
    ${F}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};${v}${C}${b}${w}${S}`,inputDependencies:T},getRunData:()=>({dispatchGroup:{x:E[0],y:E[1],z:E[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:Y}}}),Lg,Ug,jg,Kc,uw,Wg,Qc,Vg,lw,I$=ae(()=>{"use strict";C$(),ea(),ci(),Lg=(e,r,i,s,o,u)=>(e-1)*r+i+(s-1)*o+1-u,Ug=(e,r,i,s,o)=>{let u=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=u,i[o]=e-u):r==="SAME_LOWER"&&(i[s]=e-u,i[o]=u)},jg=(e,r,i,s,o,u,d,c,f,m)=>{let v=e.length-2,w=m.length===0;f.length<v&&f.push(...Array(v-f.length).fill(0));let $=e[0],S=r[c?3:1]*o;for(let b=0,C=e.length-v-(c?1:0);b<v;++b,++C){let N=e[C],E=w?N*d[b]:m[b],T=Lg(N,d[b],u[b],r[C],i[b],E);Ug(T,s,u,b,b+v),w&&m.push(d[b]*(N-1)+f[b]+(r[C]-1)*i[b]+1-u[b]-u[b+v])}m.splice(0,0,$),m.splice(c?3:1,0,S)},Kc=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,$)=>w*$,1)===0){i.length=0;for(let w=2;w<r[1].dims.length;++w)i.push(r[1].dims[w])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),u=e.outputShape.slice(),d=e.outputPadding.slice(),c=r[0].dims,f=e.dilations.slice();if(f.reduce((w,$)=>w+$,0)===0){let w=r[0].dims.length-2;f=new Array(w).fill(1)}let m=e.strides.slice();if(m.reduce((w,$)=>w+$,0)===0){let w=r[0].dims.length-2;m=new Array(w).fill(1)}jg(c,i,f,e.autoPad,e.group,o,m,s,d,u);let v=Object.assign({},e);return Object.assign(v,{kernelShape:i,pads:o,outputPadding:d,outputShape:u,dilations:f,strides:m}),v},uw=e=>{let r=of(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,u=e.group??1,d=e.kernelShape,c=e.pads,f=e.strides,m=e.wIsConst(),v=e.outputPadding,w=e.outputShape;return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,outputPadding:v,outputShape:w,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},Wg=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let u=e[0].dims.length-2;if(r.dilations.reduce((d,c)=>d+c,0)>0&&r.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(r.strides.reduce((d,c)=>d+c,0)>0&&r.strides.length!==u)throw new Error(`strides should be ${u}D`);if(r.pads.reduce((d,c)=>d+c,0)>0&&r.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(r.outputPadding.length!==u&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(r.kernelShape.reduce((d,c)=>d+c,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Qc=(e,r,i,s)=>{let o=e.kernelCustomData.wT??e.compute(pr(r[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=o);let u=[r[0],o];r.length===3&&u.push(r[2]),e.compute(ow(u,i,s),{inputs:u})},Vg=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let u=r.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=r.strides;(d.length===0||d[0]===0)&&(d=[1]);let c=r.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],d=[1].concat(d),u=[1].concat(u),o=[1].concat(o);let f=r.outputPadding;f=[0].concat(f);let m=Kc({...r,pads:c,strides:d,dilations:u,kernelShape:o,outputPadding:f},s);Qc(e,s,m,v=>i?[v[0],v[2],v[3]]:[v[0],v[1],v[3]])},lw=(e,r)=>{if(Wg(e.inputs,r),e.inputs[0].dims.length===3)Vg(e,r);else{let i=Kc(r,e.inputs);Qc(e,e.inputs,i)}}}),Fg,dw,cw,z$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),Fg=(e,r,i,s)=>{let o=K.size(r),u=r.length,d=J("input",e,u),c=_e("output",e,u),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),m=K.normalizeAxis(f,u),v=w=>{let $=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,S=be("uniforms.input_shape","uniforms.axis",u),b=s.reverse?$+(s.exclusive?" + 1":""):"0",C=s.reverse?S:$+(s.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:m},...ke(r,r)]}),getShaderSource:v}},dw=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(Fg(s,i,o,r),{inputs:[0]})},cw=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ye({exclusive:r,reverse:i})}}),qg,Hg,Gg,pw,fw,N$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),qg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Hg=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let u=0;u<r;++u)o.push(i.indicesSet("a",e[u],`i[${u}]`));return o.push("return a;}"),o.join(`
`)},Gg=(e,r)=>{let i,s,o,u,d,c,f=r.format==="NHWC",m=r.blocksize,v=r.mode==="DCR";f?([i,s,o,u]=e.dims,d=v?[i,s,o,m,m,u/m**2]:[i,s,o,u/m**2,m,m],c=v?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,u]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],d=v?[i,m,m,u/m**2,s,o]:[i,u/m**2,m,m,s,o],c=v?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(d),$=w.dims.length,S=e.dataType,b=J("a",S,$),C=_e("output",S,$),N=E=>`
  ${E.registerUniform("output_size","u32").declareVariables(b,C)}

  ${Hg(c,$,b,C)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:E=>{let T=f?[i,s*m,o*m,u/m**2]:[i,u/m**2,s*m,o*m],A=K.size(T),D=w.dims,B=K.sortBasedOnPerm(D,c);return{outputs:[{dims:T,dataType:E[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ke(D,B)]}},getShaderSource:N}},pw=(e,r)=>{qg(e.inputs),e.compute(Gg(e.inputs[0],r))},fw=e=>Ye({blocksize:e.blocksize,mode:e.mode,format:e.format})}),$n,No,bl,Zc,oi,Kg,Qg,Zg,Yc,Xc,Jc,Yg,Xg,ep,Jg,hw,mw,O$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),$n=256,No=512,bl=2*Math.PI,Zc=e=>{let r=[],i=e;for(let s of[4,2,3,5])for(;i%s===0;)r.push(s),i/=s;return i===1?r:void 0},oi=e=>{let r=e.toPrecision(9);return/[.eE]/.test(r)?r:`${r}.0`},Kg=(e,r,i,s,o)=>{let u=i/e,d=No-s,c=m=>`smem[${d}u + base + ${m*r}u]`,f=`  for (var t = local_idx; t < ${u}u; t += ${$n}u) {
`;f+=`    let twiddleIndex = t % ${r}u;
    let angleUnit = f32(twiddleIndex);
`,f+=`    var leg: array<vec2<f32>, 5>;
`;for(let m=0;m<e;m++){let v=`${s}u + t + ${m*u}u`;if(m===0)f+=`    leg[0] = smem[${v}];
`;else{let w=o*bl*m/(e*r);f+=`    { let a = ${oi(w)} * angleUnit; leg[${m}] = cmul(smem[${v}], vec2<f32>(cos(a), sin(a))); }
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
`}else for(let m=0;m<e;m++){let v=["leg[0]"];for(let w=1;w<e;w++){let $=o*bl*(w*m)/e,S=oi(Math.cos($)),b=oi(Math.sin($));v.push(`vec2<f32>(leg[${w}].x*${S} - leg[${w}].y*${b}, leg[${w}].x*${b} + leg[${w}].y*${S})`)}f+=`    ${c(m)} = ${v.join(" + ")};
`}return`${f}  }
  workgroupBarrier();
`},Qg=(e,r,i)=>{let s="",o=1,u=0;for(let d of e)s+=Kg(d,o,r,u,i),o*=d,u=No-u;return{code:s,resultOffset:u}},Zg=(e,r,i,s,o)=>{let u=e.dims,d=u.length,c=u[d-1],f=u[r],m=i&&s?(f-1)*2:f;o!==void 0&&(m=o);let v=i&&s?1:2,w=s&&!i?Math.floor(m/2)+1:m,$=u.slice();$[r]=w,$[d-1]=v;let S=1;for(let C=r+1;C<d-1;C++)S*=u[C];let b=K.size(u)/c/f;return{dataType:e.dataType,outputDims:$,length:m,signalLength:f,inner:S,batch:b,inputComponents:c,outputComponents:v,outputLength:w,inverse:i,onesided:s}},Yc=(e,r)=>[r,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Xc=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Jc=(e,r,i)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(r,i),Yg=e=>{let{dataType:r,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=bt(r),f=u?1:-1,m=u?1/i:1,v=Zc(i),w=$=>{let S=J("x",r,[1]),b=_e("y",r,[1]),C=B=>{let P=`inBase + (${B}) * uniforms.inner * ${s}u`,V=`f32(${S.getByOffset(P)})`,I=s===2?`f32(${S.getByOffset(`${P} + 1u`)})`:"0.0";return`vec2<f32>(${V}, ${I})`},N;if(u&&d){let B=Math.floor(i/2)+1,P=i%2===0?`select(provided, provided - 1u, provided == ${B}u)`:"provided";N=`
    let provided = min(uniforms.signalLength, ${B}u);
    for (var i = local_idx; i < ${i}u; i += ${$n}u) {
      if (i < provided) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${P}; k += ${$n}u) {
      let h = smem[k];
      smem[${i}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else N=`
    let loadCount = min(uniforms.signalLength, ${i}u);
    for (var i = local_idx; i < ${i}u; i += ${$n}u) {
      if (i < loadCount) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:E,resultOffset:T}=Qg(v,i,f),A=m===1?`smem[${T}u + i]`:`smem[${T}u + i] * ${oi(m)}`,D=o===2?b.setByOffset("off + 1u",`${c}(v.y)`):"";return`
  ${Jc($,S,b)}
  var<workgroup> smem: array<vec2<f32>, ${2*No}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$.mainStart($n)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    ${N}
${E}    for (var i = local_idx; i < uniforms.outputLength; i += ${$n}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${o}u;
      ${b.setByOffset("off",`${c}(v.x)`)}
      ${D}
    }
  }`};return{name:"DFT",shaderCache:{hint:Yc(e,"fft"),inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:r}],programUniforms:Xc(e),dispatchGroup:{x:e.batch}})}},Xg=e=>{let{dataType:r,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=bt(r),f=u?1:-1,m=u?1/i:1,v=w=>{let $=J("x",r,[1]),S=_e("y",r,[1]),b=A=>{let D=`inBase + (${A}) * uniforms.inner * ${s}u`,B=`f32(${$.getByOffset(D)})`,P=s===2?`f32(${$.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${B}, ${P})`},C=u&&d?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
      let angle = ${oi(f*bl)} * f32(knMod) / ${oi(i)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${i}u) { knMod -= ${i}u; }`,E=o===2?S.setByOffset("off + 1u",`${c}(v.y)`):"",T=m===1?"acc":`acc * ${oi(m)}`;return`
  ${Jc(w,$,S)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${C}
  ${w.mainStart($n)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${$n}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${i}u; n++) {${N}
      }
      let v = ${T};
      let off = outBase + k * uniforms.inner * ${o}u;
      ${S.setByOffset("off",`${c}(v.x)`)}
      ${E}
    }
  }`};return{name:"DFT",shaderCache:{hint:Yc(e,"direct"),inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:r}],programUniforms:Xc(e),dispatchGroup:{x:e.batch}})}},ep=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let r=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(r))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return r},Jg=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let r=e[0].dims;if(r.length<2)throw new Error("DFT input must have at least 2 dimensions.");let i=r[r.length-1];if(i!==1&&i!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},hw=(e,r)=>{Jg(e.inputs);let i=e.inputs[0],s=i.dims.length,o=r.inverse!==0,u=r.onesided!==0,d=ep(e.inputs[1]);if(d!==void 0&&d<=0)throw new Error("dft_length must be greater than zero.");let c=K.normalizeAxis(ep(e.inputs[2])??r.axis,s);if(c===s-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(o&&u&&i.dims[s-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let f=Zg(i,c,o,u,d);if(f.length<=0)throw new Error(`Invalid DFT length: ${f.length}`);let m=f.length<=No&&Zc(f.length)!==void 0?Yg(f):Xg(f);e.compute(m,{inputs:[0]})},mw=e=>Ye({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Sl,Oo,tp,ey,ty,ry,ny,rp,iy,gw,yw,A$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),Sl="[a-zA-Z]|\\.\\.\\.",Oo="("+Sl+")+",tp="^"+Oo+"$",ey="("+Oo+",)*"+Oo,ty="^"+ey+"$",ry=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},ny=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(ty)))throw new Error("Invalid LHS term");if(i.split(",").forEach((u,d)=>{let c=e[d].dims.slice();if(!u.match(RegExp(tp)))throw new Error("Invalid LHS term");let f=this.processTerm(u,!0,c,d);this.lhs.push(f)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!s.match(RegExp(Oo)))throw new Error("Invalid RHS");(o=s.match(RegExp(Sl,"g")))==null||o.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,u=!1,d=[],c=0;if(!e.match(RegExp(tp))&&!r&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Sl,"g")),m=new ry(s);return f==null||f.forEach((v,w)=>{if(v==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let $=o-f.length+1;if($<0)throw new Error("Ellipsis out of bounds");if(d=i.slice(c,c+$),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let S=0;S<d.length;S++){let b=String.fromCharCode(48+S);m.addSymbol(b,w+S),this.addSymbol(b,i[c++],s)}}else m.addSymbol(v,w+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(v,i[c++],s)}),m}},rp=e=>e+"_max",iy=(e,r,i,s)=>{let o=e.map(m=>m.length).map((m,v)=>J(`input${v}`,r,m)),u=K.size(s),d=_e("output",r,s.length),c=[...i.symbolToInfo.keys()].filter(m=>!i.rhs.symbolToIndices.has(m)),f=m=>{let v=[],w="var prod = 1.0;",$="var sum = 0.0;",S="sum += prod;",b=[],C=[],N=[],E=[],T=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((D,B)=>{var P;if(i.rhs.symbolToIndices.has(B)){let V=(P=i.rhs.symbolToIndices.get(B))==null?void 0:P[0];V!==void 0&&i.lhs.forEach((I,Y)=>{if(D.inputIndices.includes(Y)){let te=I.symbolToIndices.get(B);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(me=>{v.push(`${o[Y].indicesSet(`input${Y}Indices`,me,d.indicesGet("outputIndices",V))}`)})}})}else i.lhs.forEach((V,I)=>{if(D.inputIndices.includes(I)){let Y=V.symbolToIndices.get(B);if(Y===void 0)throw new Error("Invalid symbol error");Y.forEach(te=>{b.push(`${o[I].indicesSet(`input${I}Indices`,te,`${B}`)}`)}),E.push(`prod *= ${o[I].getByIndices(`input${I}Indices`)};`)}}),C.push(`for(var ${B}: u32 = 0; ${B} < uniforms.${rp(B)}; ${B}++) {`),N.push("}")});let A=T?[...v,`let sum = ${o.map((D,B)=>D.getByIndices(`input${B}Indices`)).join(" * ")};`]:[...v,$,...C,...b,w,...E,S,...N];return`
            ${m.registerUniforms(c.map(D=>({name:`${rp(D)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${o.map((D,B)=>`var input${B}Indices: ${o[B].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let m=c.filter(w=>i.symbolToInfo.has(w)).map(w=>{var $;return{type:12,data:(($=i.symbolToInfo.get(w))==null?void 0:$.dimValue)||0}});m.push({type:12,data:u});let v=e.map((w,$)=>[...ke(w)]).reduce((w,$)=>w.concat($),m);return v.push(...ke(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:v}},getShaderSource:f}},gw=(e,r)=>{let i=new ny(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((u,d)=>u.dims);e.compute(iy(o,e.inputs[0].dataType,i,s))},yw=e=>{let r=e.equation.replace(/\s+/g,"");return Ye({equation:r})}}),ay,np,sy,oy,vw,R$=ae(()=>{"use strict";ze(),Me(),Le(),ay=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},np=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},sy=(e,r)=>e.length>r.length?np(e,r):np(r,e),oy=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=sy(r,i),o=e[0].dataType,u=o===9||K.size(r)===1,d=o===9||r.length>0&&r[r.length-1]%4===0?4:1,c=u||s.length>0&&s[s.length-1]%4===0?4:1,f=Math.ceil(K.size(s)/c),m=w=>{let $=J("input",o,r.length,d),S=_e("output",o,s.length,c),b;if(o===9){let C=(N,E,T="")=>`
          let outputIndices${E} = ${S.offsetToIndices(`outputOffset + ${E}u`)};
          let offset${E} = ${$.broadcastedIndicesToOffset(`outputIndices${E}`,S)};
          let index${E} = offset${E} / 4u;
          let component${E} = offset${E} % 4u;
          ${N}[${E}] = ${T}(${$.getByOffset(`index${E}`)}[component${E}]);
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
    ${b}`},v=[{type:12,data:f},...ke(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${d}${c}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:v})}},vw=e=>{ay(e.inputs),e.compute(oy(e.inputs),{inputs:[0]})}}),uy,ww,D$=ae(()=>{"use strict";ze(),Me(),Le(),sf(),uy=e=>{let r=e[0].dataType,i=K.size(e[0].dims),s=K.size(e[1].dims),o=s%4===0,u=d=>{let c=J("x",r,[1],4),f=J("bias",r,[1],4),m=_e("y",r,[1],4),v=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=S=>`
      let bias${S}_offset: u32 = (global_idx * 4 + ${S}) % uniforms.bias_size;
      let bias${S} = ${f.getByOffset(`bias${S}_offset / 4`)}[bias${S}_offset % 4];`,$=o?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(v).declareVariables(c,f,m)}

    ${zp(bt(r))}

    ${d.mainStart(is)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${$}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",Np("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/is/4)}})}},ww=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?B1(e):e.compute(uy(e.inputs))}}),ly,dy,_w,$w,M$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),ly=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dy=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(r.axis,o),d=i.slice(0);d.splice(u,1,...s);let c=i[u],f=e[0].dataType===9?4:1,m=Math.ceil(K.size(d)/f),v=[{type:12,data:m},{type:6,data:c},{type:12,data:u},...ke(e[0].dims,e[1].dims,d)],w=$=>{let S=J("data",e[0].dataType,e[0].dims.length,f),b=J("inputIndices",e[1].dataType,e[1].dims.length),C=_e("output",e[0].dataType,d.length,f),N=T=>{let A=s.length,D=`var indicesIndices${T}  = ${b.type.indices}(0);`;for(let B=0;B<A;B++)D+=`${A>1?`indicesIndices${T}[${B}]`:`indicesIndices${T}`} = ${d.length>1?`outputIndices${T}[uniforms.axis + ${B}]`:`outputIndices${T}`};`;D+=`
          var idx${T} = ${b.getByIndices(`indicesIndices${T}`)};
          if (idx${T} < 0) {
            idx${T} = idx${T} + uniforms.axisDimLimit;
          }
          var dataIndices${T} : ${S.type.indices};
        `;for(let B=0,P=0;B<o;B++)B===u?(D+=`${o>1?`dataIndices${T}[${B}]`:`dataIndices${T}`} = u32(idx${T});`,P+=A):(D+=`${o>1?`dataIndices${T}[${B}]`:`dataIndices${T}`} = ${d.length>1?`outputIndices${T}[${P}]`:`outputIndices${T}`};`,P++);return D},E;if(e[0].dataType===9){let T=(A,D,B="")=>`
          let outputIndices${D} = ${C.offsetToIndices(`outputOffset + ${D}u`)};
          ${N(D)};
          let offset${D} = ${S.indicesToOffset(`dataIndices${D}`)};
          let index${D} = offset${D} / 4u;
          let component${D} = offset${D} % 4u;
          ${A}[${D}] = ${B}(${S.getByOffset(`index${D}`)}[component${D}]);
        `;E=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${T("value",0,"u32")}
        ${T("value",1,"u32")}
        ${T("value",2,"u32")}
        ${T("value",3,"u32")}
        ${C.setByOffset("global_idx","value")}
      `}else E=`
      let outputIndices = ${C.offsetToIndices("global_idx")};
      ${N("")};
      let value = ${S.getByIndices("dataIndices")};
      ${C.setByOffset("global_idx","value")};
      `;return`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(S,b,C)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${E}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:w}},_w=e=>Ye({axis:e.axis}),$w=(e,r)=>{let i=e.inputs;ly(i),e.compute(dy(e.inputs,r))}}),cy,xw,bw,B$=ae(()=>{"use strict";ze(),Me(),Le(),cy=(e,r,i,s,o,u,d,c,f)=>{let m=[{type:12,data:u},{type:12,data:s},{type:12,data:o},{type:12,data:i},{type:12,data:d},{type:12,data:c},{type:12,data:f}],v=[u];m.push(...ke(r.dims,v));let w=$=>{let S=J("indices_data",r.dataType,r.dims.length),b=_e("input_slice_offsets_data",12,1,1),C=[S,b],N=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:v,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:w},{inputs:[r],outputs:[-1]})[0]},xw=(e,r)=>{let i=e.inputs,s=i[0].dims,o=i[0].dataType,u=i[1].dims,d=u[u.length-1],c=K.sizeToDimension(u,u.length-1),f=K.sizeFromDimension(s,r.batchDims+d),m=K.sizeToDimension(s,r.batchDims),v=K.sizeFromDimension(s,r.batchDims),w=c/m,$=new Array(d),S=f;for(let D=0;D<d;++D)$[d-1-D]=S,S*=s[r.batchDims+d-1-D];let b=cy(e,i[1],$,r.batchDims,s,c,w,v,d),C=r.batchDims+d;if(C>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let N=u.slice(0,-1).concat(s.slice(C)),E=K.size(N),T=[{type:12,data:E},{type:12,data:f},...ke(i[0].dims,b.dims,N)],A=D=>{let B=J("data",i[0].dataType,i[0].dims.length),P=J("slice_offsets",12,b.dims.length),V=_e("output",i[0].dataType,N.length);return`
          ${D.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(B,P,V)}
            ${D.mainStart()}
            ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:N,dataType:o}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:T}),getShaderSource:A},{inputs:[i[0],b]})},bw=e=>({batchDims:e.batch_dims,cacheKey:""})}),py,fy,Sw,kw,P$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),py=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=K.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],u=e[2],d=e.length===4?e[3]:void 0;if(u.dims.length!==o.dims.length||!o.dims.map((c,f)=>f===i?Math.ceil(c/s)===u.dims[f]:c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((c,f)=>c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},fy=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(r.gatherAxis,o),d=K.normalizeAxis(r.quantizeAxis,o),c=i.slice(0);c.splice(u,1,...s);let f=K.size(c),m=e[2].dataType,v=e[0].dataType===22,w=[{type:12,data:f},{type:12,data:d},{type:12,data:u},{type:12,data:r.blockSize},...ke(...e.map((S,b)=>S.dims),c)],$=S=>{let b=J("data",e[0].dataType,e[0].dims.length),C=J("inputIndices",e[1].dataType,e[1].dims.length),N=J("scales",e[2].dataType,e[2].dims.length),E=e.length>3?J("zeroPoint",e[3].dataType,e[3].dims.length):void 0,T=_e("output",m,c.length),A=[b,C,N];E&&A.push(E);let D=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let quantized_data_vec = ${v?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${N.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${N.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${N.getByIndices("scale_indices")};
        ${E?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${E.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${E.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${v?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${bt(m)}(quantized_data - zero_point) * scale;
        ${T.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((S,b)=>b!==1).map(S=>S.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(S,b)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:m}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$}},Sw=(e,r)=>{let i=e.inputs;py(i,r),e.compute(fy(e.inputs,r))},kw=e=>Ye({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hy,my,Ew,Tw,L$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),hy=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},my=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,u=e[1].dims,d=e[1].dataType,c=K.normalizeAxis(r.axis,o),f=i[c],m=u.slice(0),v=K.size(m),w=J("input",s,o),$=J("indicesInput",d,u.length),S=_e("output",s,m.length),b=[{type:12,data:v},{type:6,data:f},{type:12,data:c}];return b.push(...ke(i,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:C=>`
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
  }`}},Ew=e=>Ye({axis:e.axis}),Tw=(e,r)=>{let i=e.inputs;hy(i),e.compute(my(e.inputs,r))}}),gy,yy,Cw,Iw,U$=ae(()=>{"use strict";ze(),Me(),Le(),gy=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yy=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,u,d]=bv.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),c=[o,u];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,m=Math.ceil(u/f),v=Math.ceil(o/f),w=!0,$=K.size(c),S=[{type:12,data:w?m:$},{type:12,data:o},{type:12,data:u},{type:12,data:d},{type:1,data:r.alpha},{type:1,data:r.beta}],b=["type","type"];e.length===3&&(S.push(...ke(e[2].dims)),b.push("rank")),S.push(...ke(c));let C=E=>{let T="";r.transA&&r.transB?T="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?T="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?T="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(T="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=r.alpha===1?"":"value *= uniforms.alpha;",D=J("a",e[0].dataType,e[0].dims),B=J("b",e[1].dataType,e[1].dims),P=D.type.value,V=null,I=[D,B];e.length===3&&(V=J("c",e[2].dataType,e[2].dims.length),I.push(V));let Y=_e("output",e[0].dataType,c.length);I.push(Y);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${E.registerUniforms(te).declareVariables(...I)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${T}
    }

    ${A}
    ${V!=null?`let cOffset = ${V.broadcastedIndicesToOffset("vec2(m, n)",Y)}; value += ${P}(uniforms.beta) * ${V.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},N=E=>{let T=J("a",e[0].dataType,e[0].dims),A=J("b",e[1].dataType,e[1].dims),D=null,B=[T,A];e.length===3&&(D=J("c",e[2].dataType,e[2].dims.length),B.push(D));let P=_e("output",e[0].dataType,c.length);B.push(P);let V=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",Y="";r.transA&&r.transB?(Y=`
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
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):r.transA&&!r.transB?(Y=`
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
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!r.transA&&r.transB?(Y=`
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
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!r.transA&&!r.transB&&(Y=`
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
  ${E.registerUniforms(V).declareVariables(...B)}
  var<workgroup> tile_a: array<array<${T.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${f}>, ${f}>;
  ${E.mainStart([f,f,1])}
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
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:m*v},programUniforms:S}),getShaderSource:N}:{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},Cw=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Iw=(e,r)=>{gy(e.inputs),e.compute(yy(e.inputs,r))}}),tn,xn,Ui,ji,vy,wy,_y,$y,xy,by,Sy,ky,zw,Nw,j$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),[tn,xn,Ui,ji]=[0,1,2,3],vy=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wy=`
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
`,by=(e,r,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${r} {
     var pixel = ${r}(0);
     var indices = vec4<u32>(0);
     indices[${tn}] = batch;
     indices[${xn}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ui}] = u32(r);
            indices[${ji}] = u32(c);
          } else {
            return ${r}(0);
          }
        `;case"border":return`
          indices[${Ui}] = u32(clamp(r, 0, H - 1));
          indices[${ji}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Ui}] = gs_reflect(r, border[1], border[3]);
          indices[${ji}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sy=(e,r,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tn}], indices[${xn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tn}], indices[${xn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tn}], indices[${xn}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tn}], indices[${xn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ky=(e,r)=>{let i=J("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],o=J("grid",e[1].dataType,s.length,2),u=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];r.format==="NHWC"&&(u=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tn,xn,Ui,ji]=[0,3,1,2]);let d=_e("output",e[0].dataType,u.length),c=i.type.value,f=K.size(u),m=[{type:12,data:f},...ke(e[0].dims,s,u)],v=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,o,d)}
  ${wy}
  ${_y(c)}
  ${$y(r)}
  ${xy(r)}
  ${by(i,c,r)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Ui}]);
      let W_in = i32(uniforms.x_shape[${ji}]);

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
      var grid_indices = vec3<u32>(indices[${tn}], indices[${Ui}], indices[${ji}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sy(d,c,r)}
  }`;return{name:"GridSample",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let $=K.size(u);return{outputs:[{dims:u,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:m}},getShaderSource:v}},zw=(e,r)=>{vy(e.inputs),e.compute(ky(e.inputs,r))},Nw=e=>Ye({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Kt,Ey,Ow,ip,Ty,Uo,Aw,Rw=ae(()=>{"use strict";ze(),Me(),pt(),tf(),af(),Le(),ci(),Kt=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,Ey=(e,r)=>{let i=e[0],s=Kt(e,1),o=Kt(e,2),u=Kt(e,3),d=Kt(e,4),c=Kt(e,5),f=Kt(e,6),m=Kt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let v=i.dims[0],w=i.dims[1],$=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],S=w,b=0,C=0,N=Math.floor($/r.numHeads);if(f&&m&&K.size(f.dims)&&K.size(m.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==v||f.dims[1]!==r.numHeads||f.dims[3]!==N)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==v||m.dims[1]!==r.numHeads||m.dims[3]!==N)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=f.dims[2],C=f.dims[2]}else if(f&&K.size(f.dims)||m&&K.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E;if(s&&K.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');E=2,S=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==N)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');E=5,S=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==N)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');E=0,S=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}if(u&&K.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let T=b+S,A=0;if(d&&K.size(d.dims)>0){A=8;let V=d.dims;throw V.length===1?V[0]===v?A=1:V[0]===3*v+2&&(A=3):V.length===2&&V[0]===v&&V[1]===T&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let D=!1,B=$;if(o&&K.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(S!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=o.dims[2]}else{if(S!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');B=o.dims[1]*o.dims[3],D=!0}}let P=!1;if(d&&K.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(c&&K.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==v||c.dims[1]!==r.numHeads||c.dims[2]!==w||c.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:v,sequenceLength:w,pastSequenceLength:b,kvSequenceLength:S,totalSequenceLength:T,maxSequenceLength:C,inputHiddenSize:0,hiddenSize:$,vHiddenSize:B,headSize:N,vHeadSize:Math.floor(B/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:A,scale:r.scale,broadcastResPosBias:P,passPastInKv:D,qkvFormat:E}},Ow=e=>Ye({...e}),ip=Ye({perm:[0,2,1,3]}),Ty=(e,r,i,s,o,u,d)=>{let c=[s,o,u],f=K.size(c),m=[{type:12,data:f},{type:12,data:d},{type:12,data:u}],v=w=>{let $=_e("qkv_with_bias",r.dataType,c),S=J("qkv",r.dataType,c),b=J("bias",i.dataType,c),C=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(C).declareVariables(S,b,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:v},{inputs:[r,i],outputs:[-1]})[0]},Uo=(e,r,i,s,o,u,d,c)=>{let f=u;if(d&&K.size(d.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=Ty(e,u,d,r,s,i*o,c),f=f.reshape([r,s,i,o]),i===1||s===1?f:e.compute(pr(f,ip.perm),{inputs:[f],outputs:[-1]})[0]}else return u.dims.length===3&&(f=u.reshape([r,s,i,o])),i===1||s===1?f:e.compute(pr(f,ip.perm),{inputs:[f],outputs:[-1]})[0]},Aw=(e,r)=>{let i=Ey(e.inputs,r),s=e.inputs[0],o=Kt(e.inputs,1),u=Kt(e.inputs,2),d=Kt(e.inputs,3),c=Kt(e.inputs,4),f=Kt(e.inputs,5),m=Kt(e.inputs,6),v=Kt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let w=o&&u&&o.dims.length===4&&u.dims.length===4,$=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,d,0);if(w)return Fo(e,$,o,u,c,void 0,m,v,f,i);if(!o||!u)throw new Error("key and value must be provided");let S=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,d,i.hiddenSize),b=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,u,d,2*i.hiddenSize);Fo(e,$,S,b,c,void 0,m,v,f,i)}}),Cy,Iy,zy,Ny,Mp,Dw,Mw,Bw=ae(()=>{"use strict";ze(),Me(),pt(),Le(),Cy=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Iy=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ye({numOutputs:s,axis:r.axis,splitSizes:i})},zy=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${be("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ny=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Mp=(e,r)=>{let i=e[0].dims,s=K.size(i),o=e[0].dataType,u=K.normalizeAxis(r.axis,i.length),d=new Array(r.numOutputs),c=J("input",o,i.length),f=new Array(r.numOutputs),m=[],v=[],w=0,$=[{type:12,data:s}];for(let b=0;b<r.numOutputs;b++){w+=r.splitSizes[b],f[b]=w;let C=i.slice();C[u]=r.splitSizes[b],v.push(C),d[b]=_e(`output${b}`,o,C.length),m.push({dims:v[b],dataType:e[0].dataType})}$.push({type:12,data:f},...ke(i,...v));let S=b=>`
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
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:$})}},Dw=(e,r)=>{Cy(e.inputs);let i=e.inputs.length===1?r:Iy(e.inputs,r);e.compute(Mp(e.inputs,i),{inputs:[0]})},Mw=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Ye({axis:r,numOutputs:s,splitSizes:i})}}),Oy,Bl,Pw,Lw=ae(()=>{"use strict";ze(),Me(),pt(),Le(),Oy=(e,r)=>{let[i,s,o,u]=e,{numHeads:d,rotaryEmbeddingDim:c}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!K.areEqual(s.dims,[])&&!K.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!K.areEqual(o.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],m=i.dims[i.dims.length-2],v=o.dims[0],w=K.sizeFromDimension(i.dims,1)/m,$=c===0?o.dims[1]*2:w/d;if(c>$)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(f!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(m!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(m>v)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if($/2!==o.dims[1]&&c/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`)},Bl=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:u}=r,d=e[0].dims[0],c=K.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],m=c/f,v=e[2].dims[1],w=o===0?v*2:m/s,$=new Array(d,f,m/w,w-v),S=K.computeStrides($),b=[{type:1,data:u},{type:12,data:$},{type:12,data:S},...e[0].dims.length===3?new Array({type:12,data:[c,m,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,w,f*w,1]}):[],...ke(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],C=N=>{let E=J("input",e[0].dataType,e[0].dims.length),T=J("position_ids",e[1].dataType,e[1].dims.length),A=J("cos_cache",e[2].dataType,e[2].dims.length),D=J("sin_cache",e[3].dataType,e[3].dims.length),B=_e("output",e[0].dataType,e[0].dims.length);return N.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:$.length},{name:"global_strides",type:"u32",length:S.length},{name:"input_output_strides",type:"u32",length:S.length}]),`
        ${N.declareVariables(E,T,A,D,B)}

        ${N.mainStart(is)}
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
            let re = ${E.getByOffset("i")} * ${A.get("position_id","bsnh[3]")} -
                ${E.getByOffset("j")} * ${D.get("position_id","bsnh[3]")};
            ${B.setByOffset("i","re")}
            let im = ${E.getByOffset("i")} * ${D.get("position_id","bsnh[3]")} +
                ${E.getByOffset("j")} * ${A.get("position_id","bsnh[3]")};
            ${B.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${B.setByOffset("k",E.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ye({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size($)/is)},programUniforms:b})}},Pw=(e,r)=>{Oy(e.inputs,r),e.compute(Bl(e.inputs,r))}}),Ay,Ry,ap,Dy,Uw,W$=ae(()=>{"use strict";pt(),ze(),af(),Rw(),Bw(),ci(),Lw(),Le(),Ay=(e,r)=>{if(r.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4];if(r.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(r.localWindowSize!==-1)throw new Error("Local attention is not supported");if(r.softcap!==0)throw new Error("Softcap is not supported");if(r.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(r.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],m=i.dims[1],v=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],w=m,$=0,S=!s||s.dims.length===0,b=Math.floor(S?v/(r.numHeads+2*r.kvNumHeads):v/r.numHeads);S&&(v=b*r.numHeads);let C=u&&u.dims.length!==0,N=d&&d.dims.length!==0;if(C&&u.dims.length===4&&u.dims[0]===f&&u.dims[1]!==r.kvNumHeads&&u.dims[2]===r.kvNumHeads&&u.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(C&&N){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=u.dims[2]}else if(C||N)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let E=1;if(s&&s.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');w=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');E=3}let T=0,A=!1,D=r.kvNumHeads?b*r.kvNumHeads:v;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(w!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');D=o.dims[2]}else{if(w!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');D=o.dims[1]*o.dims[3],A=!0}}let B=e.length>4?e[5]:void 0;if(B){if(B.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let P=B.dims.reduce((V,I)=>V*I,1);if(P!==f)throw new Error(`seqlens_k must have batch_size (${f}) elements, got ${P}.`);for(let V=0;V<B.dims.length;V++)if(B.dims[V]!==1&&B.dims[V]!==f)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${f}), got dims[${V}] = ${B.dims[V]}.`)}return{batchSize:f,sequenceLength:m,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:v,vHiddenSize:D,headSize:b,vHeadSize:Math.floor(D/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:T,scale:r.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:E}},Ry=Ye({perm:[0,2,1,3]}),ap=(e,r,i)=>{let s=r,o=i.kvNumHeads;return r.dims.length===3&&i.kvSequenceLength!==0&&(s=r.reshape([i.batchSize,i.kvSequenceLength,o,i.headSize]),s=e.compute(pr(s,Ry.perm),{inputs:[s],outputs:[-1]})[0]),s},Dy=(e,r,i,s)=>{let o=7,u=["type","type"],d=[e*r],c=e*r,f=[{type:12,data:c},{type:12,data:r},{type:12,data:e}],m=v=>{let w=J("seq_lens",i.dataType,i.dims),$=J("total_seq_lens",s.dataType,s.dims),S=_e("pos_ids",o,d),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${v.registerUniforms(b).declareVariables(w,$,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${r}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m}},Uw=(e,r)=>{var D;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let i=Ay(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((D=e.inputs[1])==null?void 0:D.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],o=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,u=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,d=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,m=e.inputs.length>5?e.inputs[6]:void 0,v=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=Ye({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,v*i.headSize,v*i.headSize]}),[$,S,b]=!o&&!u?e.compute(Mp([s],w),{inputs:[s],outputs:[-1,-1,-1]}):[s,o,u],C,N;if(r.doRotary){let B=e.compute(Dy(i.batchSize,i.sequenceLength,f,m),{inputs:[f,m],outputs:[-1]})[0],P=e.inputs[7],V=e.inputs[8],I=Ye({interleaved:r.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:r.scale}),Y=[$,B,P,V],te=[-1];C=e.compute(Bl(Y,I),{inputs:Y,outputs:te})[0],Y.splice(0,1,S);let me=Ye({interleaved:r.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:r.scale});N=e.compute(Bl(Y,me),{inputs:Y,outputs:te})[0]}let E=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r.doRotary?C:$,void 0,0),T=ap(e,r.doRotary?N:S,i),A=ap(e,b,i);Fo(e,E,T,A,void 0,void 0,d,c,void 0,i,f,m)}}),sp,My,By,jw,V$=ae(()=>{"use strict";ze(),Me(),ci(),Le(),sp=(e,r,i,s,o,u,d,c)=>{let f=ct(u),m=f===1?"f32":`vec${f}f`,v=f===1?"vec2f":`mat2x${f}f`,w=o*d,$=64;w===1&&($=256);let S=[o,d,u/f],b=[o,d,2],C=["rank","type","type"],N=[];N.push(...ke(S,b));let E=T=>{let A=J("x",r.dataType,3,f),D=J("scale",i.dataType,i.dims),B=J("bias",s.dataType,s.dims),P=_e("output",1,3,2),V=[A,D,B,P];return`
  var<workgroup> workgroup_shared : array<${v}, ${$}>;
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
    workgroup_shared[local_idx] = ${v}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${di("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${di("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${$}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:w},programUniforms:N}),getShaderSource:E},{inputs:[r,i,s],outputs:[-1]})[0]},My=(e,r,i)=>{let s=r[0].dims,o=s,u=2,d=s[0],c=s[1],f=K.sizeFromDimension(s,u),m=ct(f),v=K.size(o)/m,w=sp(e,r[0],r[1],r[2],d,f,c,i.epsilon),$=[d,c,f/m],S=[d,c],b=["type","none"],C=N=>{let E=J("x",r[0].dataType,$.length,m),T=J("scale_shift",1,S.length,2),A=_e("output",r[0].dataType,$.length,m),D=[E,T,A];return`
  ${N.registerUniform("output_size","u32").declareVariables(...D)}
  ${N.mainStart()}
  ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${T.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${E.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ke($,S,$)]}),getShaderSource:C},{inputs:[r[0],w]})},By=(e,r,i)=>{let s=r[0].dims,o=s,u=s[0],d=s[s.length-1],c=K.sizeFromDimension(s,1)/d,f=ct(d),m=K.size(o)/f,v=[{type:12,data:c},{type:12,data:Math.floor(d/f)}],w=["type","type"],$=!1,S=[0,s.length-1];for(let E=0;E<s.length-2;E++)$=$||s[E+1]!==1,S.push(E+1);$=$&&s[s.length-1]!==1;let b=$?e.compute(pr(e.inputs[0],S),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(E,T)=>s[S[T]])),C=sp(e,b,r[1],r[2],u,c,d,i.epsilon),N=E=>{let T=St(r[0].dataType),A=f===1?"vec2f":`mat${f}x2f`,D=V=>{let I=V===0?"x":"y",Y=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${T}(${Y}(scale.${I}))`;case 2:return`vec2<${T}>(${Y}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${T}>(${Y}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${f}`)}},B=J("input",r[0].dataType,r[0].dims,f),P=_e("output",r[0].dataType,o,f);return`
  @group(0) @binding(0) var<storage, read> input : array<${B.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${P.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${E.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${D(0)}, ${D(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:N},{inputs:[r[0],C]})},jw=(e,r)=>{r.format==="NHWC"?By(e,e.inputs,r):My(e,e.inputs,r)}}),Py,Ly,Ww,F$=ae(()=>{"use strict";ze(),Me(),Le(),Py=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ly=(e,r,i)=>{let s=r.simplified,o=e[0].dims,u=e[1],d=!s&&e[2],c=o,f=K.normalizeAxis(r.axis,o.length),m=K.sizeToDimension(o,f),v=K.sizeFromDimension(o,f),w=K.size(u.dims),$=d?K.size(d.dims):0;if(w!==v||d&&$!==v)throw new Error(`Size of X.shape()[axis:] == ${v}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${$}`);let S=[];for(let B=0;B<o.length;++B)B<f?S.push(o[B]):S.push(1);let b=ct(v),C=["type","type"],N=[{type:12,data:m},{type:1,data:v},{type:12,data:Math.floor(v/b)},{type:1,data:r.epsilon}];d&&C.push("type");let E=i>1,T=i>2,A=B=>{let P=St(e[0].dataType),V=[J("x",e[0].dataType,e[0].dims,b),J("scale",u.dataType,u.dims,b)];d&&V.push(J("bias",d.dataType,d.dims,b)),V.push(_e("output",e[0].dataType,c,b)),E&&V.push(_e("mean_data_output",1,S)),T&&V.push(_e("inv_std_output",1,S));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${B.registerUniforms(I).declareVariables(...V)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Tp("f32",b)};
    var mean_square_vector = ${Tp("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${rs(P,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${di("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${di("mean_square_vector",b)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${rs(P,b,"x[j + offset]")};
      let f32scale = ${rs(P,b,"scale[j]")};
      output[j + offset] = ${V[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${rs(P,b,"bias[j]")}`:""}
      );
    }

    ${E?"mean_data_output[global_idx] = mean":""};
    ${T?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},D=[{dims:c,dataType:e[0].dataType}];return E&&D.push({dims:S,dataType:1}),T&&D.push({dims:S,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${i};${s}`,inputDependencies:C},getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:N}),getShaderSource:A}},Ww=(e,r)=>{Py(e.inputs),e.compute(Ly(e.inputs,r,e.outputCount))}}),Uy,Vw,q$=ae(()=>{"use strict";Me(),df(),cf(),Uy=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vw=e=>{Uy(e.inputs);let r=ns.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&s<8)e.compute(lf(e.inputs,{activation:""},r));else{let o=r[r.length-2],u=K.size(e.inputs[0].dims.slice(0,-2)),d=K.size(e.inputs[1].dims.slice(0,-2));if(u!==1&&o===1&&d===1){let c=e.inputs[0].reshape([1,u,s]),f=e.inputs[1].reshape([1,s,i]),m=[1,u,i],v=[c,f];e.compute(Ml(v,{activation:""},r,m),{inputs:v})}else e.compute(Ml(e.inputs,{activation:""},r))}}}),jy,Wy,Vy,Fw,qw,H$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),jy=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),u=r.blockSize/8*r.bits,d=e[1];if(!K.areEqual(d.dims,[r.n,o,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=e[2].dims;if(K.size(c)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let f=e[3].dims,m=r.n*(r.bits===8?o:Math.floor((o*r.bits+7)/8));if(K.size(f)!==m)throw new Error("zeroPoints input size error.")}},Wy=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,v=e[0].dataType,w=ct(r.k),$=ct(m),S=ct(d),b=c.concat([o,d]),C=o>1&&d/S%2===0?2:1,N=K.size(b)/S/C,E=64,T=[],A=[f,o,u/w],D=K.convertShape(e[1].dims).slice();D.splice(-1,1,m/$),T.push(...ke(A)),T.push(...ke(D)),T.push(...ke(e[2].dims)),e.length===4&&T.push(...ke(K.convertShape(e[3].dims)));let B=[f,o,d/S];T.push(...ke(B));let P=V=>{let I=A.length,Y=J("a",e[0].dataType,I,w),te=J("b",12,D.length,$),me=J("scales",e[2].dataType,e[2].dims.length),de=[Y,te,me],pe=e.length===4?J("zero_points",12,e[3].dims.length):void 0;pe&&de.push(pe);let G=B.length,he=_e("output",e[0].dataType,G,S),ye=St(e[0].dataType),ge=(()=>{switch(w){case 1:return`array<${ye}, 8>`;case 2:return`mat4x2<${ye}>`;case 4:return`mat2x4<${ye}>`;default:throw new Error(`${w}-component is not supported.`)}})(),ee=Math.floor(32/r.bits),re=Math.floor(ee/8),se=()=>{let ne="";for(let X=0;X<re;X++){let ve=X*r.bits*4,Ee=ve+r.bits;ne+=`
          // reuse a data (pass ${X})
            var input_offset${X>0?X:""} = ${X===0?Y.indicesToOffset(`${Y.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${X>0?X:""}: ${ge};
            for (var j${X>0?X:""}: u32 = 0; j${X>0?X:""} < ${8/w}; j${X>0?X:""}++) {
              a_data${X>0?X:""}[j${X>0?X:""}] = ${Y.getByOffset(`input_offset${X>0?X:""}`)};
              input_offset${X>0?X:""}++;
            }
          `;for(let Ie=0;Ie<S*C;Ie++)ne+=`
            b_value = ${$===1?`b${Ie}_data`:`b${Ie}_data[i]`};
            ${r.bits===2?`{
              let half_word = b_value >> ${X*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ve}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ee}u) & b_mask);`}
            b_quantized_values = ${ge}(${Array.from({length:4},(Be,De)=>`${ye}(b_value_lower[${De}]), ${ye}(b_value_upper[${De}])`).join(", ")});
            b_dequantized_values = ${w===1?`${ge}(${Array.from({length:8},(Be,De)=>`(b_quantized_values[${De}] - ${pe?`zero_point${Ie}`:"zero_point"}) * scale${Ie}`).join(", ")});`:`(b_quantized_values - ${ge}(${Array(8).fill(`${pe?`zero_point${Ie}`:"zero_point"}`).join(",")})) * scale${Ie};`};
            workgroup_shared[local_id.x * ${C} + ${Math.floor(Ie/S)}]${S>1?`[${Ie%S}]`:""} += ${Array.from({length:8/w},(Be,De)=>`${w===1?`a_data${X>0?X:""}[${De}] * b_dequantized_values[${De}]`:`dot(a_data${X>0?X:""}[${De}], b_dequantized_values[${De}])`}`).join(" + ")};
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
            `;for(let X=0;X<S*C;X++)ne+=`
            let scale${X} = ${me.getByOffset("col_index * nBlocksPerCol + block")};
            ${pe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${r.bits}u);
            zero_point_word = ${pe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${X} = ${ye}((zero_point_word) & ${r.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return ne},F=()=>{let ne=`col_index = col * ${S};`;for(let X=0;X<S*C;X++)ne+=`
            let b${X}_data = ${te.getByIndices(`${te.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ne+=`
            var b_value: u32;
            let b_mask: u32 = ${r.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ge};
            var b_dequantized_values: ${ge};`,ne};return`
        var<workgroup> workgroup_shared: array<${he.type.value}, ${C*E}>;
        ${V.declareVariables(...de,he)}
        ${V.mainStart([E,1,1])}
          let output_indices = ${he.offsetToIndices(`(global_idx / ${E}) * ${C}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${E}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/w};
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
            var output_value: ${he.type.value} = ${he.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${E}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${C};
            }
            ${he.setByIndices(`${he.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${w};${$};${S};${C};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:v}],dispatchGroup:{x:N},programUniforms:T}),getShaderSource:P}},Vy=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,v=e[0].dataType,w=ct(r.k),$=ct(m),S=c.concat([o,d]),b=128,C=d%8===0?8:d%4===0?4:1,N=b/C,E=Math.floor(32/r.bits),T=N*$*E,A=T/w,D=T/r.blockSize,B=K.size(S)/C,P=[],V=[f,o,u/w],I=K.convertShape(e[1].dims).slice();I.splice(-1,1,m/$),P.push(...ke(V)),P.push(...ke(I)),P.push(...ke(e[2].dims)),e.length===4&&P.push(...ke(K.convertShape(e[3].dims)));let Y=[f,o,d];P.push(...ke(Y));let te=me=>{let de=V.length,pe=J("a",e[0].dataType,de,w),G=J("b",12,I.length,$),he=J("scales",e[2].dataType,e[2].dims.length),ye=[pe,G,he],ge=e.length===4?J("zero_points",12,e[3].dims.length):void 0;ge&&ye.push(ge);let ee=Y.length,re=_e("output",e[0].dataType,ee),se=St(e[0].dataType),O=()=>{switch(w){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
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
            let zero_point = ${se}((zero_point_word) & ${r.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,r.bits-1)} for unsigned ${r.bits}-bit quantization.
            let zero_point = ${se}(${Math.pow(2,r.bits-1).toFixed(1)});`}
            let scale = ${he.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/w};
            for (var i: u32 = 0; i < ${$}; i++) {
              let b_value = ${$===1?"b_data":"b_data[i]"};
              ${(()=>{let F=Math.floor(E/8),ne="";for(let X=0;X<F;X++){let ve=X*r.bits*4,Ee=ve+r.bits;ne+=`
              ${O()}
              {${r.bits===2?`
                let half_word = b_value >> ${X*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ve}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ee}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(Ie,Be)=>`${se}(b_value_lower[${Be}]), ${se}(b_value_upper[${Be}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ie,Be)=>`${`dot(a_data${Be}, b_dequantized_values[${Be}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${w};${$};${N};${C}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:v}],dispatchGroup:{x:B},programUniforms:P}),getShaderSource:te}},Fw=(e,r)=>{jy(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vy(e.inputs,r)):e.compute(Wy(e.inputs,r))},qw=e=>Ye(e)}),Fy,qy,Hy,Gy,Ky,Qy,Zy,Yy,Hw,G$=ae(()=>{"use strict";ze(),Me(),Le(),Fy=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${be("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${be("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Hy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${be("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${be("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${be("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Gy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${be("uniforms.x_shape",o,r)})) {
                  k = i32(${be("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${be("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Ky=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${be("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${be("uniforms.x_shape",o,r)})) {
                  k -= i32(${be("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${be("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Qy=(e,r,i)=>{switch(i.mode){case 0:return qy(e,r,i.pads.length);case 1:return Hy(e,r,i.pads.length);case 2:return Gy(e,r,i.pads.length);case 3:return Ky(e,r,i.pads.length);default:throw new Error("Invalid mode")}},Zy=(e,r)=>{let i=K.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=K.size(i),u=[{type:12,data:o},{type:6,data:r.pads}],d=e.length>=3&&e[2].data;r.mode===0&&u.push({type:d?e[2].dataType:1,data:r.value}),u.push(...ke(e[0].dims,i));let c=["rank"],f=m=>{let v=_e("output",e[0].dataType,i.length),w=J("x",e[0].dataType,s.length),$=w.type.value,S=Qy(v,s.length,r),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&b.push({name:"constant_value",type:d?$:"f32"}),`
            ${m.registerUniforms(b).declareVariables(w,v)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${v.offsetToIndices("global_idx")};

            var value = ${$}(0);
            ${S}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${d}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(i)/64)},programUniforms:u}),getShaderSource:f}},Yy=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,u=new Int32Array(2*o).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)u[Number(c[f])]=Number(i[f]),u[Number(c[f])+o]=Number(i[f+c.length])}else i.forEach((c,f)=>u[Number(f)]=Number(c));let d=[];return u.forEach(c=>d.push(c)),{mode:r.mode,value:s,pads:d}}else return r},Hw=(e,r)=>{Fy(e.inputs);let i=Yy(e.inputs,r);e.compute(Zy(e.inputs,i),{inputs:[0]})}}),Ao,op,up,lp,dp,Xy,Jy,cp,pp,Gw,Kw,fp,Qw,Zw,hp,Yw,Xw,Jw,e_,K$=ae(()=>{"use strict";fr(),ze(),Me(),Le(),Ao=e=>{if(lt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},op=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let u=Object.hasOwnProperty.call(r,"dilations"),d=r.kernelShape.slice(),c=r.strides.slice(),f=u?r.dilations.slice():[],m=r.pads.slice();Rl.adjustPoolAttributes(i,o,d,c,f,m);let v=Rl.computePoolOutputShape(i,o,c,f,d,m,r.autoPad,r.ceilMode),w=Object.assign({},r);u?Object.assign(w,{kernelShape:d,strides:c,pads:m,dilations:f,cacheKey:r.cacheKey}):Object.assign(w,{kernelShape:d,strides:c,pads:m,cacheKey:r.cacheKey});let $=v.slice();return $.push($.splice(1,1)[0]),[w,s?$:v]},up=(e,r)=>{let i=r.format==="NHWC",s=K.size(e),o=K.size(r.kernelShape),u=[{type:12,data:s},{type:12,data:o}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let c=r.kernelShape[r.kernelShape.length-1],f=r.strides[r.strides.length-1],m=r.pads[r.pads.length/2-1],v=r.pads[r.pads.length-1],w=!!(m+v);u.push({type:12,data:c},{type:12,data:f},{type:12,data:m},{type:12,data:v}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let $=!1;if(r.kernelShape.length===2){let S=r.kernelShape[r.kernelShape.length-2],b=r.strides[r.strides.length-2],C=r.pads[r.pads.length/2-2],N=r.pads[r.pads.length-2];$=!!(C+N),u.push({type:12,data:S},{type:12,data:b},{type:12,data:C},{type:12,data:N}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,w,$]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=K.computeStrides(r.kernelShape);u.push({type:12,data:c},{type:12,data:r.pads},{type:12,data:r.strides}),d.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let f=r.pads.reduce((m,v)=>m+v);return[u,d,!!f,!1,!1]}},lp=(e,r,i,s,o,u,d,c,f,m,v,w)=>{let $=o.format==="NHWC",S=r.type.value,b=_e("output",r.type.tensor,s);if(o.kernelShape.length<=2){let C="",N="",E="",T=i-($?2:1);if(v?C=`
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
                `,E=`
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
              ${E}
              ${d}

              output[global_idx] = value;
            }`}else{if($)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let C=o.kernelShape.length,N=o.pads.length,E="";return m?E=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${u}
              }`:E=`
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
                  offsets[j] = offset / ${be("uniforms.kernelStrides","j",C)};
                  offset -= offsets[j] * ${be("uniforms.kernelStrides","j",C)};
                }
                offsets[${C-1}] = offset;

                isPad = false;
                for (var j = ${i-C}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${be("uniforms.strides",`j - ${i-C}u`,C)}
                    + offsets[j - ${i-C}u] - ${be("uniforms.pads","j - 2u",N)};
                  ${E}
              }
              ${d}

              output[global_idx] = value;
            }`}},dp=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xy=e=>`${dp(e)};${e.countIncludePad}`,Jy=e=>`${dp(e)};${e.storageOrder};${e.dilations}`,cp=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),pp=(e,r,i,s)=>{let[o,u]=op(r,s,i),d=J("x",r.dataType,r.dims.length),c=d.type.value,f="value += x_val;",m="";o.countIncludePad?m+=`value /= ${c}(uniforms.kernelSize);`:m+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[v,w,$,S,b]=up(u,o);v.push(...ke(r.dims,u));let C=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:v}),getShaderSource:N=>lp(N,d,r.dims.length,u.length,o,f,m,0,w,$,S,b)}},Gw=e=>{let r=e.count_include_pad!==0,i=cp(e);if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:Xy(s)}},Kw=(e,r)=>{Ao(e.inputs),e.compute(pp("AveragePool",e.inputs[0],!1,r))},fp={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Qw=e=>{let r=e.format;return{format:r,...fp,cacheKey:r}},Zw=(e,r)=>{Ao(e.inputs),e.compute(pp("GlobalAveragePool",e.inputs[0],!0,r))},hp=(e,r,i,s)=>{let[o,u]=op(r,s,i),d=`
      value = max(x_val, value);
    `,c="",f=J("x",r.dataType,r.dims.length),m=["rank"],[v,w,$,S,b]=up(u,o);return v.push(...ke(r.dims,u)),{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:v}),getShaderSource:C=>lp(C,f,r.dims.length,u.length,o,d,c,r.dataType===10?-65504:-1e5,w,$,S,b)}},Yw=(e,r)=>{Ao(e.inputs),e.compute(hp("MaxPool",e.inputs[0],!1,r))},Xw=e=>{let r=e.storage_order,i=e.dilations,s=cp(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:Jy(o)}},Jw=e=>{let r=e.format;return{format:r,...fp,cacheKey:r}},e_=(e,r)=>{Ao(e.inputs),e.compute(hp("GlobalMaxPool",e.inputs[0],!0,r))}}),e0,t0,t_,r_,Q$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),e0=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,u)=>u===r.axis||o===e[0].dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},t0=(e,r)=>{let i=K.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,u=e[0].dims,d=e[1].dataType,c=K.size(u),f=s===3||s===2,m=f?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,v=e[1].dims,w=e.length>2?e[2]:void 0,$=w?f?[Math.ceil(K.size(w.dims)/4)]:w.dims:void 0,S=v.length===0||v.length===1&&v[0]===1,b=S===!1&&v.length===1,C=ct(c),N=S&&(!f||C===4),E=N?C:1,T=N&&!f?C:1,A=J("input",f?12:s,m.length,T),D=J("scale",d,v.length),B=w?J("zero_point",f?12:s,$.length):void 0,P=_e("output",d,u.length,E),V=[A,D];B&&V.push(B);let I=[m,v];w&&I.push($);let Y=[{type:12,data:c/E},{type:12,data:i},{type:12,data:r.blockSize},...ke(...I,u)],te=me=>{let de=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${me.registerUniforms(de).declareVariables(...V,P)}
      ${me.mainStart()}
          ${me.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${f?`
            let input = ${A.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${E===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${A.getByOffset("global_idx")};`};

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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:B?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(c/E/64),y:1,z:1},programUniforms:Y})}},t_=(e,r)=>{e0(e.inputs,r),e.compute(t0(e.inputs,r))},r_=e=>Ye({axis:e.axis,blockSize:e.blockSize})}),r0,n0,n_,Z$=ae(()=>{"use strict";fr(),ze(),Le(),r0=(e,r,i)=>{let s=e===r,o=e<r&&i<0,u=e>r&&i>0;if(s||o||u)throw new Error("Range these inputs' contents are invalid.")},n0=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),u=[o],d=o,c=[{type:12,data:d},{type:s,data:e},{type:s,data:i},...ke(u)],f=m=>{let v=_e("output",s,u.length),w=v.type.value,$=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${m.registerUniforms($).declareVariables(v)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c})}},n_=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),lt.webgpu.validateInputContent&&r0(r,i,s),e.compute(n0(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),i0,a0,i_,a_,Y$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),i0=(e,r,i,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);let o=`{
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
                ${o}max(bitcast<f32>(oldValue), (${i}))${u}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${r}, bitcast<${s}>(${i}));`:`${o}min(bitcast<${s}>(oldValue), (${i}))${u}`;case"mul":return`${o}(bitcast<${s}>(oldValue) * (${i}))${u}`;default:throw new Error(`Reduction ${e} is not supported.`)}},a0=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i,u=1,d=Math.ceil(K.sizeToDimension(s,s.length-1)/u),c=s[s.length-1],f=K.sizeFromDimension(i,c),m=[{type:12,data:d},{type:12,data:c},{type:12,data:f},...ke(e[1].dims,e[2].dims,o)],v=w=>{let $=J("indices",e[1].dataType,e[1].dims.length),S=J("updates",e[2].dataType,e[2].dims.length,u),b=r.reduction!=="none"&&r.reduction!==""?zv("output",e[0].dataType,o.length):_e("output",e[0].dataType,o.length,u);return`
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
    ${i0(r.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${r.cacheKey}_${r.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:v}},i_=e=>Ye({reduction:e.reduction}),a_=(e,r)=>{e.compute(a0(e.inputs,r),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),s0,o0,u0,mp,l0,d0,c0,p0,f0,h0,m0,g0,gp,y0,v0,w0,_0,$0,s_,o_,X$=ae(()=>{"use strict";ze(),Me(),pt(),Le(),s0=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(r.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},o0=(e,r,i)=>{r.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return r.forEach((o,u)=>s[o]=e[u]),s},u0=(e,r,i,s,o,u)=>{let[d,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],m=e[0].dims.length;if(d>0&&e.length>d&&e[d].dims.length>0)e[d].getFloat32Array().forEach(v=>u.push(v));else if(r.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(v=>s.push(v)),s.length!==0&&s.length!==m&&i>=18&&s.length!==r.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");s0(s,r),r.axes.length>0&&o0(s,r.axes,m).forEach((v,w)=>s[w]=v)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(v=>o.push(Number(v))),o.length!==0&&o.length!==m&&i>=18&&o.length!==r.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(s.length!==0&&s.length!==r.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==r.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},mp=(e,r,i,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${r});
  let whole = ${s}(big / (${i}));
  let fract = ${s}(big % (${i})) / ${s}(${i});
  return whole + fract;
`,l0=(e,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
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
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",d0=(e,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",c0=(e,r,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return r.length>0?(r.forEach((u,d)=>{s[u]=o[d],s[d+i]=o[r.length+d]}),s):o},p0=(e,r,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(u=>o.push(u)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((u,d)=>o[u]=i[d])}else i.forEach(u=>o.push(u));else{if(r.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((u,d)=>Math.round(u*r[d]))}return o},f0=(e,r,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(u=>r[u]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(u=>r[u]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(u=>r[u]=s),i.axes.forEach(u=>o[u]=Math.round(e[u]*r[u]))):(r.fill(s,0,r.length),o.forEach((u,d)=>o[d]=Math.round(u*r[d]))),o},h0=(e,r,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${be("uniforms.scales","i",s)};
        var roi_low = ${be("uniforms.roi","i",o)};
        var roi_hi = ${be("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${be("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${be("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,m0=(e,r,i,s,o,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
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
    }`,g0=(e,r)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${be("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,gp=(e,r,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",r,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",y0=(e,r,i,s,o)=>{let[u,d,c,f]=i.length===2?[-1,0,1,-1]:[0,2,3,1],m=e.type.value;return`
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
    }`},v0=(e,r,i,s,o,u,d,c,f,m)=>{let v=i.length===2,w=!0,[$,S]=v?[0,1]:w?[2,3]:[1,2],b=e.type.value,C=N=>{let E=N===$?"row":"col";return`
      fn ${E}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${b} {
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
          var ${E}: ${b} = originalIdx + ${b}(i);
          if (${E} < 0 || ${E} >= ${i[N]}) {
            ${m?`coefs[i + 1] = 0.0;
                        continue;`:c?`return ${f};`:`${E} = max(0, min(${E}, ${i[N]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",N,`u32(${E})`)};
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
    `},w0=(e,r,i,s,o)=>{let[u,d,c,f,m]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],v=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${v} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(depth, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(height, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(width, ${i[f]} - 1))`)};
      ${gp(e,m,u,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${v} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${v} = originalIndices[${d}];
      var height:${v} = originalIndices[${c}];
      var width:${v} = originalIndices[${f}];
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

      var x111: ${v} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${v} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${v} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${v} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${v} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${v} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${v} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${v} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${v} = abs(depth - ${v}(depth1));
      var dx2: ${v} = abs(${v}(depth2) - depth);
      var dy1: ${v} = abs(height - ${v}(height1));
      var dy2: ${v} = abs(${v}(height2) - height);
      var dz1: ${v} = abs(width - ${v}(width1));
      var dz2: ${v} = abs(${v}(width2) - width);
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
    }`},_0=(e,r,i,s,o,u)=>{let d=e.dims,c=c0(u,r.axes,d.length),f=p0(d,s,o,r.axes),m=s.slice();s.length===0&&(m=d.map((T,A)=>T===0?1:f[A]/T),r.keepAspectRatioPolicy!=="stretch"&&(f=f0(d,m,r)));let v=_e("output",e.dataType,f.length),w=J("input",e.dataType,d.length),$=K.size(f),S=d.length===f.length&&d.every((T,A)=>T===f[A]),b=r.coordinateTransformMode==="tf_crop_and_resize",C=r.extrapolationValue,N=w.type.value,E=T=>`
      ${S?"":`
      ${l0(r.coordinateTransformMode,N)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${g0(w,d)};
              ${d0(r.nearestMode,i,N)};
              ${m0(w,v,d,f,m.length,c.length,b)};
              `;case"linear":return`
              ${h0(v,d,f,m.length,c.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${y0(w,v,d,b,C)}`;if(d.length===3||d.length===5)return`${w0(w,v,d,b,C)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${v0(w,v,d,f,m,c,r.cubicCoeffA,b,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${T.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",c.length).declareVariables(w,v)}
      ${T.mainStart()}
        ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${S?"output[global_idx] = input[global_idx];":`
        let output_indices = ${v.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${m.length>0?r.mode==="cubic"?m:m.length:""}|${o.length>0?o:""}|${c.length>0?c:""}|${S}|${r.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},{type:1,data:m},{type:1,data:c},...ke(d,f)]})}},$0=e=>{let r=e.customDataBuffer;return new Uint32Array(r.buffer,r.byteOffset,1)[0]},s_=(e,r)=>{let i=[],s=[],o=[],u=$0(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");u0(e.inputs,r,u,i,s,o),e.compute(_0(e.inputs[0],r,u,i,s,o),{inputs:[0]})},o_=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,u=e.excludeOutside!==0,d=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,m=e.nearestMode===""?"simple":e.nearestMode;return Ye({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:c,mode:f,nearestMode:m})}}),x0,b0,u_,J$=ae(()=>{"use strict";ze(),Me(),Le(),x0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],u=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let d=e[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let d=e[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},b0=(e,r,i,s)=>{let o=r.simplified,u=e[0].dims,d=K.size(u),c=u,f=d,m=u.slice(-1)[0],v=s?u.slice(0,-1).concat(1):[],w=!o&&e.length>3,$=e.length>4,S=s&&i>1,b=s&&i>2,C=i>3,N=64,E=ct(m),T=[{type:12,data:f},{type:12,data:E},{type:12,data:m},{type:1,data:r.epsilon}],A=B=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],V=[J("x",e[0].dataType,e[0].dims,E),J("skip",e[1].dataType,e[1].dims,E),J("gamma",e[2].dataType,e[2].dims,E)];w&&V.push(J("beta",e[3].dataType,e[3].dims,E)),$&&V.push(J("bias",e[4].dataType,e[4].dims,E)),V.push(_e("output",e[0].dataType,c,E)),S&&V.push(_e("mean_output",1,v)),b&&V.push(_e("inv_std_output",1,v)),C&&V.push(_e("input_skip_bias_sum",e[0].dataType,c,E));let I=St(e[0].dataType),Y=St(1,E);return`

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
          let f32_value = ${rs(I,E,"value")};
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
        let mean = ${di("sum",E)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${di("square_sum",E)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${S?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},D=[{dims:c,dataType:e[0].dataType}];return i>1&&D.push({dims:v,dataType:1}),i>2&&D.push({dims:v,dataType:1}),i>3&&D.push({dims:u,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${E};${S};${b};${C}`,inputDependencies:e.map((B,P)=>"type")},getShaderSource:A,getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(f/m)},programUniforms:T})}},u_=(e,r)=>{x0(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(b0(e.inputs,r,e.outputCount,!1),{outputs:i})}}),S0,Ro,k0,yp,E0,T0,l_,d_,ex=ae(()=>{"use strict";ze(),Me(),pt(),Le(),S0=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ro=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},k0=(e,r)=>{if(e.length>1){let i=Ro(e,1),s=Ro(e,2),o=Ro(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ye({starts:i,ends:s,axes:o})}else return r},yp=(e,r,i,s,o)=>{let u=e;return e<0&&(u+=i[s[r]]),o[r]<0?Math.max(0,Math.min(u,i[s[r]]-1)):Math.max(0,Math.min(u,i[s[r]]))},E0=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${be("uniforms.input_shape","i",i.length)};
            let steps_i = ${be("uniforms.steps","i",i.length)};
            let signs_i = ${be("uniforms.signs","i",i.length)};
            let starts_i = ${be("uniforms.starts","i",i.length)};
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
      }`,T0=(e,r)=>{let i=e[0].dims,s=K.size(i),o=r.axes.length>0?K.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],u=Ro(e,4);u.forEach(E=>E!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(o.length).fill(1));let d=r.starts.map((E,T)=>yp(E,T,i,o,u)),c=r.ends.map((E,T)=>yp(E,T,i,o,u));if(o.length!==d.length||o.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let E=0;E<i.length;++E)o.includes(E)||(d.splice(E,0,0),c.splice(E,0,i[E]),u.splice(E,0,1));let f=u.map(E=>Math.sign(E));u.forEach((E,T,A)=>{if(E<0){let D=(c[T]-d[T])/E,B=d[T],P=B+D*u[T];d[T]=P,c[T]=B,A[T]=-E}});let m=i.slice(0);o.forEach((E,T)=>{m[E]=Math.ceil((c[E]-d[E])/u[E])});let v={dims:m,dataType:e[0].dataType},w=_e("output",e[0].dataType,m.length),$=J("input",e[0].dataType,e[0].dims.length),S=K.size(m),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:u.length}],C=[{type:12,data:S},{type:12,data:d},{type:6,data:f},{type:12,data:u},...ke(e[0].dims,m)],N=E=>`
      ${E.registerUniforms(b).declareVariables($,w)}
        ${E0($,w,i)}
        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",$.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:N,getRunData:()=>({outputs:[v],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:C})}},l_=(e,r)=>{S0(e.inputs,r);let i=k0(e.inputs,r);e.compute(T0(e.inputs,i),{inputs:[0]})},d_=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ye({starts:r,ends:i,axes:s})}}),C0,I0,c_,p_,tx=ae(()=>{"use strict";ze(),Me(),pt(),ci(),Le(),C0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},I0=(e,r)=>{let i=e.inputs[0],s=i.dims,o=K.size(s),u=s.length,d=K.normalizeAxis(r.axis,u),c=d<s.length-1,f,m=[];c?(m=Array.from({length:u},(V,I)=>I),m[d]=u-1,m[u-1]=d,f=e.compute(pr(i,m),{inputs:[i],outputs:[-1]})[0]):f=i;let v=f.dims,w=v[u-1],$=o/w,S=ct(w),b=w/S,C=64;$===1&&(C=256);let N=(V,I)=>I===4?`max(max(${V}.x, ${V}.y), max(${V}.z, ${V}.w))`:I===2?`max(${V}.x, ${V}.y)`:I===3?`max(max(${V}.x, ${V}.y), ${V}.z)`:V,E=J("x",f.dataType,f.dims,S),T=_e("result",f.dataType,f.dims,S),A=E.type.value,D=St(f.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,B=V=>`
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
      ${V.registerUniform("packedCols","i32").declareVariables(E,T)}
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
          rowSumShared = ${A}(${di("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${S};${C}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:v,dataType:f.dataType}],dispatchGroup:{x:$},programUniforms:[{type:6,data:b}]}),getShaderSource:B},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(pr(P,m),{inputs:[P]})},c_=(e,r)=>{C0(e.inputs),I0(e,r)},p_=e=>Ye({axis:e.axis})}),vp,z0,N0,O0,f_,rx=ae(()=>{"use strict";ze(),Me(),Le(),vp=e=>Array.from(e.getBigInt64Array(),Number),z0=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(vp(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},N0=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},O0=(e,r)=>{let i=e[0].dims,s=r??vp(e[1]),o=N0(i,s),u=K.size(o),d=e[0].dataType,c=J("input",d,i.length),f=_e("output",d,o.length),m=v=>`
      const inputShape = ${c.indices(...i)};
      ${v.registerUniform("output_size","u32").declareVariables(c,f)}
      ${v.mainStart()}
      ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${f.offsetToIndices("global_idx")};
      var input_indices: ${c.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${c.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${f.indicesGet("output_indices","i")}  % input_dim_i;

        ${c.indicesSet("input_indices","i","input_dim_value")}
      }
      ${f.setByOffset("global_idx",c.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...ke(e[0].dims,o)]}),getShaderSource:m}},f_=e=>{z0(e.inputs),e.compute(O0(e.inputs),{inputs:[0]})}}),A0,R0,h_,nx=ae(()=>{"use strict";ze(),Me(),Le(),A0=(e,r,i,s,o)=>{let u=_e("output_data",o,i.length,4),d=J("a_data",r[1].dataType,r[1].dims.length,4),c=J("b_data",r[2].dataType,r[2].dims.length,4),f=J("c_data",r[0].dataType,r[0].dims.length,4),m,v=(w,$,S)=>`select(${$}, ${w}, ${S})`;if(!s)m=u.setByOffset("global_idx",v(d.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let w=($,S,b="")=>{let C=`a_data[index_a${S}][component_a${S}]`,N=`b_data[index_b${S}][component_b${S}]`,E=`bool(c_data[index_c${S}] & (0xffu << (component_c${S} * 8)))`;return`
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
            ${$}[${S}] = ${b}(${v(C,N,E)});
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
      }`},R0=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,u=!(K.areEqual(r,i)&&K.areEqual(i,s)),d=r,c=K.size(r);if(u){let m=ns.calcShape(ns.calcShape(r,i,!1),s,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,c=K.size(d)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>A0(m,e,d,u,o),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...ke(s,r,i,d)]})}},h_=e=>{e.compute(R0(e.inputs))}}),m_,ix=ae(()=>{"use strict";y$(),af(),v$(),w$(),_$(),$$(),x$(),T$(),I$(),z$(),N$(),O$(),A$(),R$(),D$(),M$(),B$(),P$(),L$(),U$(),j$(),W$(),V$(),F$(),q$(),H$(),Rw(),G$(),K$(),Q$(),Z$(),Y$(),nf(),X$(),Lw(),J$(),ex(),tx(),Bw(),rx(),ci(),sf(),nx(),m_=new Map([["Abs",[a1]],["Acos",[s1]],["Acosh",[o1]],["Add",[W1]],["ArgMax",[t1,Ip]],["ArgMin",[e1,Ip]],["Asin",[u1]],["Asinh",[l1]],["Atan",[d1]],["Atanh",[c1]],["Attention",[r1]],["AveragePool",[Kw,Gw]],["BatchNormalization",[n1]],["BiasAdd",[i1]],["BiasSplitGelu",[j1]],["Cast",[f1,p1]],["Ceil",[m1]],["Clip",[h1]],["Concat",[X1,J1]],["Conv",[Dp,Rp]],["ConvTranspose",[lw,uw]],["Cos",[g1]],["Cosh",[y1]],["CumSum",[dw,cw]],["DepthToSpace",[pw,fw]],["DequantizeLinear",[t_,r_]],["DFT",[hw,mw]],["Div",[V1]],["Einsum",[gw,yw]],["Elu",[v1,Lo]],["Equal",[F1]],["Erf",[w1]],["Exp",[_1]],["Expand",[vw]],["FastGelu",[ww]],["Floor",[$1]],["FusedConv",[Dp,Rp]],["Gather",[$w,_w]],["GatherElements",[Tw,Ew]],["GatherBlockQuantized",[Sw,kw]],["GatherND",[xw,bw]],["Gelu",[x1]],["Gemm",[Iw,Cw]],["GlobalAveragePool",[Zw,Qw]],["GlobalMaxPool",[e_,Jw]],["Greater",[K1]],["GreaterOrEqual",[Z1]],["GridSample",[zw,Nw]],["GroupQueryAttention",[Uw]],["HardSigmoid",[z1,I1]],["HardSwish",[N1]],["InstanceNormalization",[jw]],["LayerNormalization",[Ww]],["LeakyRelu",[b1,Lo]],["Less",[Q1]],["LessOrEqual",[Y1]],["Log",[L1]],["MatMul",[Vw]],["MatMulNBits",[Fw,qw]],["MaxPool",[Yw,Xw]],["Mul",[q1]],["MultiHeadAttention",[Aw,Ow]],["Neg",[k1]],["Not",[S1]],["Pad",[Hw]],["Pow",[H1]],["QuickGelu",[U1,Lo]],["Range",[n_]],["Reciprocal",[E1]],["ReduceMin",[Qv]],["ReduceMean",[Fv]],["ReduceMax",[Kv]],["ReduceSum",[Yv]],["ReduceProd",[Zv]],["ReduceL1",[qv]],["ReduceL2",[Hv]],["ReduceLogSum",[Jv]],["ReduceLogSumExp",[Gv]],["ReduceSumSquare",[Xv]],["Relu",[T1]],["Resize",[s_,o_]],["RotaryEmbedding",[Pw]],["ScatterND",[a_,i_]],["Sigmoid",[C1]],["Sin",[O1]],["Sinh",[A1]],["Slice",[l_,d_]],["SkipLayerNormalization",[u_]],["Split",[Dw,Mw]],["Sqrt",[R1]],["Softmax",[c_,p_]],["Sub",[G1]],["Tan",[D1]],["Tanh",[M1]],["ThresholdedRelu",[P1,Lo]],["Tile",[f_]],["Transpose",[Ov,Av]],["Where",[h_]]])}),g_,ax=ae(()=>{"use strict";fr(),Sn(),Le(),g_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){Sr(e.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of r)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of i)c.push({binding:c.length,resource:{buffer:m.buffer}});o&&c.push({binding:c.length,resource:o});let f=u.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(e.computePipeline),d.setBindGroup(0,f),d.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),cr(e.programInfo.name)}dispose(){}build(e,r){Sr(e.name);let i=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{i.features.has(m.feature)&&s.push(`enable ${m.extension};`)});let o=Nv(r,this.backend.device.limits),u=e.getShaderSource(o),d=`${s.join(`
`)}
${o.additionalImplementations}
${u}`,c=i.createShaderModule({code:d,label:e.name});Ge("verbose",()=>`[WebGPU] ${e.name} shader code: ${d}`);let f=i.createComputePipeline({compute:{module:c,entryPoint:"main"},layout:"auto",label:e.name});return cr(e.name),{programInfo:e,computePipeline:f,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let u=r*i*s,d=Math.ceil(Math.sqrt(u));if(d>o){if(d=Math.ceil(Math.cbrt(u)),d>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),y_={};as(y_,{WebGpuBackend:()=>v_});var D0,M0,B0,v_,sx=ae(()=>{"use strict";fr(),ze(),Sn(),Ev(),m$(),ix(),ax(),D0=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let u=e[s].dims.length;i.push(`${o};${u}`);break}case"dims":{let u=e[s].dims.join(",");i.push(`${o};${u}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},M0=(e,r,i)=>{var o,u;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${D0(r,((u=e.shaderCache)==null?void 0:u.inputDependencies)??new Array(r.length).fill("dims"))}`,s},B0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},v_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},o=c=>r.features.has(c)&&i.push(c)&&!0;o("chromium-experimental-timestamp-query-inside-passes")||o("timestamp-query"),o("shader-f16"),o("subgroups"),this.device=await r.requestDevice(s);let u=r,d=r.info??(typeof u.requestAdapterInfo=="function"?await u.requestAdapterInfo():void 0);this.adapterInfo=new B0(d),this.gpuDataManager=Iv(this),this.programManager=new g_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Jp(e.logLevel,!!e.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Sr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let u=i[o],d=u.kernelId,c=this.kernels.get(d),f=c.kernelType,m=c.kernelName,v=u.programName,w=u.inputTensorViews,$=u.outputTensorViews,S=r[o*2],b=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=S);let C=Number(S-this.queryTimeBase),N=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(C)||!Number.isSafeInteger(N))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(E=>({dims:E.dims,dataType:bn(E.dataType)})),outputsMetadata:$.map(E=>({dims:E.dims,dataType:bn(E.dataType)})),kernelId:d,kernelType:f,kernelName:m,programName:v,startTime:C,endTime:N});else{let E="";w.forEach((A,D)=>{E+=`input[${D}]: [${A.dims}] | ${bn(A.dataType)}, `});let T="";$.forEach((A,D)=>{T+=`output[${D}]: [${A.dims}] | ${bn(A.dataType)}, `}),console.log(`[profiling] kernel "${d}|${f}|${m}|${v}" ${E}${T}start time: ${C} ns, execution time: ${N-C} ns`)}Nl("GPU",`${v}::${S}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),cr()}run(e,r,i,s,o,u){Sr(e.name);let d=[];for(let T=0;T<r.length;++T){let A=r[T].data;if(A===0)continue;let D=this.gpuDataManager.get(A);if(!D)throw new Error(`no GPU data for input: ${A}`);d.push(D)}let{outputs:c,dispatchGroup:f,programUniforms:m}=e.getRunData(r),v=i.length===0?c.map((T,A)=>A):i;if(v.length!==c.length)throw new Error(`Output size ${v.length} must be equal to ${c.length}.`);let w=[],$=[];for(let T=0;T<c.length;++T){if(!Number.isInteger(v[T])||v[T]<-3||v[T]>=u)throw new Error(`Invalid output index: ${v[T]}`);if(v[T]===-3)continue;let A=v[T]===-1,D=v[T]===-2,B=A||D?o(c[T].dataType,c[T].dims):s(v[T],c[T].dataType,c[T].dims);if(w.push(B),B.data===0)continue;let P=this.gpuDataManager.get(B.data);if(!P)throw new Error(`no GPU data for output: ${B.data}`);if(A&&this.temporaryData.push(P),D){let V=this.kernelPersistentData.get(this.currentKernelId);V||(V=[],this.kernelPersistentData.set(this.currentKernelId,V)),V.push(P)}$.push(P)}if(d.length!==r.length||$.length!==w.length){if($.length===0)return cr(e.name),w;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let S;if(m){let T=0,A=[];m.forEach(V=>{let I=typeof V.data=="number"?[V.data]:V.data;if(I.length===0)return;let Y=V.type===10?2:4,te,me;V.type===10?(me=I.length>4?16:I.length>2?8:I.length*Y,te=I.length>4?16:Y*I.length):(me=I.length<=2?I.length*Y:16,te=16),T=Math.ceil(T/me)*me,A.push(T);let de=V.type===10?8:4;T+=I.length>4?Math.ceil(I.length/de)*te:I.length*Y});let D=16;T=Math.ceil(T/D)*D;let B=new ArrayBuffer(T);m.forEach((V,I)=>{let Y=A[I],te=typeof V.data=="number"?[V.data]:V.data;if(V.type===6)new Int32Array(B,Y,te.length).set(te);else if(V.type===12)new Uint32Array(B,Y,te.length).set(te);else if(V.type===10)new Uint16Array(B,Y,te.length).set(te);else if(V.type===1)new Float32Array(B,Y,te.length).set(te);else throw new Error(`Unsupported uniform type: ${bn(V.type)}`)});let P=this.gpuDataManager.create(T,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,B,0,T),this.gpuDataManager.release(P.id),S={offset:0,size:T,buffer:P.buffer}}let b=this.programManager.normalizeDispatchGroupSize(f),C=b[1]===1&&b[2]===1,N=M0(e,r,C),E=this.programManager.getArtifact(N);if(E||(E=this.programManager.build(e,b),this.programManager.setArtifact(N,E),Ge("info",()=>`[artifact] key: ${N}, programName: ${e.name}`)),m&&E.uniformVariablesInfo){if(m.length!==E.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${E.uniformVariablesInfo.length}, got ${m.length} in program "${E.programInfo.name}".`);for(let T=0;T<m.length;T++){let A=m[T],D=A.type,B=typeof A.data=="number"?1:A.data.length,[P,V]=E.uniformVariablesInfo[T];if(D!==P||B!==V)throw new Error(`Uniform variable ${T} mismatch: expect type ${P} with size ${V}, got type ${D} with size ${B} in program "${E.programInfo.name}".`)}}if(Ge("info",()=>`[ProgramManager] run "${e.name}" (key=${N}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let T={kernelId:this.currentKernelId,programName:E.programInfo.name,inputTensorViews:r,outputTensorViews:w};this.pendingKernels.push(T),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(T)}return this.programManager.run(E,d,$,b,S),cr(e.name),w}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=m_.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let u={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,u)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,u=s.kernelName,d=s.kernelEntry,c=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${u}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),Ge("info",()=>`[WebGPU] Start to run kernel "[${o}] ${u}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),d(r,c[1]),0}catch(m){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${u}" failed. ${m}`)),1}finally{f&&i.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${o}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let u=o.get(r),d=this.gpuDataManager.registerExternalBuffer(i,s,u);return o.set(r,[d,i]),d}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Ep(this,e,r);return ef(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ge("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ge("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ge("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),u=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(u.computePipeline),o.setBindGroup(0,u.bindGroup),o.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),w_={};as(w_,{init:()=>__});var kl,P0,__,ox=ae(()=>{"use strict";ze(),Sn(),Me(),h$(),kl=class $_{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(K.size(r)!==K.size(this.dims))throw new Error("Invalid new shape");return new $_(this.module,this.dataType,this.data,r)}},P0=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo,this.deviceLimits=r.device.limits;let s=e.PTR_SIZE,o=i/e.PTR_SIZE,u=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*o++,u));let d=Number(e.getValue(s*o++,u));this.outputCount=Number(e.getValue(s*o++,u)),this.customDataOffset=Number(e.getValue(s*o++,"*")),this.customDataSize=Number(e.getValue(s*o++,u));let c=[];for(let f=0;f<d;f++){let m=Number(e.getValue(s*o++,u)),v=Number(e.getValue(s*o++,"*")),w=Number(e.getValue(s*o++,u)),$=[];for(let S=0;S<w;S++)$.push(Number(e.getValue(s*o++,u)));c.push(new kl(e,m,v,$))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,r){var d;let i=((d=r==null?void 0:r.inputs)==null?void 0:d.map(c=>typeof c=="number"?this.inputs[c]:c))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(c,f,m)=>new kl(this.module,f,this.output(c,m),m),u=(c,f)=>{let m=Gi(c,f);if(!m)throw new Error(`Unsupported data type: ${c}`);let v=m>0?this.backend.gpuDataManager.create(m).id:0;return new kl(this.module,c,v,f)};return this.backend.run(e,i,s,o,u,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.PTR_SIZE,o=s===4?"i32":"i64",u=this.module.stackAlloc((1+r.length)*s);this.module.setValue(u,r.length,o);for(let d=0;d<r.length;d++)this.module.setValue(u+s*(d+1),r[d],o);return this.module._JsepOutput(this.opKernelContext,e,u)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},__=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let u=(sx(),Vo(y_)).WebGpuBackend,d=new u;await d.initialize(i,s),o("webgpu",[d,c=>d.alloc(Number(c)),c=>d.free(c),(c,f,m,v=!1)=>{if(v)Ge("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(m)}`),d.memcpy(Number(c),Number(f));else{Ge("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(m)}`);let w=r.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(m));d.upload(Number(f),w)}},async(c,f,m)=>{Ge("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${m}`),await d.download(Number(c),()=>r.HEAPU8.subarray(Number(f)>>>0,Number(f+m)>>>0))},(c,f,m)=>d.createKernel(c,Number(f),m,r.UTF8ToString(r._JsepGetNodeName(Number(f)))),c=>d.releaseKernel(c),(c,f,m,v)=>{Ge("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${c}, contextDataOffset=${f}`);let w=new P0(r,d,Number(f));return d.computeKernel(Number(c),w,v)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new Cv(i);o("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,c,f,m,v)=>u.ensureTensor(d,c,f,m,v),(d,c)=>{u.uploadTensor(d,c)},async(d,c)=>u.downloadTensor(d,c),(d,c)=>u.registerMLContext(d,c),!!i.trace])}}}),L0,pf,ff,ui,U0,wp,Pl,hf,mf,Do,j0,Wi,x_,b_,_p,gf,yf,vf,S_=ae(()=>{"use strict";fr(),c$(),p$(),ze(),Ji(),Qp(),Xp(),L0=(e,r)=>{rt()._OrtInit(e,r)!==0&&Qe("Can't initialize onnxruntime.")},pf=async e=>{L0(e.wasm.numThreads,Al(e.logLevel))},ff=async(e,r)=>{var s,o;(o=(s=rt()).asyncInit)==null||o.call(s);let i=e.webgpu.adapter;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(r==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(ox(),Vo(w_)).init;r==="webgpu"&&await u("webgpu",rt(),e,i),r==="webnn"&&await u("webnn",rt(),e)}},ui=new Map,U0=e=>{let r=rt(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetInputOutputCount(e,o,o+s)!==0&&Qe("Can't get session input/output count.");let u=s===4?"i32":"i64";return[Number(r.getValue(o,u)),Number(r.getValue(o+s,u))]}finally{r.stackRestore(i)}},wp=(e,r)=>{let i=rt(),s=i.stackSave(),o=0;try{let u=i.PTR_SIZE,d=i.stackAlloc(2*u);i._OrtGetInputOutputMetadata(e,r,d,d+u)!==0&&Qe("Can't get session input/output metadata.");let c=Number(i.getValue(d,"*"));o=Number(i.getValue(d+u,"*"));let f=i.HEAP32[o/4];if(f===0)return[c,0];let m=i.HEAPU32[o/4+1],v=[];for(let w=0;w<m;w++){let $=Number(i.getValue(o+8+w*u,"*"));v.push($!==0?i.UTF8ToString($):Number(i.getValue(o+8+(w+m)*u,"*")))}return[c,f,v]}finally{i.stackRestore(s),o!==0&&i._OrtFree(o)}},Pl=e=>{let r=rt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},hf=async(e,r)=>{var w,$,S,b;let i,s,o=rt();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=Pl(e);let u=0,d=0,c=0,f=[],m=[],v=[];try{if([d,f]=await xv(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let I=[];for(let Y of r.externalData){let te=typeof Y=="string"?Y:Y.path,me=typeof Y=="string"?Y:Y.data;I.push(Ul(me).then(de=>{o.mountExternalData(te,de)}))}await Promise.all(I)}for(let I of(r==null?void 0:r.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof I!="string"){let Y=I,te=Y==null?void 0:Y.context,me=Y==null?void 0:Y.gpuDevice,de=Y==null?void 0:Y.deviceType,pe=Y==null?void 0:Y.powerPreference;te?o.currentContext=te:me?o.currentContext=await o.webnnCreateMLContext(me):o.currentContext=await o.webnnCreateMLContext({deviceType:de,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}u=await o._OrtCreateSession(i,s,d),(w=o.webgpuOnCreateSession)==null||w.call(o,u),u===0&&Qe("Can't create a session."),($=o.jsepOnCreateSession)==null||$.call(o),o.currentContext&&(o.webnnRegisterMLContext(u,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[C,N]=U0(u),E=!!(r!=null&&r.enableGraphCapture),T=[],A=[],D=[],B=[],P=[];for(let I=0;I<C;I++){let[Y,te,me]=wp(u,I);Y===0&&Qe("Can't get an input name."),m.push(Y);let de=o.UTF8ToString(Y);T.push(de),D.push(te===0?{name:de,isTensor:!1}:{name:de,isTensor:!0,type:bn(te),shape:me})}for(let I=0;I<N;I++){let[Y,te,me]=wp(u,I+C);Y===0&&Qe("Can't get an output name."),v.push(Y);let de=o.UTF8ToString(Y);A.push(de),B.push(te===0?{name:de,isTensor:!1}:{name:de,isTensor:!0,type:bn(te),shape:me});{if(E&&(r==null?void 0:r.preferredOutputLocation)===void 0){P.push("gpu-buffer");continue}let pe=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((S=r==null?void 0:r.preferredOutputLocation)==null?void 0:S[de])??"cpu",G=o.webnnIsGraphOutput;if(pe==="cpu"&&G&&G(u,de)){P.push("ml-tensor-cpu-output");continue}if(pe!=="cpu"&&pe!=="cpu-pinned"&&pe!=="gpu-buffer"&&pe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${pe}.`);if(E&&pe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${pe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);P.push(pe)}}let V=null;return P.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(c=o._OrtCreateBinding(u),c===0&&Qe("Can't create IO binding."),V={handle:c,outputPreferredLocations:P,outputPreferredLocationsEncoded:P.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>kp(I))}),ui.set(u,[u,m,v,V,E,!1]),[u,T,A,D,B]}catch(C){throw m.forEach(N=>o._OrtFree(N)),v.forEach(N=>o._OrtFree(N)),c!==0&&o._OrtReleaseBinding(c)!==0&&Qe("Can't release IO binding."),u!==0&&o._OrtReleaseSession(u)!==0&&Qe("Can't release session."),C}finally{o._free(i),d!==0&&o._OrtReleaseSessionOptions(d)!==0&&Qe("Can't release session options."),f.forEach(C=>o._free(C)),(b=o.unmountExternalData)==null||b.call(o)}},mf=e=>{var f,m,v;let r=rt(),i=ui.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,u,d,c]=i;d&&(c&&r._OrtClearBoundOutputs(d.handle)!==0&&Qe("Can't clear bound outputs."),r._OrtReleaseBinding(d.handle)!==0&&Qe("Can't release IO binding.")),(f=r.jsepOnReleaseSession)==null||f.call(r,e),(m=r.webnnOnReleaseSession)==null||m.call(r,e),(v=r.webgpuOnReleaseSession)==null||v.call(r,e),o.forEach(w=>r._OrtFree(w)),u.forEach(w=>r._OrtFree(w)),r._OrtReleaseSession(s)!==0&&Qe("Can't release session."),ui.delete(e)},Do=new Map,j0=1,Wi=new Map,x_=e=>{let r=rt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{r.HEAPU8.set(e,i);let s=r._OrtCreateLoraAdapter(i,e.byteLength);s===0&&Qe("Can't create a LoRA adapter.");let o=j0++;return Do.set(o,s),o}finally{r._free(i)}},b_=e=>{let r=rt(),i=Do.get(e);if(i===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(Wi.has(e))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);r._OrtReleaseLoraAdapter(i)!==0&&Qe("Can't release LoRA adapter."),Do.delete(e)},_p=async(e,r,i,s,o,u,d=!1)=>{if(!e){r.push(0);return}let c=rt(),f=c.PTR_SIZE,m=e[0],v=e[1],w=e[3],$=w,S,b;if(m==="string"&&(w==="gpu-buffer"||w==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&w!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(w==="gpu-buffer"){let E=e[2].gpuBuffer;b=Gi(Hi(m),v);{let T=c.jsepRegisterBuffer;if(!T)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');S=T(s,u,E,b)}}else if(w==="ml-tensor"){let E=e[2].mlTensor;b=Gi(Hi(m),v);let T=c.webnnRegisterMLTensor;if(!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');S=T(s,E,Hi(m),v)}else{let E=e[2];if(Array.isArray(E)){b=f*E.length,S=c._malloc(b),i.push(S);for(let T=0;T<E.length;T++){if(typeof E[T]!="string")throw new TypeError(`tensor data at index ${T} is not a string`);c.setValue(S+T*f,Wr(E[T],i),"*")}}else{let T=c.webnnIsGraphInput,A=c.webnnIsGraphOutput;if(m!=="string"&&T&&A){let D=c.UTF8ToString(o);if(T(s,D)||A(s,D)){let B=Hi(m);b=Gi(B,v),$="ml-tensor";let P=c.webnnCreateTemporaryTensor,V=c.webnnUploadTensor;if(!P||!V)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await P(s,B,v);V(I,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),S=I}else b=E.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,b),S)}else b=E.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,b),S)}}let C=c.stackSave(),N=c.stackAlloc(4*v.length);try{v.forEach((T,A)=>c.setValue(N+A*f,T,f===4?"i32":"i64"));let E=c._OrtCreateTensor(Hi(m),S,b,N,v.length,kp($));E===0&&Qe(`Can't create tensor for input/output. session=${s}, index=${u}.`),r.push(E)}finally{c.stackRestore(C)}},gf=async(e,r,i,s,o,u,d=[])=>{var G,he,ye,ge;let c=rt(),f=c.PTR_SIZE,m=ui.get(e);if(!m)throw new Error(`cannot run inference. invalid session id: ${e}`);let v=m[0],w=m[1],$=m[2],S=m[3],b=m[4],C=m[5],N=[];if(d.length>0){if(S)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let ee of d){let re=Do.get(ee);if(re===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${ee}`);N.push(re)}}let E=r.length,T=s.length,A=0,D=[],B=[],P=[],V=[],I=[],Y=c.stackSave(),te=c.stackAlloc(E*f),me=c.stackAlloc(E*f),de=c.stackAlloc(T*f),pe=c.stackAlloc(T*f);try{for(let O of d)Wi.set(O,(Wi.get(O)??0)+1);[A,D]=$v(u,N),Ki("wasm prepareInputOutputTensor");for(let O=0;O<E;O++)await _p(i[O],B,V,e,w[r[O]],r[O],b);for(let O=0;O<T;O++)await _p(o[O],P,V,e,$[s[O]],E+s[O],b);Qi("wasm prepareInputOutputTensor");for(let O=0;O<E;O++)c.setValue(te+O*f,B[O],"*"),c.setValue(me+O*f,w[r[O]],"*");for(let O=0;O<T;O++)c.setValue(de+O*f,P[O],"*"),c.setValue(pe+O*f,$[s[O]],"*");if(S&&!C){let{handle:O,outputPreferredLocations:F,outputPreferredLocationsEncoded:ne}=S;if(w.length!==E)throw new Error(`input count from feeds (${E}) is expected to be always equal to model's input count (${w.length}).`);Ki("wasm bindInputsOutputs");for(let X=0;X<E;X++){let ve=r[X];await c._OrtBindInput(O,w[ve],B[X])!==0&&Qe(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<T;X++){let ve=s[X];(G=o[X])!=null&&G[3]?(I.push(P[X]),c._OrtBindOutput(O,$[ve],P[X],0)!==0&&Qe(`Can't bind pre-allocated output[${X}] for session=${e}.`)):c._OrtBindOutput(O,$[ve],0,ne[ve])!==0&&Qe(`Can't bind output[${X}] to ${F[X]} for session=${e}.`)}Qi("wasm bindInputsOutputs"),ui.set(e,[v,w,$,S,b,!0])}(he=c.jsepOnRunStart)==null||he.call(c,v),(ye=c.webnnOnRunStart)==null||ye.call(c,v);let ee;S?ee=await c._OrtRunWithBinding(v,S.handle,T,de,A):ee=await c._OrtRun(v,me,te,E,pe,T,de,A),ee!==0&&Qe("failed to call OrtRun().");let re=[],se=[];Ki("wasm ProcessOutputTensor");for(let O=0;O<T;O++){let F=Number(c.getValue(de+O*f,"*"));if(F===P[O]||I.includes(P[O])){re.push(o[O]),F!==P[O]&&c._OrtReleaseTensor(F)!==0&&Qe("Can't release tensor.");continue}let ne=c.stackSave(),X=c.stackAlloc(4*f),ve=!1,Ee,Ie=0;try{c._OrtGetTensorData(F,X,X+f,X+2*f,X+3*f)!==0&&Qe(`Can't access output tensor data on index ${O}.`);let Be=f===4?"i32":"i64",De=Number(c.getValue(X,Be));Ie=c.getValue(X+f,"*");let ft=c.getValue(X+f*2,"*"),Qt=Number(c.getValue(X+f*3,Be)),Mt=[];for(let je=0;je<Qt;je++)Mt.push(Number(c.getValue(ft+je*f,Be)));c._OrtFree(ft)!==0&&Qe("Can't free memory for tensor dims.");let Ne=Mt.reduce((je,Fe)=>je*Fe,1);Ee=bn(De);let $e=S==null?void 0:S.outputPreferredLocations[s[O]];if(Ee==="string"){if($e==="gpu-buffer"||$e==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let je=[];for(let Fe=0;Fe<Ne;Fe++){let ot=c.getValue(Ie+Fe*f,"*"),kt=c.getValue(Ie+(Fe+1)*f,"*"),Zt=Fe===Ne-1?void 0:kt-ot;je.push(c.UTF8ToString(ot,Zt))}re.push([Ee,Mt,je,"cpu"])}else if($e==="gpu-buffer"&&Ne>0){let je=c.jsepGetBuffer;if(!je)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Fe=je(Ie),ot=Gi(De,Ne);if(ot===void 0||!Zp(Ee))throw new Error(`Unsupported data type: ${Ee}`);ve=!0,re.push([Ee,Mt,{gpuBuffer:Fe,download:c.jsepCreateDownloader(Fe,ot,Ee),dispose:()=>{c._OrtReleaseTensor(F)!==0&&Qe("Can't release tensor.")}},"gpu-buffer"])}else if($e==="ml-tensor"&&Ne>0){let je=c.webnnEnsureTensor,Fe=c.webnnIsGraphInputOutputTypeSupported;if(!je||!Fe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Gi(De,Ne)===void 0||!Yp(Ee))throw new Error(`Unsupported data type: ${Ee}`);if(!Fe(e,Ee,!1))throw new Error(`preferredLocation "ml-tensor" for ${Ee} output is not supported by current WebNN Context.`);let ot=await je(e,Ie,De,Mt,!1);ve=!0,re.push([Ee,Mt,{mlTensor:ot,download:c.webnnCreateMLTensorDownloader(Ie,Ee),dispose:()=>{c.webnnReleaseTensorId(Ie),c._OrtReleaseTensor(F)}},"ml-tensor"])}else if($e==="ml-tensor-cpu-output"&&Ne>0){let je=c.webnnCreateMLTensorDownloader(Ie,Ee)(),Fe=re.length;ve=!0,se.push((async()=>{let ot=[Fe,await je];return c.webnnReleaseTensorId(Ie),c._OrtReleaseTensor(F),ot})()),re.push([Ee,Mt,[],"cpu"])}else{let je=Ll(Ee),Fe=new je(Ne);new Uint8Array(Fe.buffer,Fe.byteOffset,Fe.byteLength).set(c.HEAPU8.subarray(Ie,Ie+Fe.byteLength)),re.push([Ee,Mt,Fe,"cpu"])}}finally{c.stackRestore(ne),Ee==="string"&&Ie&&c._free(Ie),ve||c._OrtReleaseTensor(F)}}S&&!b&&(c._OrtClearBoundOutputs(S.handle)!==0&&Qe("Can't clear bound outputs."),ui.set(e,[v,w,$,S,b,!1]));for(let[O,F]of await Promise.all(se))re[O][2]=F;return Qi("wasm ProcessOutputTensor"),re}finally{(ge=c.webnnOnRunEnd)==null||ge.call(c,v),c.stackRestore(Y),B.forEach(ee=>c._OrtReleaseTensor(ee)),P.forEach(ee=>c._OrtReleaseTensor(ee)),V.forEach(ee=>c._free(ee)),A!==0&&c._OrtReleaseRunOptions(A),D.forEach(ee=>c._free(ee));for(let ee of d){let re=Wi.get(ee)-1;re===0?Wi.delete(ee):Wi.set(ee,re)}}},yf=e=>{let r=rt(),i=ui.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&Qe("Can't get an profile file name."),r._OrtFree(o)},vf=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),rn,nr,es,Mo,Bo,El,$p,Tl,Vi,Fi,W0,k_,E_,T_,C_,I_,z_,N_,O_,A_,wf=ae(()=>{"use strict";fr(),S_(),Ji(),Gp(),Xp(),rn=()=>!!lt.wasm.proxy&&typeof document<"u",es=!1,Mo=!1,Bo=!1,Tl=new Map,Vi=(e,r)=>{let i=Tl.get(e);i?i.push(r):Tl.set(e,[r])},Fi=()=>{if(es||!Mo||Bo||!nr)throw new Error("worker not ready")},W0=e=>{switch(e.data.type){case"init-wasm":es=!1,e.data.err?(Bo=!0,$p[1](e.data.err)):(Mo=!0,$p[0]()),El&&(URL.revokeObjectURL(El),El=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Tl.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}default:}},k_=async()=>{if(!Mo){if(es)throw new Error("multiple calls to 'initWasm()' detected.");if(Bo)throw new Error("previous call to 'initWasm()' failed.");if(es=!0,rn())return new Promise((e,r)=>{nr==null||nr.terminate(),wv().then(([i,s])=>{try{nr=s,nr.onerror=u=>r(u),nr.onmessage=W0,$p=[e,r];let o={type:"init-wasm",in:lt};!o.in.wasm.wasmPaths&&(i||Sp)&&(o.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href}),nr.postMessage(o),El=i}catch(o){r(o)}},r)});try{await Kp(lt.wasm),await pf(lt),Mo=!0}catch(e){throw Bo=!0,e}finally{es=!1}}},E_=async e=>{if(rn())return Fi(),new Promise((r,i)=>{Vi("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:lt}};nr.postMessage(s)});await ff(lt,e)},T_=async e=>rn()?(Fi(),new Promise((r,i)=>{Vi("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};nr.postMessage(s,[e.buffer])})):Pl(e),C_=async(e,r)=>{if(rn()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Fi(),new Promise((i,s)=>{Vi("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),nr.postMessage(o,u)})}else return hf(e,r)},I_=async e=>{if(rn())return Fi(),new Promise((r,i)=>{Vi("release",[r,i]);let s={type:"release",in:e};nr.postMessage(s)});mf(e)},z_=async e=>{if(rn())throw new Error("LoRA adapter is not supported for proxy.");let r=typeof e=="string"?await Ul(e):e;return x_(r)},N_=async e=>{if(rn())throw new Error("LoRA adapter is not supported for proxy.");b_(e)},O_=async(e,r,i,s,o,u,d)=>{if(rn()){if(d.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Fi(),new Promise((c,f)=>{Vi("run",[c,f]);let m=i,v={type:"run",in:{sessionId:e,inputIndices:r,inputs:m,outputIndices:s,options:u}};nr.postMessage(v,vf(m))})}else return gf(e,r,i,s,o,u,d)},A_=async e=>{if(rn())return Fi(),new Promise((r,i)=>{Vi("end-profiling",[r,i]);let s={type:"end-profiling",in:e};nr.postMessage(s)});yf(e)}}),_f,R_=ae(()=>{"use strict";fr(),wf(),_f=class{async loadAdapter(e){Sr(),this.adapterId=await z_(e),cr()}async dispose(){return N_(this.adapterId)}}}),xp,V0,D_,ux=ae(()=>{"use strict";fr(),R_(),wf(),ze(),Hp(),Xp(),xp=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},V0=e=>{switch(e[3]){case"cpu":return new Vr(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!Zp(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return Vr.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!Yp(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return Vr.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},D_=class{async fetchModelAndCopyToWasmMemory(e){return T_(await Ul(e))}async loadModel(e,r){Sr();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await C_(i,r),cr()}async dispose(){return I_(this.sessionId)}async run(e,r,i,s=[]){Sr();let o=s.map(S=>{if(!(S instanceof _f))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return S.adapterId}),u=[],d=[];Object.entries(e).forEach(S=>{let b=S[0],C=S[1],N=this.inputNames.indexOf(b);if(N===-1)throw new Error(`invalid input '${b}'`);u.push(C),d.push(N)});let c=[],f=[];Object.entries(r).forEach(S=>{let b=S[0],C=S[1],N=this.outputNames.indexOf(b);if(N===-1)throw new Error(`invalid output '${b}'`);c.push(C),f.push(N)});let m=u.map((S,b)=>xp(S,()=>`input "${this.inputNames[d[b]]}"`)),v=c.map((S,b)=>S?xp(S,()=>`output "${this.outputNames[f[b]]}"`):null),w=await O_(this.sessionId,d,m,f,v,i,o),$={};for(let S=0;S<w.length;S++)$[this.outputNames[f[S]]]=c[S]??V0(w[S]);return cr(),$}startProfiling(){}endProfiling(){A_(this.sessionId)}}}),M_,lx=ae(()=>{"use strict";M_=e=>{if(e!=null&&e.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),B_={};as(B_,{OnnxruntimeWebAssemblyBackend:()=>Pp,initializeFlags:()=>Bp,wasmBackend:()=>P_});var Bp,Pp,P_,dx=ae(()=>{"use strict";fr(),R_(),wf(),ux(),lx(),Bp=()=>{(typeof lt.wasm.initTimeout!="number"||lt.wasm.initTimeout<0)&&(lt.wasm.initTimeout=0);let e=lt.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),lt.wasm.simd=!1),typeof lt.wasm.proxy!="boolean"&&(lt.wasm.proxy=!1),typeof lt.wasm.trace!="boolean"&&(lt.wasm.trace=!1),typeof lt.wasm.numThreads!="number"||!Number.isInteger(lt.wasm.numThreads)||lt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)lt.wasm.numThreads=1;else{let r=typeof navigator>"u"?H2("node:os").cpus().length:navigator.hardwareConcurrency;lt.wasm.numThreads=Math.min(4,Math.ceil((r||1)/2))}},Pp=class{async init(e){Bp(),await k_(),await E_(e)}async createInferenceSessionHandler(e,r){M_(r);let i=new D_;return await i.loadModel(e,r),i}async createLoraAdapterHandler(e){let r=new _f;return await r.loadAdapter(e),r}},P_=new Pp});fr();fr();fr();var cx="1.31.1";{let e=(dx(),Vo(B_)).wasmBackend;ts("webgpu",e,5),ts("webnn",e,5),ts("cpu",e,10),ts("wasm",e,10)}Object.defineProperty(lt.versions,"web",{value:cx,enumerable:!0});/**
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
 */const px=8;async function fx(e=px){const r={};for(let i=1;i<=e;i++)try{r[String(i)]=await qp.create(`/model_${i}.onnx`)}catch{console.warn(`Modelo /model_${i}.onnx não encontrado ou ainda não treinado.`)}return r}async function L_(e,r,i=null,s=new Set){const o=new Vr("float32",Float32Array.from(r),[1,r.length]),u=await e.run({state:o}),d=Array.from(u.q_values.data),c=d.length,f=r.join("");if(c>1){i!==null&&i>=0&&i<c&&(d[i]=-1/0);const w=[...d];for(let $=0;$<c;$++)s.has(`${f}:${$}`)&&(w[$]=-1/0);if(Math.max(...w)>-1/0)for(let $=0;$<c;$++)d[$]=w[$]}let m=0,v=-1/0;for(let w=0;w<c;w++)d[w]>v&&(v=d[w],m=w);return{action:m,qValues:d}}async function hx(e,r,i,s=4){if(!e)return s;let o=[...r],u=null;const d=new Set,c=o.length*2;for(let f=1;f<=c;f++){if(zl(o))return f-1;const m=o.join(""),{action:v}=await L_(e,o,u,d);if(d.add(`${m}:${v}`),u=v,o=Wo(o,i,v),zl(o))return f}return s}function U_(){const e=new Date,r=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${r}-${i}-${s}`}function mx(e=U_()){const r=new Date("2026-01-01T00:00:00"),i=new Date(`${e}T00:00:00`),s=Math.floor((i-r)/(1e3*60*60*24));return Math.max(1,s+1)}function F0(e){let r=2166136261;for(let s=0;s<e.length;s++)r^=e.charCodeAt(s),r=Math.imul(r,16777619);let i=r>>>0;return function(){i|=0,i=i+1831565813|0;let o=Math.imul(i^i>>>15,1|i);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}const q0=[5,6,7,8],H0=8,j_="pyramidle_stats_v1",G0="pyramidle_daily_",bp=[{id:"slide-game",label:"Jogo"},{id:"slide-math",label:"01 Tabuleiro"},{id:"slide-ai",label:"02 Resolvedor"}];function gx(){try{const e=localStorage.getItem(j_);if(e)return JSON.parse(e)}catch{}return{played:0,wins:0,currentStreak:0,maxStreak:0,lastWinDate:null}}function yx(){const e=nt.useMemo(()=>U_(),[]),r=nt.useMemo(()=>mx(e),[e]),[i,s]=nt.useState("daily"),[o,u]=nt.useState(5),[d,c]=nt.useState(null),[f,m]=nt.useState([]),[v,w]=nt.useState([]),[$,S]=nt.useState(0),[b,C]=nt.useState(4),[N,E]=nt.useState(!1),[T,A]=nt.useState(!1),[D,B]=nt.useState(null),[P,V]=nt.useState(!0),[I,Y]=nt.useState(0),[te,me]=nt.useState(()=>gx()),[de,pe]=nt.useState(()=>{try{const Ne=localStorage.getItem(`${G0}${e}`);return Ne?JSON.parse(Ne):null}catch{return null}}),[G,he]=nt.useState(!1),[ye,ge]=nt.useState(!1),ee=nt.useRef(null),re=nt.useRef(null),se=nt.useRef(new Set),O=q0[(r-1)%q0.length],F=i==="daily"?O:o,ne=nt.useMemo(()=>im(F,760,420),[F]);nt.useEffect(()=>{fx(H0).then(Ne=>c(Ne)).catch(Ne=>console.error("Erro ao carregar modelos ONNX:",Ne))},[]);const X=(Ne=i,$e=F,je=null)=>{E(!1),B(null),A(!1),re.current=null,se.current=new Set;const Fe=im($e,760,420),ot=Ne==="daily"?F0(`PYRAMIDLE-${e}-BASE-${$e}`):je?F0(je):Math.random,kt=Math.min(Fe.balls.length,$e+3),Zt=$e<=2?1:Math.min($e-1,7),{initialState:hr,optimalHintClicks:Bt}=W2(Fe.adjMatrix,ot,kt,Zt);m(hr),w(hr),S(0);const kn=d?d[String($e)]:null;hx(kn,hr,Fe.adjMatrix,Bt).then(pi=>C(pi))};nt.useEffect(()=>{X(i,F)},[i,F,d]);const ve=v.length>0&&zl(v);nt.useEffect(()=>{if(ve&&(E(!1),i==="daily"&&!de)){const Ne={clicks:$,usedAi:T,date:e};pe(Ne);try{localStorage.setItem(`${G0}${e}`,JSON.stringify(Ne))}catch{}me($e=>{const je=new Date;je.setDate(je.getDate()-1);const Fe=`${je.getFullYear()}-${String(je.getMonth()+1).padStart(2,"0")}-${String(je.getDate()).padStart(2,"0")}`,ot=$e.lastWinDate===Fe?$e.currentStreak+1:$e.lastWinDate===e?$e.currentStreak:1,kt={played:$e.played+1,wins:$e.wins+1,currentStreak:ot,maxStreak:Math.max($e.maxStreak,ot),lastWinDate:e};try{localStorage.setItem(j_,JSON.stringify(kt))}catch{}return kt}),setTimeout(()=>he(!0),600)}},[ve,i,de,$,T,e]),nt.useEffect(()=>{if(!N||ve)return;const Ne=d?d[String(F)]:null;if(!Ne){E(!1);return}const $e=setTimeout(async()=>{const je=v.join(""),{action:Fe}=await L_(Ne,v,re.current,se.current);se.current.add(`${je}:${Fe}`),re.current=Fe,B(Fe),w(ot=>Wo(ot,ne.adjMatrix,Fe)),S(ot=>ot+1)},500);return()=>clearTimeout($e)},[N,ve,v,d,F,ne]);const Ee=Ne=>{ve||N||(B(null),re.current=Ne,w($e=>Wo($e,ne.adjMatrix,Ne)),S($e=>$e+1))},Ie=()=>{E(!1),B(null),re.current=null,se.current=new Set,w(f),S(0)},Be=()=>{N?E(!1):(A(!0),re.current=null,se.current=new Set,E(!0))},De=Ne=>{var Fe;const $e=(Fe=bp[Ne])==null?void 0:Fe.id,je=document.getElementById($e);je&&(je.scrollIntoView({behavior:"smooth"}),Y(Ne))},ft=Ne=>{const $e=Ne.currentTarget,je=Math.round($e.scrollTop/$e.clientHeight);je!==I&&je>=0&&je<bp.length&&Y(je)},Qt=F<=H0&&!!(d&&d[String(F)]),Mt=v.reduce((Ne,$e)=>Ne+$e,0);return j.jsxs("div",{className:"snap-container",ref:ee,onScroll:ft,children:[j.jsx("aside",{className:"slide-dots","aria-label":"Navegação de seções",children:bp.map((Ne,$e)=>j.jsxs("button",{type:"button",className:`slide-dot-btn ${I===$e?"active":""}`,onClick:()=>De($e),title:Ne.label,children:[j.jsx("span",{className:"slide-dot-label",children:Ne.label}),j.jsx("span",{className:"slide-dot-indicator"})]},Ne.id))}),j.jsxs("section",{className:"snap-slide game-slide",id:"slide-game",children:[j.jsx(D2,{mode:i,setMode:s,challengeNumber:r,streak:te.currentStreak,onOpenHelp:()=>ge(!0),onOpenStats:()=>he(!0),onJumpToContext:()=>De(1)}),j.jsxs("main",{className:"main-container",children:[j.jsx(M2,{geometry:ne,state:v,onBallClick:Ee,lastAiAction:D,solving:N,solved:ve,showRadiusPreview:P}),j.jsx(B2,{mode:i,numBalls:F,onChangeNumBalls:Ne=>u(Ne),clicks:$,aiPar:b,blackCount:Mt,totalBalls:ne.balls.length,solving:N,solved:ve,canUseAi:Qt,onToggleSolve:Be,onReset:Ie,onNewRandomBoard:()=>X("free",F),showRadiusPreview:P,setShowRadiusPreview:V})]}),j.jsx("div",{className:"scroll-hint-bar",children:j.jsx("button",{type:"button",className:"scroll-down-btn",onClick:()=>De(1),children:"Entenda a matemática e o algoritmo de resolução ↓"})})]}),j.jsx(P2,{onBackToGame:()=>De(0)}),j.jsx(L2,{isOpen:G,onClose:()=>he(!1),stats:te,dailyResult:de,challengeNumber:r,aiPar:b}),j.jsx(U2,{isOpen:ye,onClose:()=>ge(!1),onJumpToContext:()=>De(1)})]})}R2.createRoot(document.getElementById("root")).render(j.jsx(C2.StrictMode,{children:j.jsx(yx,{})}));
