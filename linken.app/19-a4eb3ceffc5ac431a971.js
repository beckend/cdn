(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{432:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));const r=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),s=Symbol("Comlink.releaseProxy"),o=new WeakSet,i=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return function e(t,n=self){n.addEventListener("message",(function a(s){if(!s||!s.data)return;const{id:i,type:u,path:p}=Object.assign({path:[]},s.data),l=(s.data.argumentList||[]).map(m);let d;try{const n=p.slice(0,-1).reduce((e,t)=>e[t],t),a=p.reduce((e,t)=>e[t],t);switch(u){case 0:d=a;break;case 1:n[p.slice(-1)[0]]=m(s.data.value),d=!0;break;case 2:d=a.apply(n,l);break;case 3:d=function(e){return Object.assign(e,{[r]:!0})}(new a(...l));break;case 4:{const{port1:n,port2:r}=new MessageChannel;e(t,r),d=function(e,t){return f.set(e,t),e}(n,[n])}break;case 5:d=void 0}}catch(e){d=e,o.add(e)}Promise.resolve(d).catch(e=>(o.add(e),e)).then(e=>{const[t,r]=h(e);n.postMessage(Object.assign(Object.assign({},t),{id:i}),r),5===u&&(n.removeEventListener("message",a),c(n))})})),n.start&&n.start()}(e,t),[n,[n]]},deserialize:e=>(e.start(),u(e))}],["throw",{canHandle:e=>o.has(e),serialize(e){const t=e instanceof Error;let n=e;return t&&(n={isError:t,message:e.message,stack:e.stack}),[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e,t){return function e(t,n=[],r=function(){}){let o=!1;const i=new Proxy(r,{get(r,a){if(p(o),a===s)return()=>g(t,{type:5,path:n.map(e=>e.toString())}).then(()=>{c(t),o=!0});if("then"===a){if(0===n.length)return{then:()=>i};const e=g(t,{type:0,path:n.map(e=>e.toString())}).then(m);return e.then.bind(e)}return e(t,[...n,a])},set(e,r,a){p(o);const[s,i]=h(a);return g(t,{type:1,path:[...n,r].map(e=>e.toString()),value:s},i).then(m)},apply(r,s,i){p(o);const c=n[n.length-1];if(c===a)return g(t,{type:4}).then(m);if("bind"===c)return e(t,n.slice(0,-1));const[u,l]=d(i);return g(t,{type:2,path:n.map(e=>e.toString()),argumentList:u},l).then(m)},construct(e,r){p(o);const[a,s]=d(r);return g(t,{type:3,path:n.map(e=>e.toString()),argumentList:a},s).then(m)}});return i}(e,[],t)}function p(e){if(e)throw new Error("Proxy has been released and is not useable")}function l(e){return Array.prototype.concat.apply([],e)}function d(e){const t=e.map(h);return[t.map(e=>e[0]),l(t.map(e=>e[1]))]}const f=new WeakMap;function h(e){for(const[t,n]of i)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:3,name:t,value:r},a]}return[{type:0,value:e},f.get(e)||[]]}function m(e){switch(e.type){case 3:return i.get(e.name).deserialize(e.value);case 0:return e.value}}function g(e,t,n){return new Promise(r=>{const a=function(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}();e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}}}]);