const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardView-2xnZ1EWg.js","assets/vendor-zB6w3uSG.js","assets/Modal-DPFR0SQK.js","assets/Card-B5__snbX.js","assets/StatusBanner-D37UXxYv.js","assets/utils-DbF2Uwnc.js","assets/ChantierDetailView-BhuvaDT9.js","assets/SettingsView-CfRDCiau.js","assets/TrashView-Dh294I0O.js"])))=>i.map(i=>d[i]);
var yc=Object.defineProperty;var vc=(n,e,t)=>e in n?yc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Gi=(n,e,t)=>vc(n,typeof e!="symbol"?e+"":e,t);import{r as F,a as wc,R as ee,C as Ic,A as Ec,b as Cc,c as ro}from"./vendor-zB6w3uSG.js";import{D as se,L as H,m as an,g as os}from"./utils-DbF2Uwnc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Tc="modulepreload",Sc=function(n){return"/"+n},zi={},Vn=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=Sc(c),c in zi)return;zi[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Tc,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};var oo={exports:{}},Hn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=F,kc=Symbol.for("react.element"),Nc=Symbol.for("react.fragment"),Rc=Object.prototype.hasOwnProperty,Ac=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function ao(n,e,t){var s,i={},r=null,o=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Rc.call(e,s)&&!Pc.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:kc,type:n,key:r,ref:o,props:i,_owner:Ac.current}}Hn.Fragment=Nc;Hn.jsx=ao;Hn.jsxs=ao;oo.exports=Hn;var v=oo.exports,co,qi=wc;co=qi.createRoot,qi.hydrateRoot;const Oc=(...n)=>n.filter(Boolean).join(" "),Ki=({size:n="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12"};return ee.createElement("div",{className:Oc("animate-spin rounded-full border-2 border-brand-600 border-t-transparent",t[n],e)})},Dc=()=>{};var Yi={};/**
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
 */const lo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(n,e){if(!n)throw gt(e)},gt=function(n){return new Error("Firebase Database ("+lo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const ho=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ys={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let u=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(u=64)),s.push(t[d],t[h],t[u],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ho(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new Lc;const u=r<<2|a>>4;if(s.push(u),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const m=l<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uo=function(n){const e=ho(n);return Ys.encodeByteArray(e,!0)},yn=function(n){return uo(n).replace(/\./g,"")},vn=function(n){try{return Ys.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mc(n){return fo(void 0,n)}function fo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Fc(t)||(n[t]=fo(n[t],e[t]));return n}function Fc(n){return n!=="__proto__"}/**
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
 */function Uc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wc=()=>Uc().__FIREBASE_DEFAULTS__,Bc=()=>{if(typeof process>"u"||typeof Yi>"u")return;const n=Yi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vn(n[1]);return e&&JSON.parse(e)},Qs=()=>{try{return Dc()||Wc()||Bc()||Vc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},po=n=>{var e,t;return(t=(e=Qs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Hc=n=>{const e=po(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},_o=()=>{var n;return(n=Qs())==null?void 0:n.config},go=n=>{var e;return(e=Qs())==null?void 0:e[`_${n}`]};/**
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
 */class Yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function mt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function jc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yn(JSON.stringify(t)),yn(JSON.stringify(o)),""].join(".")}const Rt={};function $c(){const n={prod:[],emulator:[]};for(const e of Object.keys(Rt))Rt[e]?n.emulator.push(e):n.prod.push(e);return n}function Gc(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Qi=!1;function yo(n,e){if(typeof window>"u"||typeof document>"u"||!mt(window.location.host)||Rt[n]===e||Rt[n]||Qi)return;Rt[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",r=$c().prod.length>0;function o(){const u=document.getElementById(s);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function l(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Qi=!0,o()},u}function d(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=Gc(s),p=t("text"),m=document.getElementById(p)||document.createElement("span"),k=t("learnmore"),L=document.getElementById(k)||document.createElement("a"),q=t("preprendIcon"),M=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const he=u.element;a(he),d(L,k);const Ve=l();c(M,q),he.append(M,m,L,Ve),document.body.appendChild(he)}r?(m.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Js(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function zc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kc(){const n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yc(){return lo.NODE_ADMIN===!0}function Qc(){try{return typeof indexedDB=="object"}catch{return!1}}function Jc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xc="FirebaseError";class Be extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Xc,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Zc(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Be(i,a,s)}}function Zc(n,e){return n.replace(el,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const el=/\{\$([^}]+)}/g;/**
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
 */function Ft(n){return JSON.parse(n)}function V(n){return JSON.stringify(n)}/**
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
 */const wo=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ft(vn(r[0])||""),t=Ft(vn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},tl=function(n){const e=wo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},nl=function(n){const e=wo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function fe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ts(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function qe(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ji(r)&&Ji(o)){if(!qe(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ji(n){return n!==null&&typeof n=="object"}/**
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
 */function yt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class sl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),d=1518500249):(l=r^o^a,d=1859775393):h<60?(l=r&o|a&(r|o),d=2400959708):(l=r^o^a,d=3395469782);const u=(i<<5|i>>>27)+l+c+d+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function il(n,e){const t=new rl(n,e);return t.subscribe.bind(t)}class rl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ol(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=as),i.error===void 0&&(i.error=as),i.complete===void 0&&(i.complete=as);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ol(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function as(){}function jn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const al=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$n=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function X(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const He="[DEFAULT]";/**
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
 */class cl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hl(e))try{this.getOrInitializeService({instanceIdentifier:He})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=He){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=He){return this.instances.has(e)}getOptions(e=He){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ll(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=He){return this.component?this.component.multipleInstances?e:He:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ll(n){return n===He?void 0:n}function hl(n){return n.instantiationMode==="EAGER"}/**
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
 */class ul{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const dl={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},fl=P.INFO,pl={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},_l=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=pl[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=fl,this._logHandler=_l,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const gl=(n,e)=>e.some(t=>n instanceof t);let Xi,Zi;function ml(){return Xi||(Xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yl(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Io=new WeakMap,Ss=new WeakMap,Eo=new WeakMap,cs=new WeakMap,Zs=new WeakMap;function vl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Oe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Io.set(t,n)}).catch(()=>{}),Zs.set(e,n),e}function wl(n){if(Ss.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ss.set(n,e)}let bs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ss.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Eo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Il(n){bs=n(bs)}function El(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ls(this),e,...t);return Eo.set(s,e.sort?e.sort():[e]),Oe(s)}:yl().includes(n)?function(...e){return n.apply(ls(this),e),Oe(Io.get(this))}:function(...e){return Oe(n.apply(ls(this),e))}}function Cl(n){return typeof n=="function"?El(n):(n instanceof IDBTransaction&&wl(n),gl(n,ml())?new Proxy(n,bs):n)}function Oe(n){if(n instanceof IDBRequest)return vl(n);if(cs.has(n))return cs.get(n);const e=Cl(n);return e!==n&&(cs.set(n,e),Zs.set(e,n)),e}const ls=n=>Zs.get(n);function Tl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Oe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Oe(o.result),c.oldVersion,c.newVersion,Oe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Sl=["get","getKey","getAll","getAllKeys","count"],bl=["put","add","delete","clear"],hs=new Map;function er(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=bl.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sl.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return hs.set(e,r),r}Il(n=>({...n,get:(e,t,s)=>er(e,t)||n.get(e,t,s),has:(e,t)=>!!er(e,t)||n.has(e,t)}));/**
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
 */class kl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Nl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",tr="0.14.8";/**
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
 */const Ee=new Xs("@firebase/app"),Rl="@firebase/app-compat",Al="@firebase/analytics-compat",Pl="@firebase/analytics",Ol="@firebase/app-check-compat",Dl="@firebase/app-check",xl="@firebase/auth",Ll="@firebase/auth-compat",Ml="@firebase/database",Fl="@firebase/data-connect",Ul="@firebase/database-compat",Wl="@firebase/functions",Bl="@firebase/functions-compat",Vl="@firebase/installations",Hl="@firebase/installations-compat",jl="@firebase/messaging",$l="@firebase/messaging-compat",Gl="@firebase/performance",zl="@firebase/performance-compat",ql="@firebase/remote-config",Kl="@firebase/remote-config-compat",Yl="@firebase/storage",Ql="@firebase/storage-compat",Jl="@firebase/firestore",Xl="@firebase/ai",Zl="@firebase/firestore-compat",eh="firebase",th="12.9.0";/**
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
 */const Ns="[DEFAULT]",nh={[ks]:"fire-core",[Rl]:"fire-core-compat",[Pl]:"fire-analytics",[Al]:"fire-analytics-compat",[Dl]:"fire-app-check",[Ol]:"fire-app-check-compat",[xl]:"fire-auth",[Ll]:"fire-auth-compat",[Ml]:"fire-rtdb",[Fl]:"fire-data-connect",[Ul]:"fire-rtdb-compat",[Wl]:"fire-fn",[Bl]:"fire-fn-compat",[Vl]:"fire-iid",[Hl]:"fire-iid-compat",[jl]:"fire-fcm",[$l]:"fire-fcm-compat",[Gl]:"fire-perf",[zl]:"fire-perf-compat",[ql]:"fire-rc",[Kl]:"fire-rc-compat",[Yl]:"fire-gcs",[Ql]:"fire-gcs-compat",[Jl]:"fire-fst",[Zl]:"fire-fst-compat",[Xl]:"fire-vertex","fire-js":"fire-js",[eh]:"fire-js-all"};/**
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
 */const In=new Map,sh=new Map,Rs=new Map;function nr(n,e){try{n.container.addComponent(e)}catch(t){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(Rs.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,n);for(const t of In.values())nr(t,n);for(const t of sh.values())nr(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ie(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ih={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Qt("app","Firebase",ih);/**
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
 */class rh{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const vt=th;function Co(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ns,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw De.create("bad-app-name",{appName:String(i)});if(t||(t=_o()),!t)throw De.create("no-options");const r=In.get(i);if(r){if(qe(t,r.options)&&qe(s,r.config))return r;throw De.create("duplicate-app",{appName:i})}const o=new ul(i);for(const c of Rs.values())o.addComponent(c);const a=new rh(t,s,o);return In.set(i,a),a}function To(n=Ns){const e=In.get(n);if(!e&&n===Ns&&_o())return Co();if(!e)throw De.create("no-app",{appName:n});return e}function xe(n,e,t){let s=nh[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(o.join(" "));return}lt(new Ke(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oh="firebase-heartbeat-database",ah=1,Ut="firebase-heartbeat-store";let us=null;function So(){return us||(us=Tl(oh,ah,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ut)}catch(t){console.warn(t)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),us}async function ch(n){try{const t=(await So()).transaction(Ut),s=await t.objectStore(Ut).get(bo(n));return await t.done,s}catch(e){if(e instanceof Be)Ee.warn(e.message);else{const t=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ee.warn(t.message)}}}async function sr(n,e){try{const s=(await So()).transaction(Ut,"readwrite");await s.objectStore(Ut).put(e,bo(n)),await s.done}catch(t){if(t instanceof Be)Ee.warn(t.message);else{const s=De.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ee.warn(s.message)}}}function bo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lh=1024,hh=30;class uh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ir();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>hh){const o=ph(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ee.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ir(),{heartbeatsToSend:s,unsentEntries:i}=dh(this._heartbeatsCache.heartbeats),r=yn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ee.warn(t),""}}}function ir(){return new Date().toISOString().substring(0,10)}function dh(n,e=lh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qc()?Jc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ch(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return sr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return sr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rr(n){return yn(JSON.stringify({version:2,heartbeats:n})).length}function ph(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function _h(n){lt(new Ke("platform-logger",e=>new kl(e),"PRIVATE")),lt(new Ke("heartbeat",e=>new uh(e),"PRIVATE")),xe(ks,tr,n),xe(ks,tr,"esm2020"),xe("fire-js","")}_h("");var gh="firebase",mh="12.9.0";/**
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
 */xe(gh,mh,"app");var or={};const ar="@firebase/database",cr="1.1.0";/**
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
 */let ko="";function yh(n){ko=n}/**
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
 */class vh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ft(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class wh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return fe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const No=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vh(e)}}catch{}return new wh},$e=No("localStorage"),Ih=No("sessionStorage");/**
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
 */const st=new Xs("@firebase/database"),Eh=function(){let n=1;return function(){return n++}}(),Ro=function(n){const e=al(n),t=new sl;t.update(e);const s=t.digest();return Ys.encodeByteArray(s)},Jt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Jt.apply(null,s):typeof s=="object"?e+=V(s):e+=s,e+=" "}return e};let At=null,lr=!0;const Ch=function(n,e){f(!0,"Can't turn on custom loggers persistently."),st.logLevel=P.VERBOSE,At=st.log.bind(st)},G=function(...n){if(lr===!0&&(lr=!1,At===null&&Ih.get("logging_enabled")===!0&&Ch()),At){const e=Jt.apply(null,n);At(e)}},Xt=function(n){return function(...e){G(n,...e)}},As=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jt(...n);st.error(e)},Ce=function(...n){const e=`FIREBASE FATAL ERROR: ${Jt(...n)}`;throw st.error(e),new Error(e)},Y=function(...n){const e="FIREBASE WARNING: "+Jt(...n);st.warn(e)},Th=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Y("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ti=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ht="[MIN_NAME]",Ye="[MAX_NAME]",Ze=function(n,e){if(n===e)return 0;if(n===ht||e===Ye)return-1;if(e===ht||n===Ye)return 1;{const t=hr(n),s=hr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},bh=function(n,e){return n===e?0:n<e?-1:1},Tt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+V(e))},ni=function(n){if(typeof n!="object"||n===null)return V(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=V(e[s]),t+=":",t+=ni(n[e[s]]);return t+="}",t},Ao=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Po=function(n){f(!ti(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const d=l.join("");let h="";for(c=0;c<64;c+=8){let u=parseInt(d.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},kh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ah=new RegExp("^-?(0*)\\d{1,10}$"),Ph=-2147483648,Oh=2147483647,hr=function(n){if(Ah.test(n)){const e=Number(n);if(e>=Ph&&e<=Oh)return e}return null},wt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Y("Exception was thrown by user callback.",t),e},Math.floor(0))}},Dh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class xh{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ie(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Y(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Lh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(G("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Y(e)}}class fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fn.OWNER="owner";/**
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
 */const si="5",Oo="v",Do="s",xo="r",Lo="f",Mo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fo="ls",Uo="p",Ps="ac",Wo="websocket",Bo="long_polling";/**
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
 */class Vo{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ho(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Wo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bo)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mh(n)&&(t.ns=n.namespace);const i=[];return z(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Fh{constructor(){this.counters_={}}incrementCounter(e,t=1){fe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Mc(this.counters_)}}/**
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
 */const ds={},fs={};function ii(n){const e=n.toString();return ds[e]||(ds[e]=new Fh),ds[e]}function Uh(n,e){const t=n.toString();return fs[t]||(fs[t]=e()),fs[t]}/**
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
 */class Wh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&wt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ur="start",Bh="close",Vh="pLPCommand",Hh="pRTLPCB",jo="id",$o="pw",Go="ser",jh="cb",$h="seg",Gh="ts",zh="d",qh="dframe",zo=1870,qo=30,Kh=zo-qo,Yh=25e3,Qh=3e4;class nt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xt(e),this.stats_=ii(t),this.urlFn=c=>(this.appCheckToken&&(c[Ps]=this.appCheckToken),Ho(t,Bo,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Wh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qh)),Sh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ri((...r)=>{const[o,a,c,l,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ur)this.id=a,this.password=c;else if(o===Bh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ur]="t",s[Go]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[jh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Oo]=si,this.transportSessionId&&(s[Do]=this.transportSessionId),this.lastSessionId&&(s[Fo]=this.lastSessionId),this.applicationId&&(s[Uo]=this.applicationId),this.appCheckToken&&(s[Ps]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mo.test(location.hostname)&&(s[xo]=Lo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return nt.forceAllow_?!0:!nt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kh()&&!Nh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=uo(t),i=Ao(s,Kh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[qh]="t",s[jo]=e,s[$o]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ri{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Eh(),window[Vh+this.uniqueCallbackIdentifier]=e,window[Hh+this.uniqueCallbackIdentifier]=t,this.myIFrame=ri.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){G("frame writing exception"),a.stack&&G(a.stack),G(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||G("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jo]=this.myID,e[$o]=this.myPW,e[Go]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qo+s.length<=zo;){const o=this.pendingSegs.shift();s=s+"&"+$h+i+"="+o.seg+"&"+Gh+i+"="+o.ts+"&"+zh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Yh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{G("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Jh=16384,Xh=45e3;let En=null;typeof MozWebSocket<"u"?En=MozWebSocket:typeof WebSocket<"u"&&(En=WebSocket);class re{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xt(this.connId),this.stats_=ii(t),this.connURL=re.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Oo]=si,typeof location<"u"&&location.hostname&&Mo.test(location.hostname)&&(o[xo]=Lo),t&&(o[Do]=t),s&&(o[Fo]=s),i&&(o[Ps]=i),r&&(o[Uo]=r),Ho(e,Wo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$e.set("previous_websocket_failure",!0);try{let s;Yc(),this.mySock=new En(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&En!==null&&!re.forceDisallow_}static previouslyFailed(){return $e.isInMemoryStorage||$e.get("previous_websocket_failure")===!0}markConnectionHealthy(){$e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ft(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ao(t,Jh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Xh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}re.responsesRequiredToBeHealthy=2;re.healthyTimeout=3e4;/**
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
 */class Wt{static get ALL_TRANSPORTS(){return[nt,re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=re&&re.isAvailable();let s=t&&!re.previouslyFailed();if(e.webSocketOnly&&(t||Y("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[re];else{const i=this.transports_=[];for(const r of Wt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Wt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wt.globalTransportInitialized_=!1;/**
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
 */const Zh=6e4,eu=5e3,tu=10*1024,nu=100*1024,ps="t",dr="d",su="s",fr="r",iu="e",pr="o",_r="a",gr="n",mr="p",ru="h";class ou{constructor(e,t,s,i,r,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xt("c:"+this.id+":"),this.transportManager_=new Wt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ps in e){const t=e[ps];t===_r?this.upgradeIfSecondaryHealthy_():t===fr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===pr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_r,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tt(ps,e);if(dr in e){const s=e[dr];if(t===ru){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===gr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===su?this.onConnectionShutdown_(s):t===fr?this.onReset_(s):t===iu?As("Server Error: "+s):t===pr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):As("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),si!==s&&Y("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Pt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ko{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Yo{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Cn extends Yo{static getInstance(){return new Cn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Js()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yr=32,vr=768;class O{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new O("")}function T(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fe(n){return n.pieces_.length-n.pieceNum_}function x(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new O(n.pieces_,e)}function oi(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function au(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Bt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Qo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new O(e,0)}function U(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof O)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new O(t,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=T(n),s=T(e);if(t===null)return e;if(t===s)return K(x(n),x(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function cu(n,e){const t=Bt(n,0),s=Bt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Ze(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ai(n,e){if(Fe(n)!==Fe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Z(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Fe(n)>Fe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class lu{constructor(e,t){this.errorPrefix_=t,this.parts_=Bt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$n(this.parts_[s]);Jo(this)}}function hu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$n(e),Jo(n)}function uu(n){const e=n.parts_.pop();n.byteLength_-=$n(e),n.parts_.length>0&&(n.byteLength_-=1)}function Jo(n){if(n.byteLength_>vr)throw new Error(n.errorPrefix_+"has a key path longer than "+vr+" bytes ("+n.byteLength_+").");if(n.parts_.length>yr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yr+") or object contains a cycle "+je(n))}function je(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ci extends Yo{static getInstance(){return new ci}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const St=1e3,du=60*5*1e3,wr=30*1e3,fu=1.3,pu=3e4,_u="server_kill",Ir=3;class Ie extends Ko{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ie.nextPersistentConnectionId_++,this.log_=Xt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=St,this.maxReconnectDelay_=du,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ci.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(V(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Yt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ie.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&fe(e,"w")){const s=ct(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Y(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):As("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pu&&(this.reconnectDelay_=St),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?G("getToken() completed but was canceled"):(G("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new ou(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{Y(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(_u)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Y(h),c())}}}interrupt(e){G("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){G("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ts(this.interruptReasons_)&&(this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ni(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new O(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){G("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ir&&(this.reconnectDelay_=wr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){G("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ir&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ko.replace(/\./g,"-")]=1,Js()?e["framework.cordova"]=1:vo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cn.getInstance().currentlyOnline();return Ts(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0;Ie.nextConnectionId_=0;/**
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
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
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
 */class Gn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(ht,e),i=new S(ht,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
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
 */let cn;class Xo extends Gn{static get __EMPTY_NODE(){return cn}static set __EMPTY_NODE(e){cn=e}compare(e,t){return Ze(e.name,t.name)}isDefinedOn(e){throw gt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Ye,cn)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,cn)}toString(){return".key"}}const it=new Xo;/**
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
 */class ln{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ${constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??$.RED,this.left=i??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,s,i,r){return new $(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return J.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$.RED=!0;$.BLACK=!1;class gu{copy(e,t,s,i,r){return this}insert(e,t,s){return new $(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ln(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ln(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ln(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ln(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new gu;/**
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
 */function mu(n,e){return Ze(n.name,e.name)}function li(n,e){return Ze(n,e)}/**
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
 */let Os;function yu(n){Os=n}const Zo=function(n){return typeof n=="number"?"number:"+Po(n):"string:"+n},ea=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fe(e,".sv"),"Priority must be a string or number.")}else f(n===Os||n.isEmpty(),"priority of unexpected type.");f(n===Os||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Er;class j{static set __childrenNodeConstructor(e){Er=e}static get __childrenNodeConstructor(){return Er}constructor(e,t=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ea(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:T(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=T(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||Fe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(x(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Po(this.value_):e+=this.value_,this.lazyHash_=Ro(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=j.VALUE_TYPE_ORDER.indexOf(t),r=j.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ta,na;function vu(n){ta=n}function wu(n){na=n}class Iu extends Gn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ze(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Ye,new j("[PRIORITY-POST]",na))}makePost(e,t){const s=ta(e);return new S(t,new j("[PRIORITY-POST]",s))}toString(){return".priority"}}const W=new Iu;/**
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
 */const Eu=Math.log(2);class Cu{constructor(e){const t=r=>parseInt(Math.log(r)/Eu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tn=function(n,e,t,s){n.sort(e);const i=function(c,l){const d=l-c;let h,u;if(d===0)return null;if(d===1)return h=n[c],u=t?t(h):h,new $(u,h.node,$.BLACK,null,null);{const p=parseInt(d/2,10)+c,m=i(c,p),k=i(p+1,l);return h=n[p],u=t?t(h):h,new $(u,h.node,$.BLACK,m,k)}},r=function(c){let l=null,d=null,h=n.length;const u=function(m,k){const L=h-m,q=h;h-=m;const M=i(L+1,q),he=n[L],Ve=t?t(he):he;p(new $(Ve,he.node,k,null,M))},p=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){const k=c.nextBitIsOne(),L=Math.pow(2,c.count-(m+1));k?u(L,$.BLACK):(u(L,$.BLACK),u(L,$.RED))}return d},o=new Cu(n.length),a=r(o);return new J(s||e,a)};/**
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
 */let _s;const tt={};class ye{static get Default(){return f(tt&&W,"ChildrenNode.ts has not been loaded"),_s=_s||new ye({".priority":tt},{".priority":W}),_s}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return fe(this.indexSet_,e.toString())}addIndex(e,t){f(e!==it,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Tn(s,e.getCompare()):a=tt;const c=e.toString(),l={...this.indexSet_};l[c]=e;const d={...this.indexes_};return d[c]=a,new ye(d,l)}addToIndexes(e,t){const s=wn(this.indexes_,(i,r)=>{const o=ct(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===tt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(S.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Tn(a,o.getCompare())}else return tt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new S(e.name,a))),c.insert(e,e.node)}});return new ye(s,this.indexSet_)}removeFromIndexes(e,t){const s=wn(this.indexes_,i=>{if(i===tt)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new ye(s,this.indexSet_)}}/**
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
 */let bt;class I{static get EMPTY_NODE(){return bt||(bt=new I(new J(li),null,ye.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ea(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||bt}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?bt:t}}getChild(e){const t=T(e);return t===null?this:this.getImmediateChild(t).getChild(x(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?bt:this.priorityNode_;return new I(i,o,r)}}updateChild(e,t){const s=T(e);if(s===null)return t;{f(T(e)!==".priority"||Fe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(x(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(W,(o,a)=>{t[o]=a.val(e),s++,r&&I.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zo(this.getPriority().val())+":"),this.forEachChild(W,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Ro(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zt?-1:0}withIndex(e){if(e===it||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===it||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(W),i=t.getIterator(W);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===it?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tu extends I{constructor(){super(new J(li),I.EMPTY_NODE,ye.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const Zt=new Tu;Object.defineProperties(S,{MIN:{value:new S(ht,I.EMPTY_NODE)},MAX:{value:new S(Ye,Zt)}});Xo.__EMPTY_NODE=I.EMPTY_NODE;j.__childrenNodeConstructor=I;yu(Zt);wu(Zt);/**
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
 */const Su=!0;function B(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new j(t,B(e))}if(!(n instanceof Array)&&Su){const t=[];let s=!1;if(z(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=B(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new S(o,c)))}}),t.length===0)return I.EMPTY_NODE;const r=Tn(t,mu,o=>o.name,li);if(s){const o=Tn(t,W.getCompare());return new I(r,B(e),new ye({".priority":o},{".priority":W}))}else return new I(r,B(e),ye.Default)}else{let t=I.EMPTY_NODE;return z(n,(s,i)=>{if(fe(n,s)&&s.substring(0,1)!=="."){const r=B(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(B(e))}}vu(B);/**
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
 */class bu extends Gn{constructor(e){super(),this.indexPath_=e,f(!b(e)&&T(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ze(e.name,t.name):r}makePost(e,t){const s=B(e),i=I.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,Zt);return new S(Ye,e)}toString(){return Bt(this.indexPath_,0).join("/")}}/**
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
 */class ku extends Gn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ze(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=B(e);return new S(t,s)}toString(){return".value"}}const Nu=new ku;/**
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
 */function sa(n){return{type:"value",snapshotNode:n}}function ut(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ht(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ru(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class hi{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Vt(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ut(t,s)):o.trackChildChange(Ht(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(W,(i,r)=>{t.hasChild(i)||s.trackChildChange(Vt(i,r))}),t.isLeafNode()||t.forEachChild(W,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ht(i,r,o))}else s.trackChildChange(ut(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class jt{constructor(e){this.indexedFilter_=new hi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jt.getStartPost_(e),this.endPost_=jt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=I.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Au{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new jt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=I.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,p)=>h(p,u)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const c=new S(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,c);if(d&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ht(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Vt(t,h));const k=a.updateImmediateChild(t,I.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(ut(u.name,u.node)),k.updateImmediateChild(u.name,u.node)):k}}else return s.isEmpty()?e:d&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Vt(l.name,l.node)),r.trackChildChange(ut(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,I.EMPTY_NODE)):e}}/**
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
 */class ui{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ht}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new ui;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pu(n){return n.loadsAllData()?new hi(n.getIndex()):n.hasLimit()?new Au(n):new jt(n)}function Cr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===Nu?t="$value":n.index_===it?t="$key":(f(n.index_ instanceof bu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=V(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=V(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+V(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=V(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+V(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Tr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
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
 */class Sn extends Ko{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Xt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Sn.getListenId_(e,s),a={};this.listens_[o]=a;const c=Cr(e._queryParams);this.restRequest_(r+".json",c,(l,d)=>{let h=d;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),ct(this.listens_,o)===a){let u;l?l===401?u="permission_denied":u="rest_error:"+l:u="ok",i(u,null)}})}unlisten(e,t){const s=Sn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Cr(e._queryParams),s=e._path.toString(),i=new Yt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ft(a.responseText)}catch{Y("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Y("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ou{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function bn(){return{value:null,children:new Map}}function ia(n,e,t){if(b(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=T(e);n.children.has(s)||n.children.set(s,bn());const i=n.children.get(s);e=x(e),ia(i,e,t)}}function Ds(n,e,t){n.value!==null?t(e,n.value):Du(n,(s,i)=>{const r=new O(e.toString()+"/"+s);Ds(i,r,t)})}function Du(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class xu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&z(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Sr=10*1e3,Lu=30*1e3,Mu=5*60*1e3;class Fu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xu(e);const s=Sr+(Lu-Sr)*Math.random();Pt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;z(e,(i,r)=>{r>0&&fe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Pt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Mu))}}/**
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
 */var oe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function di(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class kn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=oe.ACK_USER_WRITE,this.source=di()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new O(e));return new kn(N(),t,this.revert)}}else return f(T(this.path)===e,"operationForChild called for unrelated child."),new kn(x(this.path),this.affectedTree,this.revert)}}/**
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
 */class $t{constructor(e,t){this.source=e,this.path=t,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new $t(this.source,N()):new $t(this.source,x(this.path))}}/**
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
 */class Qe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=oe.OVERWRITE}operationForChild(e){return b(this.path)?new Qe(this.source,N(),this.snap.getImmediateChild(e)):new Qe(this.source,x(this.path),this.snap)}}/**
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
 */class dt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=oe.MERGE}operationForChild(e){if(b(this.path)){const t=this.children.subtree(new O(e));return t.isEmpty()?null:t.value?new Qe(this.source,N(),t.value):new dt(this.source,N(),t)}else return f(T(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dt(this.source,x(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ue{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const t=T(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Uu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ru(o.childName,o.snapshotNode))}),kt(n,i,"child_removed",e,s,t),kt(n,i,"child_added",e,s,t),kt(n,i,"child_moved",r,s,t),kt(n,i,"child_changed",e,s,t),kt(n,i,"value",e,s,t),i}function kt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Vu(n,a,c)),o.forEach(a=>{const c=Bu(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Bu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Vu(n,e,t){if(e.childName==null||t.childName==null)throw gt("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function zn(n,e){return{eventCache:n,serverCache:e}}function Ot(n,e,t,s){return zn(new Ue(e,t,s),n.serverCache)}function ra(n,e,t,s){return zn(n.eventCache,new Ue(e,t,s))}function Nn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Je(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let gs;const Hu=()=>(gs||(gs=new J(bh)),gs);class D{static fromObject(e){let t=new D(null);return z(e,(s,i)=>{t=t.set(new O(s),i)}),t}constructor(e,t=Hu()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(b(e))return null;{const s=T(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(x(e),t);return r!=null?{path:U(new O(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const t=T(e),s=this.children.get(t);return s!==null?s.subtree(x(e)):new D(null)}}set(e,t){if(b(e))return new D(t,this.children);{const s=T(e),r=(this.children.get(s)||new D(null)).set(x(e),t),o=this.children.insert(s,r);return new D(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new D(null):new D(null,this.children);{const t=T(e),s=this.children.get(t);if(s){const i=s.remove(x(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new D(null):new D(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const t=T(e),s=this.children.get(t);return s?s.get(x(e)):null}}setTree(e,t){if(b(e))return t;{const s=T(e),r=(this.children.get(s)||new D(null)).setTree(x(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new D(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(U(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(b(e))return null;{const r=T(e),o=this.children.get(r);return o?o.findOnPath_(x(e),U(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,s){if(b(e))return this;{this.value&&s(t,this.value);const i=T(e),r=this.children.get(i);return r?r.foreachOnPath_(x(e),U(t,i),s):new D(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(U(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ce{constructor(e){this.writeTree_=e}static empty(){return new ce(new D(null))}}function Dt(n,e,t){if(b(e))return new ce(new D(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=K(i,e);return r=r.updateChild(o,t),new ce(n.writeTree_.set(i,r))}else{const i=new D(t),r=n.writeTree_.setTree(e,i);return new ce(r)}}}function xs(n,e,t){let s=n;return z(t,(i,r)=>{s=Dt(s,U(e,i),r)}),s}function br(n,e){if(b(e))return ce.empty();{const t=n.writeTree_.setTree(e,new D(null));return new ce(t)}}function Ls(n,e){return et(n,e)!=null}function et(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function kr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function Le(n,e){if(b(e))return n;{const t=et(n,e);return t!=null?new ce(new D(t)):new ce(n.writeTree_.subtree(e))}}function Ms(n){return n.writeTree_.isEmpty()}function ft(n,e){return oa(N(),n.writeTree_,e)}function oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=oa(U(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(U(n,".priority"),s)),t}}/**
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
 */function qn(n,e){return ha(e,n)}function ju(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Dt(n.visibleWrites,e,t)),n.lastWriteId=s}function $u(n,e,t,s){f(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=xs(n.visibleWrites,e,t),n.lastWriteId=s}function Gu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function zu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qu(a,s.path)?i=!1:Z(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Ku(n),!0;if(s.snap)n.visibleWrites=br(n.visibleWrites,s.path);else{const a=s.children;z(a,c=>{n.visibleWrites=br(n.visibleWrites,U(s.path,c))})}return!0}else return!1}function qu(n,e){if(n.snap)return Z(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Z(U(n.path,t),e))return!0;return!1}function Ku(n){n.visibleWrites=aa(n.allWrites,Yu,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Yu(n){return n.visible}function aa(n,e,t){let s=ce.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Z(t,o)?(a=K(t,o),s=Dt(s,a,r.snap)):Z(o,t)&&(a=K(o,t),s=Dt(s,N(),r.snap.getChild(a)));else if(r.children){if(Z(t,o))a=K(t,o),s=xs(s,a,r.children);else if(Z(o,t))if(a=K(o,t),b(a))s=xs(s,N(),r.children);else{const c=ct(r.children,T(a));if(c){const l=c.getChild(x(a));s=Dt(s,N(),l)}}}else throw gt("WriteRecord should have .snap or .children")}}return s}function ca(n,e,t,s,i){if(!s&&!i){const r=et(n.visibleWrites,e);if(r!=null)return r;{const o=Le(n.visibleWrites,e);if(Ms(o))return t;if(t==null&&!Ls(o,N()))return null;{const a=t||I.EMPTY_NODE;return ft(o,a)}}}else{const r=Le(n.visibleWrites,e);if(!i&&Ms(r))return t;if(!i&&t==null&&!Ls(r,N()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(Z(l.path,e)||Z(e,l.path))},a=aa(n.allWrites,o,e),c=t||I.EMPTY_NODE;return ft(a,c)}}}function Qu(n,e,t){let s=I.EMPTY_NODE;const i=et(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(W,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Le(n.visibleWrites,e);return t.forEachChild(W,(o,a)=>{const c=ft(Le(r,new O(o)),a);s=s.updateImmediateChild(o,c)}),kr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Le(n.visibleWrites,e);return kr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ju(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Ls(n.visibleWrites,r))return null;{const o=Le(n.visibleWrites,r);return Ms(o)?i.getChild(t):ft(o,i.getChild(t))}}function Xu(n,e,t,s){const i=U(e,t),r=et(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Le(n.visibleWrites,i);return ft(o,s.getNode().getImmediateChild(t))}else return null}function Zu(n,e){return et(n.visibleWrites,e)}function ed(n,e,t,s,i,r,o){let a;const c=Le(n.visibleWrites,e),l=et(c,N());if(l!=null)a=l;else if(t!=null)a=ft(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=u.getNext();for(;p&&d.length<i;)h(p,s)!==0&&d.push(p),p=u.getNext();return d}else return[]}function td(){return{visibleWrites:ce.empty(),allWrites:[],lastWriteId:-1}}function Rn(n,e,t,s){return ca(n.writeTree,n.treePath,e,t,s)}function _i(n,e){return Qu(n.writeTree,n.treePath,e)}function Nr(n,e,t,s){return Ju(n.writeTree,n.treePath,e,t,s)}function An(n,e){return Zu(n.writeTree,U(n.treePath,e))}function nd(n,e,t,s,i,r){return ed(n.writeTree,n.treePath,e,t,s,i,r)}function gi(n,e,t){return Xu(n.writeTree,n.treePath,e,t)}function la(n,e){return ha(U(n.treePath,e),n.writeTree)}function ha(n,e){return{treePath:n,writeTree:e}}/**
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
 */class sd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Vt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ut(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ht(s,e.snapshotNode,i.oldSnap));else throw gt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class id{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const ua=new id;class mi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Je(this.viewCache_),r=nd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function rd(n){return{filter:n}}function od(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ad(n,e,t,s,i){const r=new sd;let o,a;if(t.type===oe.OVERWRITE){const l=t;l.source.fromUser?o=Fs(n,e,l.path,l.snap,s,i,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!b(l.path),o=Pn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===oe.MERGE){const l=t;l.source.fromUser?o=ld(n,e,l.path,l.children,s,i,r):(f(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Us(n,e,l.path,l.children,s,i,a,r))}else if(t.type===oe.ACK_USER_WRITE){const l=t;l.revert?o=dd(n,e,l.path,s,i,r):o=hd(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===oe.LISTEN_COMPLETE)o=ud(n,e,t.path,s,r);else throw gt("Unknown operation type: "+t.type);const c=r.getChanges();return cd(e,o,c),{viewCache:o,changes:c}}function cd(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(sa(Nn(e)))}}function da(n,e,t,s,i,r){const o=e.eventCache;if(An(s,t)!=null)return e;{let a,c;if(b(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Je(e),d=l instanceof I?l:I.EMPTY_NODE,h=_i(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Rn(s,Je(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=T(t);if(l===".priority"){f(Fe(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const h=Nr(s,t,d,c);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=x(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const u=Nr(s,t,o.getNode(),c);u!=null?h=o.getNode().getImmediateChild(l).updateChild(d,u):h=o.getNode().getImmediateChild(l)}else h=gi(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,d,i,r):a=o.getNode()}}return Ot(e,a,o.isFullyInitialized()||b(t),n.filter.filtersNodes())}}function Pn(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const d=o?n.filter:n.filter.getIndexedFilter();if(b(t))l=d.updateFullNode(c.getNode(),s,null);else if(d.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);l=d.updateFullNode(c.getNode(),p,null)}else{const p=T(t);if(!c.isCompleteForPath(t)&&Fe(t)>1)return e;const m=x(t),L=c.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?l=d.updatePriority(c.getNode(),L):l=d.updateChild(c.getNode(),p,L,m,ua,null)}const h=ra(e,l,c.isFullyInitialized()||b(t),d.filtersNodes()),u=new mi(i,h,r);return da(n,h,t,i,u,a)}function Fs(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const d=new mi(i,e,r);if(b(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ot(e,l,!0,n.filter.filtersNodes());else{const h=T(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Ot(e,l,a.isFullyInitialized(),a.isFiltered());else{const u=x(t),p=a.getNode().getImmediateChild(h);let m;if(b(u))m=s;else{const k=d.getCompleteChild(h);k!=null?oi(u)===".priority"&&k.getChild(Qo(u)).isEmpty()?m=k:m=k.updateChild(u,s):m=I.EMPTY_NODE}if(p.equals(m))c=e;else{const k=n.filter.updateChild(a.getNode(),h,m,u,d,o);c=Ot(e,k,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Rr(n,e){return n.eventCache.isCompleteForChild(e)}function ld(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const d=U(t,c);Rr(e,T(d))&&(a=Fs(n,a,d,l,i,r,o))}),s.foreach((c,l)=>{const d=U(t,c);Rr(e,T(d))||(a=Fs(n,a,d,l,i,r,o))}),a}function Ar(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Us(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;b(t)?l=s:l=new D(null).setTree(t,s);const d=e.serverCache.getNode();return l.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Ar(n,p,u);c=Pn(n,c,new O(h),m,i,r,o,a)}}),l.children.inorderTraversal((h,u)=>{const p=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),k=Ar(n,m,u);c=Pn(n,c,new O(h),k,i,r,o,a)}}),c}function hd(n,e,t,s,i,r,o){if(An(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(b(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Pn(n,e,t,c.getNode().getChild(t),i,r,a,o);if(b(t)){let l=new D(null);return c.getNode().forEachChild(it,(d,h)=>{l=l.set(new O(d),h)}),Us(n,e,t,l,i,r,a,o)}else return e}else{let l=new D(null);return s.foreach((d,h)=>{const u=U(t,d);c.isCompleteForPath(u)&&(l=l.set(d,c.getNode().getChild(u)))}),Us(n,e,t,l,i,r,a,o)}}function ud(n,e,t,s,i){const r=e.serverCache,o=ra(e,r.getNode(),r.isFullyInitialized()||b(t),r.isFiltered());return da(n,o,t,s,ua,i)}function dd(n,e,t,s,i,r){let o;if(An(s,t)!=null)return e;{const a=new mi(s,e,i),c=e.eventCache.getNode();let l;if(b(t)||T(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Rn(s,Je(e));else{const h=e.serverCache.getNode();f(h instanceof I,"serverChildren would be complete if leaf node"),d=_i(s,h)}d=d,l=n.filter.updateFullNode(c,d,r)}else{const d=T(t);let h=gi(s,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=c.getImmediateChild(d)),h!=null?l=n.filter.updateChild(c,d,h,x(t),a,r):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,I.EMPTY_NODE,x(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rn(s,Je(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||An(s,N())!=null,Ot(e,l,o,n.filter.filtersNodes())}}/**
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
 */class fd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new hi(s.getIndex()),r=Pu(s);this.processor_=rd(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(I.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(I.EMPTY_NODE,a.getNode(),null),d=new Ue(c,o.isFullyInitialized(),i.filtersNodes()),h=new Ue(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=zn(h,d),this.eventGenerator_=new Uu(this.query_)}get query(){return this.query_}}function pd(n){return n.viewCache_.serverCache.getNode()}function _d(n){return Nn(n.viewCache_)}function gd(n,e){const t=Je(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!b(e)&&!t.getImmediateChild(T(e)).isEmpty())?t.getChild(e):null}function Pr(n){return n.eventRegistrations_.length===0}function md(n,e){n.eventRegistrations_.push(e)}function Or(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Dr(n,e,t,s){e.type===oe.MERGE&&e.source.queryId!==null&&(f(Je(n.viewCache_),"We should always have a full cache before handling merges"),f(Nn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=ad(n.processor_,i,e,t,s);return od(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,fa(n,r.changes,r.viewCache.eventCache.getNode(),null)}function yd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{s.push(ut(r,o))}),t.isFullyInitialized()&&s.push(sa(t.getNode())),fa(n,s,t.getNode(),e)}function fa(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Wu(n.eventGenerator_,e,t,i)}/**
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
 */let On;class pa{constructor(){this.views=new Map}}function vd(n){f(!On,"__referenceConstructor has already been defined"),On=n}function wd(){return f(On,"Reference.ts has not been loaded"),On}function Id(n){return n.views.size===0}function yi(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),Dr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Dr(o,e,t,s));return r}}function _a(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Rn(t,i?s:null),c=!1;a?c=!0:s instanceof I?(a=_i(t,s),c=!1):(a=I.EMPTY_NODE,c=!1);const l=zn(new Ue(a,c,!1),new Ue(s,i,!1));return new fd(e,l)}return o}function Ed(n,e,t,s,i,r){const o=_a(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),md(o,t),yd(o,t)}function Cd(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=We(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Or(l,t,s)),Pr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Or(c,t,s)),Pr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!We(n)&&r.push(new(wd())(e._repo,e._path)),{removed:r,events:o}}function ga(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Me(n,e){let t=null;for(const s of n.views.values())t=t||gd(s,e);return t}function ma(n,e){if(e._queryParams.loadsAllData())return Kn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ya(n,e){return ma(n,e)!=null}function We(n){return Kn(n)!=null}function Kn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dn;function Td(n){f(!Dn,"__referenceConstructor has already been defined"),Dn=n}function Sd(){return f(Dn,"Reference.ts has not been loaded"),Dn}let bd=1;class xr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new D(null),this.pendingWriteTree_=td(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function va(n,e,t,s,i){return ju(n.pendingWriteTree_,e,t,s,i),i?It(n,new Qe(di(),e,t)):[]}function kd(n,e,t,s){$u(n.pendingWriteTree_,e,t,s);const i=D.fromObject(t);return It(n,new dt(di(),e,i))}function Pe(n,e,t=!1){const s=Gu(n.pendingWriteTree_,e);if(zu(n.pendingWriteTree_,e)){let r=new D(null);return s.snap!=null?r=r.set(N(),!0):z(s.children,o=>{r=r.set(new O(o),!0)}),It(n,new kn(s.path,r,t))}else return[]}function en(n,e,t){return It(n,new Qe(fi(),e,t))}function Nd(n,e,t){const s=D.fromObject(t);return It(n,new dt(fi(),e,s))}function Rd(n,e){return It(n,new $t(fi(),e))}function Ad(n,e,t){const s=wi(n,t);if(s){const i=Ii(s),r=i.path,o=i.queryId,a=K(r,e),c=new $t(pi(o),a);return Ei(n,r,c)}else return[]}function xn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ya(o,e))){const c=Cd(o,e,t,s);Id(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(u,p)=>We(p));if(d&&!h){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const p=Dd(u);for(let m=0;m<p.length;++m){const k=p[m],L=k.query,q=Ca(n,k);n.listenProvider_.startListening(xt(L),Gt(n,L),q.hashFn,q.onComplete)}}}!h&&l.length>0&&!s&&(d?n.listenProvider_.stopListening(xt(e),null):l.forEach(u=>{const p=n.queryToTagMap.get(Yn(u));n.listenProvider_.stopListening(xt(u),p)}))}xd(n,l)}return a}function wa(n,e,t,s){const i=wi(n,s);if(i!=null){const r=Ii(i),o=r.path,a=r.queryId,c=K(o,e),l=new Qe(pi(a),c,t);return Ei(n,o,l)}else return[]}function Pd(n,e,t,s){const i=wi(n,s);if(i){const r=Ii(i),o=r.path,a=r.queryId,c=K(o,e),l=D.fromObject(t),d=new dt(pi(a),c,l);return Ei(n,o,d)}else return[]}function Ws(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,p)=>{const m=K(u,i);r=r||Me(p,m),o=o||We(p)});let a=n.syncPointTree_.get(i);a?(o=o||We(a),r=r||Me(a,N())):(a=new pa,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,m)=>{const k=Me(m,N());k&&(r=r.updateImmediateChild(p,k))}));const l=ya(a,e);if(!l&&!e._queryParams.loadsAllData()){const u=Yn(e);f(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=Ld();n.queryToTagMap.set(u,p),n.tagToQueryMap.set(p,u)}const d=qn(n.pendingWriteTree_,i);let h=Ed(a,e,t,d,r,c);if(!l&&!o&&!s){const u=ma(a,e);h=h.concat(Md(n,e,u))}return h}function vi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=K(o,e),l=Me(a,c);if(l)return l});return ca(i,e,r,t,!0)}function Od(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{const h=K(l,t);s=s||Me(d,h)});let i=n.syncPointTree_.get(t);i?s=s||Me(i,N()):(i=new pa,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ue(s,!0,!1):null,a=qn(n.pendingWriteTree_,e._path),c=_a(i,e,a,r?o.getNode():I.EMPTY_NODE,r);return _d(c)}function It(n,e){return Ia(e,n.syncPointTree_,null,qn(n.pendingWriteTree_,N()))}function Ia(n,e,t,s){if(b(n.path))return Ea(n,e,t,s);{const i=e.get(N());t==null&&i!=null&&(t=Me(i,N()));let r=[];const o=T(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,d=la(s,o);r=r.concat(Ia(a,c,l,d))}return i&&(r=r.concat(yi(i,n,s,t))),r}}function Ea(n,e,t,s){const i=e.get(N());t==null&&i!=null&&(t=Me(i,N()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=la(s,o),d=n.operationForChild(o);d&&(r=r.concat(Ea(d,a,c,l)))}),i&&(r=r.concat(yi(i,n,s,t))),r}function Ca(n,e){const t=e.query,s=Gt(n,t);return{hashFn:()=>(pd(e)||I.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ad(n,t._path,s):Rd(n,t._path);{const r=Rh(i,t);return xn(n,t,null,r)}}}}function Gt(n,e){const t=Yn(e);return n.queryToTagMap.get(t)}function Yn(n){return n._path.toString()+"$"+n._queryIdentifier}function wi(n,e){return n.tagToQueryMap.get(e)}function Ii(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new O(n.substr(0,e))}}function Ei(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=qn(n.pendingWriteTree_,e);return yi(s,t,i,null)}function Dd(n){return n.fold((e,t,s)=>{if(t&&We(t))return[Kn(t)];{let i=[];return t&&(i=ga(t)),z(s,(r,o)=>{i=i.concat(o)}),i}})}function xt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Sd())(n._repo,n._path):n}function xd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Yn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ld(){return bd++}function Md(n,e,t){const s=e._path,i=Gt(n,e),r=Ca(n,t),o=n.listenProvider_.startListening(xt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)f(!We(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,h)=>{if(!b(l)&&d&&We(d))return[Kn(d).query];{let u=[];return d&&(u=u.concat(ga(d).map(p=>p.query))),z(h,(p,m)=>{u=u.concat(m)}),u}});for(let l=0;l<c.length;++l){const d=c[l];n.listenProvider_.stopListening(xt(d),Gt(n,d))}}return o}/**
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
 */class Ci{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ci(t)}node(){return this.node_}}class Ti{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new Ti(this.syncTree_,t)}node(){return vi(this.syncTree_,this.path_)}}const Fd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Lr=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ud(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wd(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ud=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Wd=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ta=function(n,e,t,s){return Si(e,new Ti(t,n),s)},Sa=function(n,e,t){return Si(n,new Ci(e),t)};function Si(n,e,t){const s=n.getPriority().val(),i=Lr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Lr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new j(a,B(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new j(i))),o.forEachChild(W,(a,c)=>{const l=Si(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class bi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ki(n,e){let t=e instanceof O?e:new O(e),s=n,i=T(t);for(;i!==null;){const r=ct(s.node.children,i)||{children:{},childCount:0};s=new bi(i,s,r),t=x(t),i=T(t)}return s}function Et(n){return n.node.value}function ba(n,e){n.node.value=e,Bs(n)}function ka(n){return n.node.childCount>0}function Bd(n){return Et(n)===void 0&&!ka(n)}function Qn(n,e){z(n.node.children,(t,s)=>{e(new bi(t,n,s))})}function Na(n,e,t,s){t&&e(n),Qn(n,i=>{Na(i,e,!0)})}function Vd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function tn(n){return new O(n.parent===null?n.name:tn(n.parent)+"/"+n.name)}function Bs(n){n.parent!==null&&Hd(n.parent,n.name,n)}function Hd(n,e,t){const s=Bd(t),i=fe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Bs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Bs(n))}/**
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
 */const jd=/[\[\].#$\/\u0000-\u001F\u007F]/,$d=/[\[\].#$\u0000-\u001F\u007F]/,ms=10*1024*1024,Ni=function(n){return typeof n=="string"&&n.length!==0&&!jd.test(n)},Ra=function(n){return typeof n=="string"&&n.length!==0&&!$d.test(n)},Gd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ra(n)},zd=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ti(n)||n&&typeof n=="object"&&fe(n,".sv")},qd=function(n,e,t,s){Jn(jn(n,"value"),e,t)},Jn=function(n,e,t){const s=t instanceof O?new lu(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+je(s));if(typeof e=="function")throw new Error(n+"contains a function "+je(s)+" with contents = "+e.toString());if(ti(e))throw new Error(n+"contains "+e.toString()+" "+je(s));if(typeof e=="string"&&e.length>ms/3&&$n(e)>ms)throw new Error(n+"contains a string greater than "+ms+" utf8 bytes "+je(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(z(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ni(o)))throw new Error(n+" contains an invalid key ("+o+") "+je(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hu(s,o),Jn(n,a,s),uu(s)}),i&&r)throw new Error(n+' contains ".value" child '+je(s)+" in addition to actual children.")}},Kd=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Bt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ni(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cu);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Z(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Yd=function(n,e,t,s){const i=jn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];z(e,(o,a)=>{const c=new O(o);if(Jn(i,a,U(t,c)),oi(c)===".priority"&&!zd(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Kd(i,r)},Aa=function(n,e,t,s){if(!Ra(t))throw new Error(jn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qd=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Aa(n,e,t)},Pa=function(n,e){if(T(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ni(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Gd(t))throw new Error(jn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Xd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ai(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Oa(n,e,t){Xn(n,t),Da(n,s=>ai(s,e))}function te(n,e,t){Xn(n,t),Da(n,s=>Z(s,e)||Z(e,s))}function Da(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Zd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Zd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();At&&G("event: "+t.toString()),wt(s)}}}/**
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
 */const ef="repo_interrupt",tf=25;class nf{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bn(),this.transactionQueueTree_=new bi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sf(n,e,t){if(n.stats_=ii(n.repoInfo_),n.forceRestClient_||Dh())n.server_=new Sn(n.repoInfo_,(s,i,r,o)=>{Mr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ie(n.repoInfo_,e,(s,i,r,o)=>{Mr(n,s,i,r,o)},s=>{Fr(n,s)},s=>{of(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Uh(n.repoInfo_,()=>new Fu(n.stats_,n.server_)),n.infoData_=new Ou,n.infoSyncTree_=new xr({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=en(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ri(n,"connected",!1),n.serverSyncTree_=new xr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);te(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function rf(n){const t=n.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zn(n){return Fd({timestamp:rf(n)})}function Mr(n,e,t,s,i){n.dataUpdateCount++;const r=new O(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=wn(t,l=>B(l));o=Pd(n.serverSyncTree_,r,c,i)}else{const c=B(t);o=wa(n.serverSyncTree_,r,c,i)}else if(s){const c=wn(t,l=>B(l));o=Nd(n.serverSyncTree_,r,c)}else{const c=B(t);o=en(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=pt(n,r)),te(n.eventQueue_,a,o)}function Fr(n,e){Ri(n,"connected",e),e===!1&&hf(n)}function of(n,e){z(e,(t,s)=>{Ri(n,t,s)})}function Ri(n,e,t){const s=new O("/.info/"+e),i=B(t);n.infoData_.updateSnapshot(s,i);const r=en(n.infoSyncTree_,s,i);te(n.eventQueue_,s,r)}function Ai(n){return n.nextWriteId_++}function af(n,e,t){const s=Od(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=B(i).withIndex(e._queryParams.getIndex());Ws(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=en(n.serverSyncTree_,e._path,r);else{const a=Gt(n.serverSyncTree_,e);o=wa(n.serverSyncTree_,e._path,r,a)}return te(n.eventQueue_,e._path,o),xn(n.serverSyncTree_,e,t,null,!0),r},i=>(nn(n,"get for query "+V(e)+" failed: "+i),Promise.reject(new Error(i))))}function cf(n,e,t,s,i){nn(n,"set",{path:e.toString(),value:t,priority:s});const r=Zn(n),o=B(t,s),a=vi(n.serverSyncTree_,e),c=Sa(o,a,r),l=Ai(n),d=va(n.serverSyncTree_,e,c,l,!0);Xn(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,p)=>{const m=u==="ok";m||Y("set at "+e+" failed: "+u);const k=Pe(n.serverSyncTree_,l,!m);te(n.eventQueue_,e,k),Vs(n,i,u,p)});const h=Oi(n,e);pt(n,h),te(n.eventQueue_,h,[])}function lf(n,e,t,s){nn(n,"update",{path:e.toString(),value:t});let i=!0;const r=Zn(n),o={};if(z(t,(a,c)=>{i=!1,o[a]=Ta(U(e,a),B(c),n.serverSyncTree_,r)}),i)G("update() called with empty data.  Don't do anything."),Vs(n,s,"ok",void 0);else{const a=Ai(n),c=kd(n.serverSyncTree_,e,o,a);Xn(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{const h=l==="ok";h||Y("update at "+e+" failed: "+l);const u=Pe(n.serverSyncTree_,a,!h),p=u.length>0?pt(n,e):e;te(n.eventQueue_,p,u),Vs(n,s,l,d)}),z(t,l=>{const d=Oi(n,U(e,l));pt(n,d)}),te(n.eventQueue_,e,[])}}function hf(n){nn(n,"onDisconnectEvents");const e=Zn(n),t=bn();Ds(n.onDisconnect_,N(),(i,r)=>{const o=Ta(i,r,n.serverSyncTree_,e);ia(t,i,o)});let s=[];Ds(t,N(),(i,r)=>{s=s.concat(en(n.serverSyncTree_,i,r));const o=Oi(n,i);pt(n,o)}),n.onDisconnect_=bn(),te(n.eventQueue_,N(),s)}function uf(n,e,t){let s;T(e._path)===".info"?s=Ws(n.infoSyncTree_,e,t):s=Ws(n.serverSyncTree_,e,t),Oa(n.eventQueue_,e._path,s)}function df(n,e,t){let s;T(e._path)===".info"?s=xn(n.infoSyncTree_,e,t):s=xn(n.serverSyncTree_,e,t),Oa(n.eventQueue_,e._path,s)}function ff(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ef)}function nn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),G(t,...e)}function Vs(n,e,t,s){e&&wt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xa(n,e,t){return vi(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function Pi(n,e=n.transactionQueueTree_){if(e||es(n,e),Et(e)){const t=Ma(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&pf(n,tn(e),t)}else ka(e)&&Qn(e,t=>{Pi(n,t)})}function pf(n,e,t){const s=t.map(l=>l.currentWriteId),i=xa(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const d=t[l];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=K(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{nn(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(Pe(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();es(n,ki(n.transactionQueueTree_,e)),Pi(n,n.transactionQueueTree_),te(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)wt(h[u])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Y("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}pt(n,e)}},o)}function pt(n,e){const t=La(n,e),s=tn(t),i=Ma(n,t);return _f(n,i,s),s}function _f(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=K(t,c.path);let d=!1,h;if(f(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,h=c.abortReason,i=i.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=tf)d=!0,h="maxretry",i=i.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0));else{const u=xa(n,c.path,o);c.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){Jn("transaction failed: Data returned ",p,c.path);let m=B(p);typeof p=="object"&&p!=null&&fe(p,".priority")||(m=m.updatePriority(u.getPriority()));const L=c.currentWriteId,q=Zn(n),M=Sa(m,u,q);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=M,c.currentWriteId=Ai(n),o.splice(o.indexOf(L),1),i=i.concat(va(n.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),i=i.concat(Pe(n.serverSyncTree_,L,!0))}else d=!0,h="nodata",i=i.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0))}te(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}es(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)wt(s[a]);Pi(n,n.transactionQueueTree_)}function La(n,e){let t,s=n.transactionQueueTree_;for(t=T(e);t!==null&&Et(s)===void 0;)s=ki(s,t),e=x(e),t=T(e);return s}function Ma(n,e){const t=[];return Fa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Fa(n,e,t){const s=Et(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Qn(e,i=>{Fa(n,i,t)})}function es(n,e){const t=Et(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ba(e,t.length>0?t:void 0)}Qn(e,s=>{es(n,s)})}function Oi(n,e){const t=tn(La(n,e)),s=ki(n.transactionQueueTree_,e);return Vd(s,i=>{ys(n,i)}),ys(n,s),Na(s,i=>{ys(n,i)}),t}function ys(n,e){const t=Et(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Pe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ba(e,void 0):t.length=r+1,te(n.eventQueue_,tn(e),i);for(let o=0;o<s.length;o++)wt(s[o])}}/**
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
 */function gf(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Y(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ur=function(n,e){const t=yf(n),s=t.namespace;t.domain==="firebase.com"&&Ce(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ce("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Th();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new O(t.pathString)}},yf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=gf(n.substring(d,h)));const u=mf(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class vf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class wf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ua{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Di{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return b(this._path)?null:oi(this._path)}get ref(){return new Se(this._repo,this._path)}get _queryIdentifier(){const e=Tr(this._queryParams),t=ni(e);return t==="{}"?"default":t}get _queryObject(){return Tr(this._queryParams)}isEqual(e){if(e=X(e),!(e instanceof Di))return!1;const t=this._repo===e._repo,s=ai(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+au(this._path)}}class Se extends Di{constructor(e,t){super(e,t,new ui,!1)}get parent(){const e=Qo(this._path);return e===null?null:new Se(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new O(e),s=qt(this.ref,e);return new zt(this._node.getChild(t),s,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zt(i,qt(this.ref,s),W)))}hasChild(e){const t=new O(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _e(n,e){return n=X(n),n._checkNotDeleted("ref"),e!==void 0?qt(n._root,e):n._root}function qt(n,e){return n=X(n),T(n._path)===null?Qd("child","path",e):Aa("child","path",e),new Se(n._repo,U(n._path,e))}function If(n){return Pa("remove",n._path),Ef(n,null)}function Ef(n,e){n=X(n),Pa("set",n._path),qd("set",e,n._path);const t=new Yt;return cf(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Nt(n,e){Yd("update",e,n._path);const t=new Yt;return lf(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Wr(n){n=X(n);const e=new Ua(()=>{}),t=new ts(e);return af(n._repo,n,t).then(s=>new zt(s,new Se(n._repo,n._path),n._queryParams.getIndex()))}class ts{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new vf("value",this,new zt(e.snapshotNode,new Se(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wf(this,e,t):null}matches(e){return e instanceof ts?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Cf(n,e,t,s,i){const r=new Ua(t,void 0),o=new ts(r);return uf(n._repo,n,o),()=>df(n._repo,n,o)}function Tf(n,e,t,s){return Cf(n,"value",e)}vd(Se);Td(Se);/**
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
 */const Sf="FIREBASE_DATABASE_EMULATOR_HOST",Hs={};let bf=!1;function kf(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=mt(r);n.repoInfo_=new Vo(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Nf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ce("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),G("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ur(r,i),a=o.repoInfo,c;typeof process<"u"&&or&&(c=or[Sf]),c?(r=`http://${c}?ns=${a.namespace}`,o=Ur(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new Lh(n.name,n.options,e);Jd("Invalid Firebase Database URL",o),b(o.path)||Ce("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Af(a,n,l,new xh(n,t));return new Pf(d,n)}function Rf(n,e){const t=Hs[e];(!t||t[n.key]!==n)&&Ce(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ff(n),delete t[n.key]}function Af(n,e,t,s){let i=Hs[e.name];i||(i={},Hs[e.name]=i);let r=i[n.toURLString()];return r&&Ce("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nf(n,bf,t,s),i[n.toURLString()]=r,r}class Pf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Se(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ce("Cannot call "+e+" on a deleted database.")}}function Of(n=To(),e){const t=ei(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Hc("database");s&&Df(t,...s)}return t}function Df(n,e,t,s={}){n=X(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&qe(s,r.repoInfo_.emulatorOptions))return;Ce("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ce('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new fn(fn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:jc(s.mockUserToken,n.app.options.projectId);o=new fn(a)}mt(e)&&(mo(e),yo("Database",!0)),kf(r,i,s,o)}/**
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
 */function xf(n){yh(vt),lt(new Ke("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),xe(ar,cr,n),xe(ar,cr,"esm2020")}Ie.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ie.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xf();function Wa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lf=Wa,Ba=new Qt("auth","Firebase",Wa());/**
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
 */const Ln=new Xs("@firebase/auth");function Mf(n,...e){Ln.logLevel<=P.WARN&&Ln.warn(`Auth (${vt}): ${n}`,...e)}function pn(n,...e){Ln.logLevel<=P.ERROR&&Ln.error(`Auth (${vt}): ${n}`,...e)}/**
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
 */function de(n,...e){throw Li(n,...e)}function le(n,...e){return Li(n,...e)}function xi(n,e,t){const s={...Lf(),[e]:t};return new Qt("auth","Firebase",s).create(e,{appName:n.name})}function ze(n){return xi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&de(n,"argument-error"),xi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Li(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ba.create(n,...e)}function C(n,e,...t){if(!n)throw Li(e,...t)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pn(e),new Error(e)}function Te(n,e){n||ve(e)}/**
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
 */function js(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Uf(){return Br()==="http:"||Br()==="https:"}function Br(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Wf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uf()||qc()||"connection"in navigator)?navigator.onLine:!0}function Bf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class sn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Te(t>e,"Short delay should be less than long delay!"),this.isMobile=Js()||vo()}get(){return Wf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mi(n,e){Te(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Va{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jf=new sn(3e4,6e4);function Fi(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ct(n,e,t,s,i={}){return Ha(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yt({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:c,...r};return zc()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&mt(n.emulatorConfig.host)&&(l.credentials="include"),Va.fetch()(await ja(n,n.config.apiHost,t,a),l)})}async function Ha(n,e,t){n._canInitEmulator=!1;const s={...Vf,...e};try{const i=new Gf(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw hn(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xi(n,d,l);de(n,d)}}catch(i){if(i instanceof Be)throw i;de(n,"network-request-failed",{message:String(i)})}}async function $f(n,e,t,s,i={}){const r=await Ct(n,e,t,s,i);return"mfaPendingCredential"in r&&de(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function ja(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Mi(n.config,i):`${n.config.apiScheme}://${i}`;return Hf.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Gf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(le(this.auth,"network-request-failed")),jf.get())})}}function hn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=le(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function zf(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Mn(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qf(n,e=!1){const t=X(n),s=await t.getIdToken(e),i=Ui(s);C(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Lt(vs(i.auth_time)),issuedAtTime:Lt(vs(i.iat)),expirationTime:Lt(vs(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vs(n){return Number(n)*1e3}function Ui(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return pn("JWT malformed, contained fewer than 3 sections"),null;try{const i=vn(t);return i?JSON.parse(i):(pn("Failed to decode base64 JWT payload"),null)}catch(i){return pn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vr(n){const e=Ui(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Be&&Kf(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Kf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $s{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fn(n){var h;const e=n.auth,t=await n.getIdToken(),s=await Kt(n,Mn(e,{idToken:t}));C(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?$a(i.providerUserInfo):[],o=Jf(n.providerData,r),a=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new $s(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,d)}async function Qf(n){const e=X(n);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jf(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function $a(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Xf(n,e){const t=await Ha(n,{},async()=>{const s=yt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await ja(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&mt(n.emulatorConfig.host)&&(c.credentials="include"),Va.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zf(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",Fi(n,e))}/**
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
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(e.length!==0,"internal-error");const t=Vr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Xf(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new rt;return s&&(C(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(C(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
 */function ke(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ae{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Yf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $s(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qf(this,e)}reload(){return Qf(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(ze(this.auth));const e=await this.getIdToken();return await Kt(this,zf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:p,providerData:m,stsTokenManager:k}=t;C(h&&k,e,"internal-error");const L=rt.fromJSON(this.name,k);C(typeof h=="string",e,"internal-error"),ke(s,e.name),ke(i,e.name),C(typeof u=="boolean",e,"internal-error"),C(typeof p=="boolean",e,"internal-error"),ke(r,e.name),ke(o,e.name),ke(a,e.name),ke(c,e.name),ke(l,e.name),ke(d,e.name);const q=new ae({uid:h,auth:e,email:i,emailVerified:u,displayName:s,isAnonymous:p,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:L,createdAt:l,lastLoginAt:d});return m&&Array.isArray(m)&&(q.providerData=m.map(M=>({...M}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,s=!1){const i=new rt;i.updateFromServerResponse(t);const r=new ae({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Fn(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];C(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?$a(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new rt;a.updateFromIdToken(s);const c=new ae({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new $s(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Hr=new Map;function we(n){Te(n instanceof Function,"Expected a class definition");let e=Hr.get(n);return e?(Te(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hr.set(n,e),e)}/**
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
 */class Ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ga.type="NONE";const jr=Ga;/**
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
 */function _n(n,e,t){return`firebase:${n}:${e}:${t}`}class ot{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=_n(this.userKey,i.apiKey,r),this.fullPersistenceKey=_n("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mn(this.auth,{idToken:e}).catch(()=>{});return t?ae._fromGetAccountInfoResponse(this.auth,t,e):null}return ae._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ot(we(jr),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||we(jr);const o=_n(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const d=await l._get(o);if(d){let h;if(typeof d=="string"){const u=await Mn(e,{idToken:d}).catch(()=>{});if(!u)break;h=await ae._fromGetAccountInfoResponse(e,u,d)}else h=ae._fromJSON(e,d);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ot(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ot(r,e,s))}}/**
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
 */function $r(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ya(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(za(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ja(e))return"Blackberry";if(Xa(e))return"Webos";if(qa(e))return"Safari";if((e.includes("chrome/")||Ka(e))&&!e.includes("edge/"))return"Chrome";if(Qa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function za(n=Q()){return/firefox\//i.test(n)}function qa(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ka(n=Q()){return/crios\//i.test(n)}function Ya(n=Q()){return/iemobile/i.test(n)}function Qa(n=Q()){return/android/i.test(n)}function Ja(n=Q()){return/blackberry/i.test(n)}function Xa(n=Q()){return/webos/i.test(n)}function Wi(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ep(n=Q()){var e;return Wi(n)&&!!((e=window.navigator)!=null&&e.standalone)}function tp(){return Kc()&&document.documentMode===10}function Za(n=Q()){return Wi(n)||Qa(n)||Xa(n)||Ja(n)||/windows phone/i.test(n)||Ya(n)}/**
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
 */function ec(n,e=[]){let t;switch(n){case"Browser":t=$r(Q());break;case"Worker":t=`${$r(Q())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vt}/${s}`}/**
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
 */class np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sp(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",Fi(n,e))}/**
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
 */const ip=6;class rp{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ip,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class op{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ba,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await ot.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mn(this,{idToken:e}),s=await ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(ze(this));const t=e?X(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sp(this),t=new rp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Zf(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await ot.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ie(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Mf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ns(n){return X(n)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=il(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ap(n){Bi=n}function cp(n){return Bi.loadJS(n)}function lp(){return Bi.gapiScript}function hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function up(n,e){const t=ei(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(qe(r,e??{}))return i;de(i,"already-initialized")}return t.initialize({options:e})}function dp(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(we);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fp(n,e,t){const s=ns(n);C(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=tc(e),{host:o,port:a}=pp(e),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){C(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),C(qe(l,s.config.emulator)&&qe(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,mt(o)?(mo(`${r}//${o}${c}`),yo("Auth",!0)):_p()}function tc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pp(n){const e=tc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:zr(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:zr(o)}}}function zr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _p(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
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
 */async function at(n,e){return $f(n,"POST","/v1/accounts:signInWithIdp",Fi(n,e))}/**
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
 */const gp="http://localhost";class Xe extends nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):de("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Xe(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return at(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,at(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,at(e,t)}buildRequest(){const e={requestUri:gp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yt(t)}return e}}/**
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
 */class Vi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rn extends Vi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ne extends rn{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
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
 */class me extends rn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xe._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return me.credential(t,s)}catch{return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com";me.PROVIDER_ID="google.com";/**
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
 */class Re extends rn{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
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
 */class Ae extends rn{constructor(){super("twitter.com")}static credential(e,t){return Xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ae.credential(t,s)}catch{return null}}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com";Ae.PROVIDER_ID="twitter.com";/**
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
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ae._fromIdTokenResponse(e,s,i),o=qr(s);return new _t({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=qr(s);return new _t({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function qr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Un extends Be{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Un.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Un(e,t,s,i)}}function sc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Un._fromErrorAndOperation(n,r,e,s):r})}async function mp(n,e,t=!1){const s=await Kt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _t._forOperation(n,"link",s)}/**
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
 */async function yp(n,e,t=!1){const{auth:s}=n;if(ie(s.app))return Promise.reject(ze(s));const i="reauthenticate";try{const r=await Kt(n,sc(s,i,e,n),t);C(r.idToken,s,"internal-error");const o=Ui(r.idToken);C(o,s,"internal-error");const{sub:a}=o;return C(n.uid===a,s,"user-mismatch"),_t._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&de(s,"user-mismatch"),r}}/**
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
 */async function vp(n,e,t=!1){if(ie(n.app))return Promise.reject(ze(n));const s="signIn",i=await sc(n,s,e),r=await _t._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function wp(n,e,t,s){return X(n).onIdTokenChanged(e,t,s)}function Ip(n,e,t){return X(n).beforeAuthStateChanged(e,t)}function Ep(n,e,t,s){return X(n).onAuthStateChanged(e,t,s)}function Cp(n){return X(n).signOut()}const Wn="__sak";/**
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
 */class ic{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wn,"1"),this.storage.removeItem(Wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Tp=1e3,Sp=10;class rc extends ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Za(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);tp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sp):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rc.type="LOCAL";const bp=rc;/**
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
 */class oc extends ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oc.type="SESSION";const ac=oc;/**
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
 */function kp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ss(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await kp(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ss.receivers=[];/**
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
 */function Hi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Np{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Hi("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===l)switch(u.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(u.data.response);break;default:clearTimeout(d),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ue(){return window}function Rp(n){ue().location.href=n}/**
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
 */function cc(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Ap(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Op(){return cc()?self:null}/**
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
 */const lc="firebaseLocalStorageDb",Dp=1,Bn="firebaseLocalStorage",hc="fbase_key";class on{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function is(n,e){return n.transaction([Bn],e?"readwrite":"readonly").objectStore(Bn)}function xp(){const n=indexedDB.deleteDatabase(lc);return new on(n).toPromise()}function Gs(){const n=indexedDB.open(lc,Dp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Bn,{keyPath:hc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Bn)?e(s):(s.close(),await xp(),e(await Gs()))})})}async function Kr(n,e,t){const s=is(n,!0).put({[hc]:e,value:t});return new on(s).toPromise()}async function Lp(n,e){const t=is(n,!1).get(e),s=await new on(t).toPromise();return s===void 0?null:s.value}function Yr(n,e){const t=is(n,!0).delete(e);return new on(t).toPromise()}const Mp=800,Fp=3;class uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Fp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ss._getInstance(Op()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Ap(),!this.activeServiceWorker)return;this.sender=new Np(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gs();return await Kr(e,Wn,"1"),await Yr(e,Wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kr(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Lp(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=is(i,!1).getAll();return new on(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uc.type="LOCAL";const Up=uc;new sn(3e4,6e4);/**
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
 */function dc(n,e){return e?we(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ji extends nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,t){return at(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wp(n){return vp(n.auth,new ji(n),n.bypassAuthState)}function Bp(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),yp(t,new ji(n),n.bypassAuthState)}async function Vp(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),mp(t,new ji(n),n.bypassAuthState)}/**
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
 */class fc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return Bp;default:de(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hp=new sn(2e3,1e4);async function jp(n,e,t){if(ie(n.app))return Promise.reject(le(n,"operation-not-supported-in-this-environment"));const s=ns(n);Ff(n,e,Vi);const i=dc(s,t);return new Ge(s,"signInViaPopup",e,i).executeNotNull()}class Ge extends fc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ge.currentPopupAction&&Ge.currentPopupAction.cancel(),Ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=Hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hp.get())};e()}}Ge.currentPopupAction=null;/**
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
 */const $p="pendingRedirect",gn=new Map;class Gp extends fc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=gn.get(this.auth._key());if(!e){try{const s=await zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}gn.set(this.auth._key(),e)}return this.bypassAuthState||gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zp(n,e){const t=Yp(e),s=Kp(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function qp(n,e){gn.set(n._key(),e)}function Kp(n){return we(n._redirectPersistence)}function Yp(n){return _n($p,n.config.apiKey,n.name)}async function Qp(n,e,t=!1){if(ie(n.app))return Promise.reject(ze(n));const s=ns(n),i=dc(s,e),o=await new Gp(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Jp=10*60*1e3;class Xp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!pc(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}saveEventToCache(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}function Qr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pc(n);default:return!1}}/**
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
 */async function e_(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
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
 */const t_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n_=/^https?/;async function s_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await e_(n);for(const t of e)try{if(i_(t))return}catch{}de(n,"unauthorized-domain")}function i_(n){const e=js(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!n_.test(t))return!1;if(t_.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const r_=new sn(3e4,6e4);function Jr(){const n=ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function o_(n){return new Promise((e,t)=>{var i,r,o;function s(){Jr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jr(),t(le(n,"network-request-failed"))},timeout:r_.get()})}if((r=(i=ue().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=ue().gapi)!=null&&o.load)s();else{const a=hp("iframefcb");return ue()[a]=()=>{gapi.load?s():t(le(n,"network-request-failed"))},cp(`${lp()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw mn=null,e})}let mn=null;function a_(n){return mn=mn||o_(n),mn}/**
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
 */const c_=new sn(5e3,15e3),l_="__/auth/iframe",h_="emulator/auth/iframe",u_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f_(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mi(e,h_):`https://${n.config.authDomain}/${l_}`,s={apiKey:e.apiKey,appName:n.name,v:vt},i=d_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${yt(s).slice(1)}`}async function p_(n){const e=await a_(n),t=ue().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:f_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=le(n,"network-request-failed"),a=ue().setTimeout(()=>{r(o)},c_.get());function c(){ue().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const __={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g_=500,m_=600,y_="_blank",v_="http://localhost";class Xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w_(n,e,t,s=g_,i=m_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...__,width:s.toString(),height:i.toString(),top:r,left:o},l=Q().toLowerCase();t&&(a=Ka(l)?y_:t),za(l)&&(e=e||v_,c.scrollbars="yes");const d=Object.entries(c).reduce((u,[p,m])=>`${u}${p}=${m},`,"");if(ep(l)&&a!=="_self")return I_(e||"",a),new Xr(null);const h=window.open(e||"",a,d);C(h,n,"popup-blocked");try{h.focus()}catch{}return new Xr(h)}function I_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const E_="__/auth/handler",C_="emulator/auth/handler",T_=encodeURIComponent("fac");async function Zr(n,e,t,s,i,r){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:vt,eventId:i};if(e instanceof Vi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ts(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof rn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await n._getAppCheckToken(),l=c?`#${T_}=${encodeURIComponent(c)}`:"";return`${S_(n)}?${yt(a).slice(1)}${l}`}function S_({config:n}){return n.emulator?Mi(n,C_):`https://${n.authDomain}/${E_}`}/**
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
 */const ws="webStorageSupport";class b_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ac,this._completeRedirectFn=Qp,this._overrideRedirectResult=qp}async _openPopup(e,t,s,i){var o;Te((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Zr(e,t,s,js(),i);return w_(e,r,Hi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Zr(e,t,s,js(),i);return Rp(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Te(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await p_(e),s=new Xp(e);return t.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ws,{type:ws},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[ws];r!==void 0&&t(!!r),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=s_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Za()||qa()||Wi()}}const k_=b_;var eo="@firebase/auth",to="1.12.0";/**
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
 */class N_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function R_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A_(n){lt(new Ke("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ec(n)},l=new op(s,i,r,c);return dp(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),lt(new Ke("auth-internal",e=>{const t=ns(e.getProvider("auth").getImmediate());return(s=>new N_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(eo,to,R_(n)),xe(eo,to,"esm2020")}/**
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
 */const P_=5*60,O_=go("authIdTokenMaxAge")||P_;let no=null;const D_=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>O_)return;const i=t==null?void 0:t.token;no!==i&&(no=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function x_(n=To()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=up(n,{popupRedirectResolver:k_,persistence:[Up,bp,ac]}),s=go("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=D_(r.toString());Ip(t,o,()=>o(t.currentUser)),wp(t,a=>o(a))}}const i=po("auth");return i&&fp(t,`http://${i}`),t}function L_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}ap({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=le("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",L_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A_("Browser");const M_={apiKey:"AIzaSyDEnZGjkOfZSaX5FzGR1cif2lIbFSfBmN0",authDomain:"sarange-pro.firebaseapp.com",projectId:"sarange-pro",storageBucket:"sarange-pro.firebasestorage.app",messagingSenderId:"663173287801",appId:"1:663173287801:web:79feba99d60aee6396a9a8",databaseURL:"https://sarange-pro-default-rtdb.europe-west1.firebasedatabase.app/"},_c=Co(M_),ge=Of(_c),zs=x_(_c),F_=new me,U_=(...n)=>n.filter(Boolean).join(" "),Mt=({onClick:n,variant:e="primary",children:t,icon:s,disabled:i=!1,className:r="",type:o="button"})=>{const a={primary:"bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-300 shadow-lg shadow-brand-500/25 focus-visible:ring-brand-300",whatsapp:"bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20 focus-visible:ring-green-300",secondary:"bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 focus-visible:ring-brand-200",danger:"bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-900/30 focus-visible:ring-red-200",ghost:"text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-brand-200"},c=[];return s&&c.push(ee.createElement(s,{key:"icon",size:18,className:t?"mr-2":void 0})),c.push(t),ee.createElement("button",{type:o,onClick:n,disabled:i,className:U_("inline-flex items-center justify-center px-4 py-3 rounded-full font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-4",a[e]||a.primary,r)},c)},W_=(...n)=>n.filter(Boolean).join(" "),B_=({message:n,type:e="success",onClose:t})=>{F.useEffect(()=>{const i=setTimeout(t,3e3);return()=>clearTimeout(i)},[t]);const s=e==="error"?"bg-red-500":"bg-slate-800";return ee.createElement("div",{className:W_("fixed bottom-4 right-4 text-white px-6 py-3 rounded-xl shadow-xl z-50 animate-slide-up flex items-center gap-3",s)},e==="success"&&ee.createElement(Ic,{size:20,className:"text-green-400"}),ee.createElement("span",{className:"font-medium"},n))},gc=F.createContext(null),sg=()=>F.useContext(gc),V_="699593246334-05mr710cpof5efgbgra54mpoog2ghma7.apps.googleusercontent.com",H_="AIzaSyAFfQEdzncY0XpTfsuYikj7oVP6uLHj7PE",j_="https://www.googleapis.com/auth/calendar",$_=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];let qs,Is=!1,Es=!1,un=null;const $i=()=>un||(un=new Promise((n,e)=>{const t=setInterval(()=>{window.gapi&&window.google&&(clearInterval(t),i(),r())},100);setTimeout(()=>{clearInterval(t),(!Is||!Es)&&console.warn("⚠️ Scripts Google non chargés après 10s")},1e4);function s(){Is&&Es&&(console.log("✅ Google Calendar API (GIS) : Prêt"),n())}async function i(){window.gapi.load("client",async()=>{try{await window.gapi.client.init({apiKey:H_,discoveryDocs:$_}),Is=!0,s()}catch(o){console.error("Erreur init GAPI Client",o),e(o)}})}function r(){try{qs=window.google.accounts.oauth2.initTokenClient({client_id:V_,scope:j_,callback:""}),Es=!0,s()}catch(o){console.error("Erreur init GIS Token Client",o),e(o)}}}),un),G_=async n=>{try{await $i()}catch(l){return console.error("Impossible d'initialiser Google API",l),null}if(!window.gapi.client.getToken()){console.log("🔒 Demande de permission Google...");try{await so()}catch(l){return console.warn("Auth refusée ou fermée",l),null}}const e=!n.datePose&&n.status!=="POSE",t=e?"Sarange - Métrages":"Sarange - Pose",s=e?"5":"10",i=`${e?"MÉTRAGE":"POSE"} : ${n.client}`;if(!n.dateIntervention)return console.log("ℹ️ Pas de date d'intervention définie, lecture/écriture Google Calendar annulée."),null;let r;try{r=await Ks(t)}catch(l){if(l.status===401)console.log("🔄 Token expiré, renouvellement..."),await so(),r=await Ks(t);else return console.error("Erreur Agenda",l),null}const o=new Date(n.dateIntervention),a=new Date(o.getTime()+60*60*1e3),c={summary:i,location:n.adresse||"",description:`Client: ${n.client}
Tél: ${n.telephone||""}${n.notes?`

📝 Notes :
${n.notes}`:""}

Lien GPS: https://waze.com/ul?q=${encodeURIComponent(n.adresse||"")}`,start:{dateTime:o.toISOString(),timeZone:"Europe/Paris"},end:{dateTime:a.toISOString(),timeZone:"Europe/Paris"},colorId:s,reminders:{useDefault:!1,overrides:[{method:"popup",minutes:1440},{method:"popup",minutes:120},{method:"popup",minutes:10}]}};try{let l;if(n.googleEventId)try{l=await window.gapi.client.calendar.events.update({calendarId:r,eventId:n.googleEventId,resource:c})}catch(d){if(d.status===404)l=await window.gapi.client.calendar.events.insert({calendarId:r,resource:c});else throw d}else l=await window.gapi.client.calendar.events.insert({calendarId:r,resource:c});return console.log("✅ Synchro Google OK"),l.result.id}catch(l){return l.status===401?console.error("❌ Erreur 401 sur Event (Token expiré ?)",l):console.error("❌ Erreur Sync Event",l),null}},Cs=async n=>{if(n.googleEventId)try{if(await $i(),!window.gapi.client.getToken()){console.warn("Pas de token, suppression GCal ignorée");return}const t=!n.datePose&&n.status!=="POSE"?"Sarange - Métrages":"Sarange - Pose",s=await Ks(t);await window.gapi.client.calendar.events.delete({calendarId:s,eventId:n.googleEventId}),console.log("🗑️ Événement Google supprimé")}catch(e){console.error("Erreur suppression GCal",e)}};function so(){return new Promise((n,e)=>{qs.callback=t=>{t.error?e(t):(window.gapi.client.setToken(t),n(t))},qs.requestAccessToken({prompt:""})})}async function Ks(n){const t=(await window.gapi.client.calendar.calendarList.list()).result.items.find(i=>i.summary===n);return t?t.id:(await window.gapi.client.calendar.calendars.insert({resource:{summary:n,timeZone:"Europe/Paris"}})).result.id}class z_ extends ee.Component{constructor(t){super(t);Gi(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,s){console.error("Uncaught error:",t,s),this.setState({errorInfo:s})}render(){return this.state.hasError?v.jsxs("div",{className:"flex flex-col items-center justify-center p-6 h-full min-h-[50vh] text-center animate-fade-in",children:[v.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-4",children:v.jsx(Ec,{size:40,className:"text-red-500"})}),v.jsx("h2",{className:"text-xl font-bold text-slate-800 dark:text-white mb-2",children:"Oups, une erreur est survenue !"}),v.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs",children:"L'application a rencontré un problème inattendu. Ne vous inquiétez pas, vos données sont en sécurité."}),v.jsx("div",{className:"bg-slate-100 dark:bg-slate-800 p-3 rounded text-left text-xs font-mono text-red-500 mb-6 w-full max-w-sm overflow-auto max-h-32",children:this.state.error&&this.state.error.toString()}),v.jsx(Mt,{onClick:this.handleReload,icon:Cc,className:"shadow-lg",children:"Recharger l'application"})]}):this.props.children}}const q_=ee.lazy(()=>Vn(()=>import("./DashboardView-2xnZ1EWg.js"),__vite__mapDeps([0,1,2,3,4,5])).then(n=>({default:n.DashboardView}))),K_=ee.lazy(()=>Vn(()=>import("./ChantierDetailView-BhuvaDT9.js"),__vite__mapDeps([6,1,2,4,5,3])).then(n=>({default:n.ChantierDetailView}))),Y_=ee.lazy(()=>Vn(()=>import("./SettingsView-CfRDCiau.js"),__vite__mapDeps([7,1,3,5])).then(n=>({default:n.SettingsView}))),Q_=ee.lazy(()=>Vn(()=>import("./TrashView-Dh294I0O.js"),__vite__mapDeps([8,1,3,4,5])).then(n=>({default:n.TrashView}))),dn=["contact@sarange.fr"],io=({error:n})=>{const e=async()=>{try{await jp(zs,F_)}catch(t){console.error("Login Error",t),alert("Erreur de connexion : "+t.message)}};return v.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 p-4",children:[v.jsx("img",{src:"/favicon-512.png",alt:"SarangePro",className:"w-32 h-auto mb-6"}),v.jsx("h1",{className:"text-3xl font-bold text-slate-800 dark:text-white mb-2",children:"SarangePro"}),v.jsx("p",{className:"text-slate-500 mb-8",children:"Application de Métrage Professionnelle"}),n&&v.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6 max-w-sm text-center border border-red-200",children:[v.jsx(ro,{className:"inline-block mb-1"}),v.jsx("p",{className:"font-bold",children:n}),v.jsx("button",{onClick:()=>Cp(zs),className:"text-sm underline mt-2",children:"Se déconnecter"})]}),!n&&v.jsx(Mt,{onClick:e,className:"w-full max-w-xs py-3 text-lg shadow-lg",children:"Connexion Google"}),v.jsx("p",{className:"mt-8 text-xs text-slate-400",children:"Accès restreint au personnel autorisé."})]})},J_=({step:n,error:e,onRetry:t})=>{const[s,i]=F.useState(!1);return v.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 absolute inset-0 z-50 p-4",children:[v.jsx("img",{src:"/favicon-512.png",alt:"SarangePro",className:"w-24 h-auto mb-6 animate-pulse"}),v.jsx("h1",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-2",children:"SarangePro"}),e?v.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-800 p-6 rounded-xl max-w-sm w-full text-center animate-fade-in",children:[v.jsx(ro,{size:48,className:"mx-auto text-red-500 mb-4"}),v.jsx("h3",{className:"font-bold text-lg text-red-700 dark:text-red-300 mb-2",children:"Erreur de démarrage"}),v.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-6",children:e.message}),v.jsxs("div",{className:"space-y-3",children:[v.jsx(Mt,{onClick:t,variant:"primary",className:"w-full",children:"Réessayer"}),v.jsxs("div",{className:"flex gap-2",children:[v.jsx(Mt,{onClick:()=>i(!s),variant:"secondary",className:"flex-1 text-xs",children:"Logs"}),v.jsx(Mt,{onClick:()=>{const r=URL.createObjectURL(H.getBlob());window.open(r)},variant:"secondary",className:"flex-1 text-xs",children:"Download"})]})]})]}):v.jsxs("div",{className:"w-64",children:[v.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide",children:[v.jsx("span",{children:"Chargement..."}),v.jsx("span",{children:n})]}),v.jsx("div",{className:"h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",children:v.jsx("div",{className:"h-full bg-brand-600 animate-pulse w-full origin-left-right"})})]}),s&&v.jsx("div",{className:"mt-8 w-full max-w-lg bg-black text-green-400 font-mono text-xs p-4 rounded h-48 overflow-auto border border-slate-700 shadow-2xl",children:H.logs.map((r,o)=>v.jsxs("div",{children:[v.jsxs("span",{className:"opacity-50",children:["[",r.ts.split("T")[1].split(".")[0],"]"]})," ",v.jsx("span",{className:r.level==="error"?"text-red-400":r.level==="warn"?"text-amber-400":"",children:r.msg})]},o))})]})},X_=()=>{const[n,e]=F.useState(null),[t,s]=F.useState(!0),[i,r]=F.useState({chantiers:[],products:[],currentChantierId:null}),[o,a]=F.useState({loading:!0,step:"Init",error:null}),[c,l]=F.useState("list"),[d,h]=F.useState(!1),[u,p]=F.useState(navigator.onLine),[m,k]=F.useState(!1),[L,q]=F.useState(null),M=(g,_="success")=>q({message:g,type:_});F.useEffect(()=>{const g=Ep(zs,_=>{e(_),s(!1)});return()=>g()},[]),F.useEffect(()=>{$i().catch(console.error)},[]);const he=async()=>{try{a({loading:!0,step:"DB",error:null}),await se.init(),a(w=>({...w,step:"Données"}));const g=await se.get("sarange_root");let _=g||{chantiers:[],products:[]};if(_.chantiers=_.chantiers||[],_.products=_.products||[],navigator.onLine)try{H.info("Vérification Cloud...");const w=await Wr(qt(_e(ge),"sarange_root"));if(w.exists()){let A=w.val();A.chantiers=A.chantiers?Object.values(A.chantiers):[],A.products=A.products?Object.values(A.products):[],H.info("🔄 Fusion Cloud + Local (Secure)..."),_={...g,lastWriteTime:Math.max((g==null?void 0:g.lastWriteTime)||0,A.lastWriteTime||0),chantiers:an(A.chantiers,_.chantiers),products:an(A.products,_.products)},await se.set("sarange_root",_),H.info(`Fusion terminée : ${_.chantiers.length} chantiers`)}}catch(w){H.error("Erreur check cloud",w)}const E=30*24*60*60*1e3,R=Date.now();let y=!1;if(_.chantiers&&(_.chantiers=_.chantiers.map(A=>{const ne=A.sentAt||A.updatedAt,be=ne?new Date(ne).getTime():0,pe=R-be>5184e6;return!A.deleted&&!A.archived&&A.sendStatus==="SENT"&&pe?(y=!0,H.info(`📂 Auto-Archive: ${A.client} (${A.id})`),{...A,archived:!0}):A}),navigator.onLine)){const A=[];for(const ne of _.chantiers){const be=new Date(ne.updatedAt||0).getTime();ne.purged&&R-be>E?(If(_e(ge,"sarange_root/chantiers/"+ne.id)).then(()=>H.info(`💀 GC: Deleted physically ${ne.id}`)).catch(pe=>H.error("GC Fail",pe)),y=!0):A.push(ne)}_.chantiers=A}y&&(H.info("Auto-maintenance (GC) performed"),await se.set("sarange_root",_)),r(_),H.info("App Ready"),a({loading:!1,step:"Ready",error:null})}catch(g){console.error(g),H.error("Boot Failed",g),a({loading:!0,step:"Erreur",error:g})}};F.useEffect(()=>{n&&dn.includes(n.email)&&he()},[n]),F.useEffect(()=>{const g=()=>p(!0),_=()=>p(!1);return window.addEventListener("online",g),window.addEventListener("offline",_),()=>{window.removeEventListener("online",g),window.removeEventListener("offline",_)}},[]),F.useEffect(()=>{const g=_e(ge,".info/connected"),_=Tf(g,E=>{const R=E.val()===!0;k(R),R?H.info("✅ Firebase Connected"):H.warn("❌ Firebase Disconnected (Offline or Blocking)")});return()=>_()},[]);const Ve=F.useRef(null);F.useEffect(()=>{!n||!dn.includes(n.email)||o.loading||(Ve.current&&clearTimeout(Ve.current),Ve.current=setTimeout(async()=>{const g={...i,lastWriteTime:Date.now()};try{await se.set("sarange_root",g)}catch(_){H.error("AutoSave Local Fail",_)}if(navigator.onLine){const _={};i.chantiers.forEach(E=>{_["sarange_root/chantiers/"+E.id]=E}),i.products.forEach(E=>{_["sarange_root/products/"+E.id]=E}),_["sarange_root/lastWriteTime"]=Date.now(),Nt(_e(ge),_).then(()=>H.info("☁️ Synchro Cloud OK (Granular)")).catch(E=>console.error("Firebase Sync Fail",E))}},1e3))},[i,o.loading,n]),F.useEffect(()=>{d?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[d]);const rs=ee.useMemo(()=>({addChantier:g=>{r(_=>({..._,chantiers:[{...g,id:os(),updatedAt:new Date().toISOString()},..._.chantiers]})),M("Dossier créé")},updateChantier:(g,_)=>r(E=>({...E,chantiers:E.chantiers.map(R=>R.id===g?{...R,..._,updatedAt:new Date().toISOString()}:R)})),deleteChantier:g=>{r(_=>{const E=_.chantiers.find(y=>y.id===g);E&&E.googleEventId&&Cs(E).catch(console.error);const R={..._,chantiers:_.chantiers.map(y=>y.id===g?{...y,deleted:!0,deletedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}:y),lastWriteTime:Date.now()};if(se.set("sarange_root",R).catch(y=>console.error("Force Save Local Fail",y)),navigator.onLine&&n&&dn.includes(n.email)){const y={};y["sarange_root/chantiers/"+g]=R.chantiers.find(w=>w.id===g),y["sarange_root/lastWriteTime"]=R.lastWriteTime,Nt(_e(ge),y).catch(w=>console.error("Force Save Cloud Fail",w))}return R}),M("Dossier mis à la corbeille")},restoreChantier:g=>{r(_=>({..._,chantiers:_.chantiers.map(E=>E.id===g?{...E,deleted:!1,purged:!1,deletedAt:null,updatedAt:new Date().toISOString()}:E)})),M("Dossier restauré")},hardDeleteChantier:async g=>{const E={purged:!0,deleted:!0,updatedAt:new Date().toISOString()},R=i.chantiers.find(y=>y.id===g);R&&R.googleEventId&&Cs(R).catch(console.error),r(y=>({...y,chantiers:y.chantiers.map(w=>w.id===g?{...w,...E}:w)}));try{await Nt(_e(ge,"sarange_root/chantiers/"+g),E);const y={...i,chantiers:i.chantiers.map(w=>w.id===g?{...w,...E}:w),lastWriteTime:Date.now()};await se.set("sarange_root",y),M("Dossier supprimé définitivement")}catch(y){console.error(y),M("Erreur suppression","error")}},emptyTrash:async()=>{const g=i.chantiers.filter(y=>y.deleted&&!y.purged);if(g.length===0||!confirm(`Supprimer définitivement ${g.length} dossiers ?`))return;const _=new Date().toISOString();r(y=>({...y,chantiers:y.chantiers.map(w=>w.deleted&&!w.purged?{...w,purged:!0,updatedAt:_}:w)}));let E=0;const R={};for(const y of g)R["sarange_root/chantiers/"+y.id]={...y,purged:!0,updatedAt:_},E++;try{await Nt(_e(ge),R),M(`${E} dossiers supprimés`)}catch(y){console.error("Empty Trash Fail",y)}},selectChantier:g=>r(_=>({..._,currentChantierId:g})),saveProduct:g=>r(_=>{const E=new Date().toISOString(),R=_.products.find(y=>y.id===g.id);return{..._,products:R?_.products.map(y=>y.id===g.id?{...g,dateMaj:E,updatedAt:E}:y):[..._.products,{...g,updatedAt:E}]}}),deleteProduct:g=>r(_=>({..._,products:_.products.map(E=>E.id===g?{...E,deleted:!0,updatedAt:new Date().toISOString()}:E)})),duplicateChantier:g=>{const _=i.chantiers.find(w=>w.id===g);if(!_)return;const E=os(),R={..._,id:E,client:_.client+" (Copie)",date:new Date().toISOString(),updatedAt:new Date().toISOString(),dateFinalisation:null,sendStatus:"DRAFT",sentAt:null,lastError:null},y=i.products.filter(w=>w.chantierId===g&&!w.deleted).map(w=>({...w,id:os(),chantierId:E,updatedAt:new Date().toISOString()}));r(w=>({...w,chantiers:[R,...w.chantiers],products:[...w.products,...y]})),M("Dossier dupliqué")},updateChantierDate:async(g,_)=>{({...i});const E=i.chantiers.find(y=>y.id===g);if(!E)return;const R={...E,dateIntervention:_,updatedAt:new Date().toISOString()};r(y=>({...y,chantiers:y.chantiers.map(w=>w.id===g?R:w)}));try{if(!_&&E.googleEventId)Cs(E).catch(console.error),r(y=>({...y,chantiers:y.chantiers.map(w=>w.id===g?{...w,googleEventId:null}:w)})),se.set("sarange_root",{...i,chantiers:i.chantiers.map(y=>y.id===g?{...y,googleEventId:null}:y)}).catch(console.error);else if(_){const y=await G_(R);y&&(r(w=>({...w,chantiers:w.chantiers.map(A=>A.id===g?{...A,googleEventId:y}:A)})),se.set("sarange_root",{...i,chantiers:i.chantiers.map(w=>w.id===g?{...w,googleEventId:y}:w)}).catch(console.error))}}catch(y){console.error("Centralized GCal Sync Fail",y),M("Erreur synchro Google Calendar","error")}},importData:g=>{r(g),se.set("sarange_root",g).catch(_=>console.error(_))},forceSync:async()=>{if(!navigator.onLine){M("Impossible : Pas de connexion internet","error");return}M("Synchronisation en cours...","info");try{const g=await Wr(qt(_e(ge),"sarange_root"));let _=g.exists()?g.val():{chantiers:{},products:{}};const E=_.chantiers?Object.values(_.chantiers):[],R=_.products?Object.values(_.products):[],y=an(E,i.chantiers),w=an(R,i.products),A=Math.max(_.lastWriteTime||0,i.lastWriteTime||0,Date.now()),ne={...i,chantiers:y,products:w,lastWriteTime:A};r(ne),await se.set("sarange_root",ne);const be={};y.forEach(pe=>be["sarange_root/chantiers/"+pe.id]=pe),w.forEach(pe=>be["sarange_root/products/"+pe.id]=pe),be["sarange_root/lastWriteTime"]=A,await Nt(_e(ge),be),M("Synchronisation terminée avec succès !","success"),H.info("🔄 Force Sync Complete")}catch(g){console.error("Force Sync Fail",g),M("Erreur Sync : "+g.message,"error"),H.error("Force Sync Fail",g)}}}),[i,n]);if(t)return v.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900",children:v.jsx(Ki,{size:40,className:"text-brand-600"})});if(!n)return v.jsx(io,{});if(!dn.includes(n.email))return v.jsx(io,{error:`Accès Refusé : Le compte ${n.email} n'est pas autorisé.`});if(o.loading)return v.jsx(J_,{step:o.step,error:o.error,onRetry:he});const mc=()=>v.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900",children:v.jsx(Ki,{size:40,className:"text-brand-600"})});return v.jsx(gc.Provider,{value:{state:i,...rs},children:v.jsxs("div",{className:"min-h-screen flex flex-col safe-pb",children:[v.jsx(z_,{children:v.jsx(F.Suspense,{fallback:v.jsx(mc,{}),children:c==="settings"?v.jsx(Y_,{onBack:()=>l("list"),state:i,onImport:rs.importData}):c==="trash"?v.jsx(Q_,{onBack:()=>l("list"),state:i,actions:rs}):i.currentChantierId?v.jsx(K_,{}):v.jsx(q_,{onNew:()=>l("new"),viewMode:c,setViewMode:l,isDark:d,toggleDark:()=>h(!d),onOpenSettings:()=>l("settings"),onOpenTrash:()=>l("trash"),isOnline:u,firebaseConnected:m})})}),L&&v.jsx(B_,{message:L.message,type:L.type,onClose:()=>q(null)})]})})},Z_=co(document.getElementById("root"));Z_.render(v.jsx(X_,{}));export{Mt as B,Ki as S,B_ as T,U_ as c,Cs as d,v as j,G_ as m,sg as u};
