function T(e,t){return t.forEach(function(r){r&&typeof r!="string"&&!Array.isArray(r)&&Object.keys(r).forEach(function(o){if(o!=="default"&&!(o in e)){var u=Object.getOwnPropertyDescriptor(r,o);Object.defineProperty(e,o,u.get?u:{enumerable:!0,get:function(){return r[o]}})}})}),Object.freeze(e)}var Q=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var m={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),U=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),g=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=g&&e[g]||e["@@iterator"],typeof e=="function"?e:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function p(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||R}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function v(e,t,r){this.props=e,this.context=t,this.refs=$,this.updater=r||R}var S=v.prototype=new O;S.constructor=v;j(S,p.prototype);S.isPureReactComponent=!0;var k=Array.isArray,C=Object.prototype.hasOwnProperty,b={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var o,u={},c=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(c=""+t.key),t)C.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=t[o]);var f=arguments.length-2;if(f===1)u.children=r;else if(1<f){for(var i=Array(f),a=0;a<f;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in f=e.defaultProps,f)u[o]===void 0&&(u[o]=f[o]);return{$$typeof:y,type:e,key:c,ref:s,props:u,_owner:b.current}}function H(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function G(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var I=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G(""+e.key):t.toString(36)}function d(e,t,r,o,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case y:case A:s=!0}}if(s)return s=e,u=u(s),e=o===""?"."+E(s,0):o,k(u)?(r="",e!=null&&(r=e.replace(I,"$&/")+"/"),d(u,t,r,"",function(a){return a})):u!=null&&(w(u)&&(u=H(u,r+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(I,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=o===""?".":o+":",k(e))for(var f=0;f<e.length;f++){c=e[f];var i=o+E(c,f);s+=d(c,t,r,i,u)}else if(i=B(e),typeof i=="function")for(e=i.call(e),f=0;!(c=e.next()).done;)c=c.value,i=o+E(c,f++),s+=d(c,t,r,i,u);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,r){if(e==null)return e;var o=[],u=0;return d(e,o,"","",function(c){return t.call(r,c,u++)}),o}function W(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},h={transition:null},J={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:b};n.Children={map:_,forEach:function(e,t,r){_(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=p;n.Fragment=D;n.Profiler=F;n.PureComponent=v;n.StrictMode=V;n.Suspense=L;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=j({},e.props),u=e.key,c=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,s=b.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)C.call(t,i)&&!P.hasOwnProperty(i)&&(o[i]=t[i]===void 0&&f!==void 0?f[i]:t[i])}var i=arguments.length-2;if(i===1)o.children=r;else if(1<i){f=Array(i);for(var a=0;a<i;a++)f[a]=arguments[a+2];o.children=f}return{$$typeof:y,type:e.type,key:u,ref:c,props:o,_owner:s}};n.createContext=function(e){return e={$$typeof:U,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e};n.createElement=x;n.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:q,render:e}};n.isValidElement=w;n.lazy=function(e){return{$$typeof:z,_payload:{_status:-1,_result:e},_init:W}};n.memo=function(e,t){return{$$typeof:N,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.2.0";m.exports=n;var K=m.exports,X=Object.freeze(T({__proto__:null,[Symbol.toStringTag]:"Module",default:K},[m.exports]));export{X as R,K as a,Q as c,Y as g,m as r};
