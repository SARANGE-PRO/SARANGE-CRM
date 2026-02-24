const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MetrageModule-C-YqkNcL.js","assets/vendor-BhKfyhrK.js","assets/utils-CKkNC6ps.js","assets/CommercialModule-BhZ6prLy.js","assets/Modal-CalFg_z_.js","assets/Card-SCoU-xcW.js","assets/QuoteParserService-BHsDhh6M.js","assets/ChantierDetailView-C1IGi5nB.js","assets/StatusBanner-BIbTQqiz.js","assets/SmartAddress-CarXayvO.js","assets/calendar-CKSkTVT9.js","assets/googleDrive-C2pMY-g8.js","assets/SettingsView-CPYrSe2a.js","assets/TrashView-D8G7jZII.js"])))=>i.map(i=>d[i]);
var Nc=Object.defineProperty;var Ac=(n,e,t)=>e in n?Nc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Zi=(n,e,t)=>Ac(n,typeof e!="symbol"?e+"":e,t);import{r as L,a as Rc,R as Z,L as Pc,C as xc,A as Oc,b as Dc,X as Lc,c as Mc,B as Fc,P as Uc,F as Wc,d as Bc,T as Vc,e as jc,M as Hc,f as po}from"./vendor-BhKfyhrK.js";import{D as te,L as W,s as $c,m as un,g as dn,C as fn}from"./utils-CKkNC6ps.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Gc="modulepreload",zc=function(n){return"/"+n},er={},mt=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=zc(c),c in er)return;er[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Gc,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};var _o={exports:{}},Yn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=L,Kc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Qc=Object.prototype.hasOwnProperty,Jc=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xc={key:!0,ref:!0,__self:!0,__source:!0};function go(n,e,t){var s,i={},r=null,o=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)Qc.call(e,s)&&!Xc.hasOwnProperty(s)&&(i[s]=e[s]);if(n&&n.defaultProps)for(s in e=n.defaultProps,e)i[s]===void 0&&(i[s]=e[s]);return{$$typeof:Kc,type:n,key:r,ref:o,props:i,_owner:Jc.current}}Yn.Fragment=Yc;Yn.jsx=go;Yn.jsxs=go;_o.exports=Yn;var _=_o.exports,mo,tr=Rc;mo=tr.createRoot,tr.hydrateRoot;const Zc=(...n)=>n.filter(Boolean).join(" "),nr=({size:n="md",className:e=""})=>{const t={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12"};return Z.createElement("div",{className:Zc("animate-spin rounded-full border-2 border-brand-600 border-t-transparent",t[n],e)})},el=()=>{};var sr={};/**
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
 */const yo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const g=function(n,e){if(!n)throw yt(e)},yt=function(n){return new Error("Firebase Database ("+yo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const vo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},tl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),s.push(t[u],t[h],t[d],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new nl;const d=r<<2|a>>4;if(s.push(d),l!==64){const m=a<<4&240|l>>2;if(s.push(m),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wo=function(n){const e=vo(n);return ei.encodeByteArray(e,!0)},bn=function(n){return wo(n).replace(/\./g,"")},Sn=function(n){try{return ei.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sl(n){return Io(void 0,n)}function Io(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!il(t)||(n[t]=Io(n[t],e[t]));return n}function il(n){return n!=="__proto__"}/**
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
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ol=()=>rl().__FIREBASE_DEFAULTS__,al=()=>{if(typeof process>"u"||typeof sr>"u")return;const n=sr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sn(n[1]);return e&&JSON.parse(e)},ti=()=>{try{return el()||ol()||al()||cl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eo=n=>{var e,t;return(t=(e=ti())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ll=n=>{const e=Eo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Co=()=>{var n;return(n=ti())==null?void 0:n.config},bo=n=>{var e;return(e=ti())==null?void 0:e[`_${n}`]};/**
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
 */class Jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function vt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function So(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bn(JSON.stringify(t)),bn(JSON.stringify(o)),""].join(".")}const Pt={};function ul(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pt))Pt[e]?n.emulator.push(e):n.prod.push(e);return n}function dl(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ir=!1;function To(n,e){if(typeof window>"u"||typeof document>"u"||!vt(window.location.host)||Pt[n]===e||Pt[n]||ir)return;Pt[n]=e;function t(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=ul().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ir=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=dl(s),m=t("text"),v=document.getElementById(m)||document.createElement("span"),N=t("learnmore"),M=document.getElementById(N)||document.createElement("a"),q=t("preprendIcon"),K=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const ue=d.element;a(ue),u(M,N);const tt=l();c(K,q),ue.append(K,v,M,tt),document.body.appendChild(ue)}r?(v.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ni(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function fl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _l(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gl(){return yo.NODE_ADMIN===!0}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function yl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const vl="FirebaseError";class Ve extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=vl,Object.setPrototypeOf(this,Ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xt.prototype.create)}}class Xt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?wl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ve(i,a,s)}}function wl(n,e){return n.replace(Il,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Il=/\{\$([^}]+)}/g;/**
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
 */function Wt(n){return JSON.parse(n)}function V(n){return JSON.stringify(n)}/**
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
 */const No=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Wt(Sn(r[0])||""),t=Wt(Sn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},El=function(n){const e=No(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Cl=function(n){const e=No(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function lt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Rs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function qe(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(rr(r)&&rr(o)){if(!qe(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function rr(n){return n!==null&&typeof n=="object"}/**
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
 */function wt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class bl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Sl(n,e){const t=new Tl(n,e);return t.subscribe.bind(t)}class Tl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");kl(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=fs),i.error===void 0&&(i.error=fs),i.complete===void 0&&(i.complete=fs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kl(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fs(){}function Qn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Nl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Jn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class Ke{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class Al{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Jt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pl(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Rl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rl(n){return n===je?void 0:n}function Pl(n){return n.instantiationMode==="EAGER"}/**
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
 */class xl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Al(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Ol={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Dl=P.INFO,Ll={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Ml=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ll[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class si{constructor(e){this.name=e,this._logLevel=Dl,this._logHandler=Ml,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ol[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Fl=(n,e)=>e.some(t=>n instanceof t);let or,ar;function Ul(){return or||(or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wl(){return ar||(ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ao=new WeakMap,Ps=new WeakMap,Ro=new WeakMap,ps=new WeakMap,ii=new WeakMap;function Bl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Oe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ao.set(t,n)}).catch(()=>{}),ii.set(e,n),e}function Vl(n){if(Ps.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ps.set(n,e)}let xs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ps.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ro.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jl(n){xs=n(xs)}function Hl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(_s(this),e,...t);return Ro.set(s,e.sort?e.sort():[e]),Oe(s)}:Wl().includes(n)?function(...e){return n.apply(_s(this),e),Oe(Ao.get(this))}:function(...e){return Oe(n.apply(_s(this),e))}}function $l(n){return typeof n=="function"?Hl(n):(n instanceof IDBTransaction&&Vl(n),Fl(n,Ul())?new Proxy(n,xs):n)}function Oe(n){if(n instanceof IDBRequest)return Bl(n);if(ps.has(n))return ps.get(n);const e=$l(n);return e!==n&&(ps.set(n,e),ii.set(e,n)),e}const _s=n=>ii.get(n);function Gl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Oe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Oe(o.result),c.oldVersion,c.newVersion,Oe(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const zl=["get","getKey","getAll","getAllKeys","count"],ql=["put","add","delete","clear"],gs=new Map;function cr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gs.get(e))return gs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=ql.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||zl.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return gs.set(e,r),r}jl(n=>({...n,get:(e,t,s)=>cr(e,t)||n.get(e,t,s),has:(e,t)=>!!cr(e,t)||n.has(e,t)}));/**
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
 */class Kl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Yl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Os="@firebase/app",lr="0.14.8";/**
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
 */const Ce=new si("@firebase/app"),Ql="@firebase/app-compat",Jl="@firebase/analytics-compat",Xl="@firebase/analytics",Zl="@firebase/app-check-compat",eh="@firebase/app-check",th="@firebase/auth",nh="@firebase/auth-compat",sh="@firebase/database",ih="@firebase/data-connect",rh="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",ch="@firebase/installations",lh="@firebase/installations-compat",hh="@firebase/messaging",uh="@firebase/messaging-compat",dh="@firebase/performance",fh="@firebase/performance-compat",ph="@firebase/remote-config",_h="@firebase/remote-config-compat",gh="@firebase/storage",mh="@firebase/storage-compat",yh="@firebase/firestore",vh="@firebase/ai",wh="@firebase/firestore-compat",Ih="firebase",Eh="12.9.0";/**
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
 */const Ds="[DEFAULT]",Ch={[Os]:"fire-core",[Ql]:"fire-core-compat",[Xl]:"fire-analytics",[Jl]:"fire-analytics-compat",[eh]:"fire-app-check",[Zl]:"fire-app-check-compat",[th]:"fire-auth",[nh]:"fire-auth-compat",[sh]:"fire-rtdb",[ih]:"fire-data-connect",[rh]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[ch]:"fire-iid",[lh]:"fire-iid-compat",[hh]:"fire-fcm",[uh]:"fire-fcm-compat",[dh]:"fire-perf",[fh]:"fire-perf-compat",[ph]:"fire-rc",[_h]:"fire-rc-compat",[gh]:"fire-gcs",[mh]:"fire-gcs-compat",[yh]:"fire-fst",[wh]:"fire-fst-compat",[vh]:"fire-vertex","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
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
 */const kn=new Map,bh=new Map,Ls=new Map;function hr(n,e){try{n.container.addComponent(e)}catch(t){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ht(n){const e=n.name;if(Ls.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;Ls.set(e,n);for(const t of kn.values())hr(t,n);for(const t of bh.values())hr(t,n);return!0}function ri(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function re(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Sh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Xt("app","Firebase",Sh);/**
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
 */class Th{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const It=Eh;function Po(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ds,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw De.create("bad-app-name",{appName:String(i)});if(t||(t=Co()),!t)throw De.create("no-options");const r=kn.get(i);if(r){if(qe(t,r.options)&&qe(s,r.config))return r;throw De.create("duplicate-app",{appName:i})}const o=new xl(i);for(const c of Ls.values())o.addComponent(c);const a=new Th(t,s,o);return kn.set(i,a),a}function xo(n=Ds){const e=kn.get(n);if(!e&&n===Ds&&Co())return Po();if(!e)throw De.create("no-app",{appName:n});return e}function Le(n,e,t){let s=Ch[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(o.join(" "));return}ht(new Ke(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kh="firebase-heartbeat-database",Nh=1,Bt="firebase-heartbeat-store";let ms=null;function Oo(){return ms||(ms=Gl(kh,Nh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bt)}catch(t){console.warn(t)}}}}).catch(n=>{throw De.create("idb-open",{originalErrorMessage:n.message})})),ms}async function Ah(n){try{const t=(await Oo()).transaction(Bt),s=await t.objectStore(Bt).get(Do(n));return await t.done,s}catch(e){if(e instanceof Ve)Ce.warn(e.message);else{const t=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ce.warn(t.message)}}}async function ur(n,e){try{const s=(await Oo()).transaction(Bt,"readwrite");await s.objectStore(Bt).put(e,Do(n)),await s.done}catch(t){if(t instanceof Ve)Ce.warn(t.message);else{const s=De.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ce.warn(s.message)}}}function Do(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Rh=1024,Ph=30;class xh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=dr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ph){const o=Lh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ce.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dr(),{heartbeatsToSend:s,unsentEntries:i}=Oh(this._heartbeatsCache.heartbeats),r=bn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ce.warn(t),""}}}function dr(){return new Date().toISOString().substring(0,10)}function Oh(n,e=Rh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),fr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),fr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?yl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ah(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ur(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return ur(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fr(n){return bn(JSON.stringify({version:2,heartbeats:n})).length}function Lh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Mh(n){ht(new Ke("platform-logger",e=>new Kl(e),"PRIVATE")),ht(new Ke("heartbeat",e=>new xh(e),"PRIVATE")),Le(Os,lr,n),Le(Os,lr,"esm2020"),Le("fire-js","")}Mh("");var Fh="firebase",Uh="12.9.0";/**
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
 */Le(Fh,Uh,"app");var pr={};const _r="@firebase/database",gr="1.1.0";/**
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
 */let Lo="";function Wh(n){Lo=n}/**
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
 */class Bh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),V(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Vh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Mo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Bh(e)}}catch{}return new Vh},$e=Mo("localStorage"),jh=Mo("sessionStorage");/**
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
 */const it=new si("@firebase/database"),Hh=function(){let n=1;return function(){return n++}}(),Fo=function(n){const e=Nl(n),t=new bl;t.update(e);const s=t.digest();return ei.encodeByteArray(s)},Zt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zt.apply(null,s):typeof s=="object"?e+=V(s):e+=s,e+=" "}return e};let xt=null,mr=!0;const $h=function(n,e){g(!0,"Can't turn on custom loggers persistently."),it.logLevel=P.VERBOSE,xt=it.log.bind(it)},$=function(...n){if(mr===!0&&(mr=!1,xt===null&&jh.get("logging_enabled")===!0&&$h()),xt){const e=Zt.apply(null,n);xt(e)}},en=function(n){return function(...e){$(n,...e)}},Ms=function(...n){const e="FIREBASE INTERNAL ERROR: "+Zt(...n);it.error(e)},be=function(...n){const e=`FIREBASE FATAL ERROR: ${Zt(...n)}`;throw it.error(e),new Error(e)},Q=function(...n){const e="FIREBASE WARNING: "+Zt(...n);it.warn(e)},Gh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},oi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ut="[MIN_NAME]",Ye="[MAX_NAME]",Ze=function(n,e){if(n===e)return 0;if(n===ut||e===Ye)return-1;if(e===ut||n===Ye)return 1;{const t=yr(n),s=yr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},qh=function(n,e){return n===e?0:n<e?-1:1},Tt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+V(e))},ai=function(n){if(typeof n!="object"||n===null)return V(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=V(e[s]),t+=":",t+=ai(n[e[s]]);return t+="}",t},Uo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Wo=function(n){g(!oi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Kh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Yh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Qh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Jh=new RegExp("^-?(0*)\\d{1,10}$"),Xh=-2147483648,Zh=2147483647,yr=function(n){if(Jh.test(n)){const e=Number(n);if(e>=Xh&&e<=Zh)return e}return null},Et=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Q("Exception was thrown by user callback.",t),e},Math.floor(0))}},eu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ot=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class tu{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,re(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class nu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vn.OWNER="owner";/**
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
 */const ci="5",Bo="v",Vo="s",jo="r",Ho="f",$o=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Go="ls",zo="p",Fs="ac",qo="websocket",Ko="long_polling";/**
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
 */class Yo{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function su(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Qo(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===qo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ko)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);su(n)&&(t.ns=n.namespace);const i=[];return G(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class iu{constructor(){this.counters_={}}incrementCounter(e,t=1){pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return sl(this.counters_)}}/**
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
 */const ys={},vs={};function li(n){const e=n.toString();return ys[e]||(ys[e]=new iu),ys[e]}function ru(n,e){const t=n.toString();return vs[t]||(vs[t]=e()),vs[t]}/**
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
 */class ou{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Et(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vr="start",au="close",cu="pLPCommand",lu="pRTLPCB",Jo="id",Xo="pw",Zo="ser",hu="cb",uu="seg",du="ts",fu="d",pu="dframe",ea=1870,ta=30,_u=ea-ta,gu=25e3,mu=3e4;class st{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=en(e),this.stats_=li(t),this.urlFn=c=>(this.appCheckToken&&(c[Fs]=this.appCheckToken),Qo(t,Ko,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ou(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(mu)),zh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hi((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vr)this.id=a,this.password=c;else if(o===au)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vr]="t",s[Zo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hu]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bo]=ci,this.transportSessionId&&(s[Vo]=this.transportSessionId),this.lastSessionId&&(s[Go]=this.lastSessionId),this.applicationId&&(s[zo]=this.applicationId),this.appCheckToken&&(s[Fs]=this.appCheckToken),typeof location<"u"&&location.hostname&&$o.test(location.hostname)&&(s[jo]=Ho);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){st.forceAllow_=!0}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){return st.forceAllow_?!0:!st.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Kh()&&!Yh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wo(t),i=Uo(s,_u);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[pu]="t",s[Jo]=e,s[Xo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=V(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Hh(),window[cu+this.uniqueCallbackIdentifier]=e,window[lu+this.uniqueCallbackIdentifier]=t,this.myIFrame=hi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$("frame writing exception"),a.stack&&$(a.stack),$(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jo]=this.myID,e[Xo]=this.myPW,e[Zo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ta+s.length<=ea;){const o=this.pendingSegs.shift();s=s+"&"+uu+i+"="+o.seg+"&"+du+i+"="+o.ts+"&"+fu+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(gu)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const yu=16384,vu=45e3;let Nn=null;typeof MozWebSocket<"u"?Nn=MozWebSocket:typeof WebSocket<"u"&&(Nn=WebSocket);class oe{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=en(this.connId),this.stats_=li(t),this.connURL=oe.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Bo]=ci,typeof location<"u"&&location.hostname&&$o.test(location.hostname)&&(o[jo]=Ho),t&&(o[Vo]=t),s&&(o[Go]=s),i&&(o[Fs]=i),r&&(o[zo]=r),Qo(e,qo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$e.set("previous_websocket_failure",!0);try{let s;gl(),this.mySock=new Nn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Nn!==null&&!oe.forceDisallow_}static previouslyFailed(){return $e.isInMemoryStorage||$e.get("previous_websocket_failure")===!0}markConnectionHealthy(){$e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Wt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=V(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Uo(t,yu);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oe.responsesRequiredToBeHealthy=2;oe.healthyTimeout=3e4;/**
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
 */class Vt{static get ALL_TRANSPORTS(){return[st,oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=oe&&oe.isAvailable();let s=t&&!oe.previouslyFailed();if(e.webSocketOnly&&(t||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oe];else{const i=this.transports_=[];for(const r of Vt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vt.globalTransportInitialized_=!1;/**
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
 */const wu=6e4,Iu=5e3,Eu=10*1024,Cu=100*1024,ws="t",wr="d",bu="s",Ir="r",Su="e",Er="o",Cr="a",br="n",Sr="p",Tu="h";class ku{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=en("c:"+this.id+":"),this.transportManager_=new Vt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ot(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Eu?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ws in e){const t=e[ws];t===Cr?this.upgradeIfSecondaryHealthy_():t===Ir?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Er&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:br,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tt(ws,e);if(wr in e){const s=e[wr];if(t===Tu){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===br){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===bu?this.onConnectionShutdown_(s):t===Ir?this.onReset_(s):t===Su?Ms("Server Error: "+s):t===Er?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ms("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ci!==s&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ot(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ot(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Iu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class na{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class sa{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class An extends sa{static getInstance(){return new An}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ni()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Tr=32,kr=768;class x{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function A(){return new x("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ue(n){return n.pieces_.length-n.pieceNum_}function D(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new x(n.pieces_,e)}function ui(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Nu(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function jt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ia(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new x(e,0)}function F(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof x)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new x(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=S(n),s=S(e);if(t===null)return e;if(t===s)return Y(D(n),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Au(n,e){const t=jt(n,0),s=jt(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Ze(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function di(n,e){if(Ue(n)!==Ue(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ne(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Ue(n)>Ue(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Ru{constructor(e,t){this.errorPrefix_=t,this.parts_=jt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jn(this.parts_[s]);ra(this)}}function Pu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Jn(e),ra(n)}function xu(n){const e=n.parts_.pop();n.byteLength_-=Jn(e),n.parts_.length>0&&(n.byteLength_-=1)}function ra(n){if(n.byteLength_>kr)throw new Error(n.errorPrefix_+"has a key path longer than "+kr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Tr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tr+") or object contains a cycle "+He(n))}function He(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class fi extends sa{static getInstance(){return new fi}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const kt=1e3,Ou=60*5*1e3,Nr=30*1e3,Du=1.3,Lu=3e4,Mu="server_kill",Ar=3;class Ee extends na{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ee.nextPersistentConnectionId_++,this.log_=en("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kt,this.maxReconnectDelay_=Ou,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&An.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(V(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Jt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ee.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&pe(e,"w")){const s=lt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=El(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+V(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ms("Unrecognized action received from server: "+V(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Lu&&(this.reconnectDelay_=kt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Du)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ku(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Q(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mu)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Q(h),c())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rs(this.interruptReasons_)&&(this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ai(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new x(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){$("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ar&&(this.reconnectDelay_=Nr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ar&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Lo.replace(/\./g,"-")]=1,ni()?e["framework.cordova"]=1:ko()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=An.getInstance().currentlyOnline();return Rs(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
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
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
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
 */class Xn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new T(ut,e),i=new T(ut,t);return this.compare(s,i)!==0}minPost(){return T.MIN}}/**
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
 */let pn;class oa extends Xn{static get __EMPTY_NODE(){return pn}static set __EMPTY_NODE(e){pn=e}compare(e,t){return Ze(e.name,t.name)}isDefinedOn(e){throw yt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(Ye,pn)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,pn)}toString(){return".key"}}const rt=new oa;/**
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
 */class _n{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class H{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??H.RED,this.left=i??X.EMPTY_NODE,this.right=r??X.EMPTY_NODE}copy(e,t,s,i,r){return new H(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return X.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}H.RED=!0;H.BLACK=!1;class Fu{copy(e,t,s,i,r){return this}insert(e,t,s){return new H(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,t=X.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new X(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,H.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,H.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _n(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _n(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _n(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _n(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new Fu;/**
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
 */function Uu(n,e){return Ze(n.name,e.name)}function pi(n,e){return Ze(n,e)}/**
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
 */let Us;function Wu(n){Us=n}const aa=function(n){return typeof n=="number"?"number:"+Wo(n):"string:"+n},ca=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pe(e,".sv"),"Priority must be a string or number.")}else g(n===Us||n.isEmpty(),"priority of unexpected type.");g(n===Us||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rr;class j{static set __childrenNodeConstructor(e){Rr=e}static get __childrenNodeConstructor(){return Rr}constructor(e,t=j.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ca(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new j(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:S(e)===".priority"?this.priorityNode_:j.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:j.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=S(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||Ue(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,j.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+aa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Wo(this.value_):e+=this.value_,this.lazyHash_=Fo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===j.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof j.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=j.VALUE_TYPE_ORDER.indexOf(t),r=j.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}j.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let la,ha;function Bu(n){la=n}function Vu(n){ha=n}class ju extends Xn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ze(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Ye,new j("[PRIORITY-POST]",ha))}makePost(e,t){const s=la(e);return new T(t,new j("[PRIORITY-POST]",s))}toString(){return".priority"}}const U=new ju;/**
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
 */const Hu=Math.log(2);class $u{constructor(e){const t=r=>parseInt(Math.log(r)/Hu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rn=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new H(d,h.node,H.BLACK,null,null);{const m=parseInt(u/2,10)+c,v=i(c,m),N=i(m+1,l);return h=n[m],d=t?t(h):h,new H(d,h.node,H.BLACK,v,N)}},r=function(c){let l=null,u=null,h=n.length;const d=function(v,N){const M=h-v,q=h;h-=v;const K=i(M+1,q),ue=n[M],tt=t?t(ue):ue;m(new H(tt,ue.node,N,null,K))},m=function(v){l?(l.left=v,l=v):(u=v,l=v)};for(let v=0;v<c.count;++v){const N=c.nextBitIsOne(),M=Math.pow(2,c.count-(v+1));N?d(M,H.BLACK):(d(M,H.BLACK),d(M,H.RED))}return u},o=new $u(n.length),a=r(o);return new X(s||e,a)};/**
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
 */let Is;const nt={};class ve{static get Default(){return g(nt&&U,"ChildrenNode.ts has not been loaded"),Is=Is||new ve({".priority":nt},{".priority":U}),Is}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=lt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null}hasIndex(e){return pe(this.indexSet_,e.toString())}addIndex(e,t){g(e!==rt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(T.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rn(s,e.getCompare()):a=nt;const c=e.toString(),l={...this.indexSet_};l[c]=e;const u={...this.indexes_};return u[c]=a,new ve(u,l)}addToIndexes(e,t){const s=Tn(this.indexes_,(i,r)=>{const o=lt(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===nt)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(T.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Rn(a,o.getCompare())}else return nt;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new T(e.name,a))),c.insert(e,e.node)}});return new ve(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tn(this.indexes_,i=>{if(i===nt)return i;{const r=t.get(e.name);return r?i.remove(new T(e.name,r)):i}});return new ve(s,this.indexSet_)}}/**
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
 */let Nt;class C{static get EMPTY_NODE(){return Nt||(Nt=new C(new X(pi),null,ve.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ca(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Nt:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new T(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Nt:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=S(e);if(s===null)return t;{g(S(e)!==".priority"||Ue(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(D(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(U,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+aa(this.getPriority().val())+":"),this.forEachChild(U,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tn?-1:0}withIndex(e){if(e===rt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(U),i=t.getIterator(U);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gu extends C{constructor(){super(new X(pi),C.EMPTY_NODE,ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const tn=new Gu;Object.defineProperties(T,{MIN:{value:new T(ut,C.EMPTY_NODE)},MAX:{value:new T(Ye,tn)}});oa.__EMPTY_NODE=C.EMPTY_NODE;j.__childrenNodeConstructor=C;Wu(tn);Vu(tn);/**
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
 */const zu=!0;function B(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new j(t,B(e))}if(!(n instanceof Array)&&zu){const t=[];let s=!1;if(G(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=B(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new T(o,c)))}}),t.length===0)return C.EMPTY_NODE;const r=Rn(t,Uu,o=>o.name,pi);if(s){const o=Rn(t,U.getCompare());return new C(r,B(e),new ve({".priority":o},{".priority":U}))}else return new C(r,B(e),ve.Default)}else{let t=C.EMPTY_NODE;return G(n,(s,i)=>{if(pe(n,s)&&s.substring(0,1)!=="."){const r=B(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(B(e))}}Bu(B);/**
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
 */class qu extends Xn{constructor(e){super(),this.indexPath_=e,g(!k(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ze(e.name,t.name):r}makePost(e,t){const s=B(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new T(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,tn);return new T(Ye,e)}toString(){return jt(this.indexPath_,0).join("/")}}/**
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
 */class Ku extends Xn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ze(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const s=B(e);return new T(t,s)}toString(){return".value"}}const Yu=new Ku;/**
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
 */function ua(n){return{type:"value",snapshotNode:n}}function dt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ht(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function $t(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Qu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class _i{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Ht(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(dt(t,s)):o.trackChildChange($t(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(U,(i,r)=>{t.hasChild(i)||s.trackChildChange(Ht(i,r))}),t.isLeafNode()||t.forEachChild(U,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange($t(i,r,o))}else s.trackChildChange(dt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Gt{constructor(e){this.indexedFilter_=new _i(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gt.getStartPost_(e),this.endPost_=Gt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new T(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(U,(o,a)=>{r.matches(new T(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ju{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new T(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,m)=>h(m,d)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const c=new T(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,c);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange($t(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Ht(t,h));const N=a.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dt(d.name,d.node)),N.updateImmediateChild(d.name,d.node)):N}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Ht(l.name,l.node)),r.trackChildChange(dt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,C.EMPTY_NODE)):e}}/**
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
 */class gi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=U}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ut}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ye}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===U}copy(){const e=new gi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xu(n){return n.loadsAllData()?new _i(n.getIndex()):n.hasLimit()?new Ju(n):new Gt(n)}function Pr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===U?t="$priority":n.index_===Yu?t="$value":n.index_===rt?t="$key":(g(n.index_ instanceof qu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=V(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=V(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+V(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=V(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+V(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function xr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==U&&(e.i=n.index_.toString()),e}/**
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
 */class Pn extends na{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=en("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pn.getListenId_(e,s),a={};this.listens_[o]=a;const c=Pr(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),lt(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=Pn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Pr(e._queryParams),s=e._path.toString(),i=new Jt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Wt(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Zu{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function xn(){return{value:null,children:new Map}}function da(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=S(e);n.children.has(s)||n.children.set(s,xn());const i=n.children.get(s);e=D(e),da(i,e,t)}}function Ws(n,e,t){n.value!==null?t(e,n.value):ed(n,(s,i)=>{const r=new x(e.toString()+"/"+s);Ws(i,r,t)})}function ed(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class td{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&G(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Or=10*1e3,nd=30*1e3,sd=5*60*1e3;class id{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new td(e);const s=Or+(nd-Or)*Math.random();Ot(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;G(e,(i,r)=>{r>0&&pe(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ot(this.reportStats_.bind(this),Math.floor(Math.random()*2*sd))}}/**
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
 */var ae;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ae||(ae={}));function mi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class On{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ae.ACK_USER_WRITE,this.source=mi()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new x(e));return new On(A(),t,this.revert)}}else return g(S(this.path)===e,"operationForChild called for unrelated child."),new On(D(this.path),this.affectedTree,this.revert)}}/**
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
 */class zt{constructor(e,t){this.source=e,this.path=t,this.type=ae.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new zt(this.source,A()):new zt(this.source,D(this.path))}}/**
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
 */class Qe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ae.OVERWRITE}operationForChild(e){return k(this.path)?new Qe(this.source,A(),this.snap.getImmediateChild(e)):new Qe(this.source,D(this.path),this.snap)}}/**
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
 */class ft{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ae.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new x(e));return t.isEmpty()?null:t.value?new Qe(this.source,A(),t.value):new ft(this.source,A(),t)}else return g(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ft(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class We{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class rd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function od(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Qu(o.childName,o.snapshotNode))}),At(n,i,"child_removed",e,s,t),At(n,i,"child_added",e,s,t),At(n,i,"child_moved",r,s,t),At(n,i,"child_changed",e,s,t),At(n,i,"value",e,s,t),i}function At(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>cd(n,a,c)),o.forEach(a=>{const c=ad(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function ad(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function cd(n,e,t){if(e.childName==null||t.childName==null)throw yt("Should only compare child_ events.");const s=new T(e.childName,e.snapshotNode),i=new T(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Zn(n,e){return{eventCache:n,serverCache:e}}function Dt(n,e,t,s){return Zn(new We(e,t,s),n.serverCache)}function fa(n,e,t,s){return Zn(n.eventCache,new We(e,t,s))}function Dn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Je(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Es;const ld=()=>(Es||(Es=new X(qh)),Es);class O{static fromObject(e){let t=new O(null);return G(e,(s,i)=>{t=t.set(new x(s),i)}),t}constructor(e,t=ld()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:A(),value:this.value};if(k(e))return null;{const s=S(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(D(e),t);return r!=null?{path:F(new x(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=S(e),s=this.children.get(t);return s!==null?s.subtree(D(e)):new O(null)}}set(e,t){if(k(e))return new O(t,this.children);{const s=S(e),r=(this.children.get(s)||new O(null)).set(D(e),t),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(k(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const t=S(e),s=this.children.get(t);if(s){const i=s.remove(D(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=S(e),s=this.children.get(t);return s?s.get(D(e)):null}}setTree(e,t){if(k(e))return t;{const s=S(e),r=(this.children.get(s)||new O(null)).setTree(D(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(F(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,A(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(k(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(D(e),F(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,A(),t)}foreachOnPath_(e,t,s){if(k(e))return this;{this.value&&s(t,this.value);const i=S(e),r=this.children.get(i);return r?r.foreachOnPath_(D(e),F(t,i),s):new O(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(F(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class le{constructor(e){this.writeTree_=e}static empty(){return new le(new O(null))}}function Lt(n,e,t){if(k(e))return new le(new O(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Y(i,e);return r=r.updateChild(o,t),new le(n.writeTree_.set(i,r))}else{const i=new O(t),r=n.writeTree_.setTree(e,i);return new le(r)}}}function Bs(n,e,t){let s=n;return G(t,(i,r)=>{s=Lt(s,F(e,i),r)}),s}function Dr(n,e){if(k(e))return le.empty();{const t=n.writeTree_.setTree(e,new O(null));return new le(t)}}function Vs(n,e){return et(n,e)!=null}function et(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function Lr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(U,(s,i)=>{e.push(new T(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new T(s,i.value))}),e}function Me(n,e){if(k(e))return n;{const t=et(n,e);return t!=null?new le(new O(t)):new le(n.writeTree_.subtree(e))}}function js(n){return n.writeTree_.isEmpty()}function pt(n,e){return pa(A(),n.writeTree_,e)}function pa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=pa(F(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(F(n,".priority"),s)),t}}/**
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
 */function es(n,e){return ya(e,n)}function hd(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Lt(n.visibleWrites,e,t)),n.lastWriteId=s}function ud(n,e,t,s){g(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Bs(n.visibleWrites,e,t),n.lastWriteId=s}function dd(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function fd(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&pd(a,s.path)?i=!1:ne(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return _d(n),!0;if(s.snap)n.visibleWrites=Dr(n.visibleWrites,s.path);else{const a=s.children;G(a,c=>{n.visibleWrites=Dr(n.visibleWrites,F(s.path,c))})}return!0}else return!1}function pd(n,e){if(n.snap)return ne(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ne(F(n.path,t),e))return!0;return!1}function _d(n){n.visibleWrites=_a(n.allWrites,gd,A()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gd(n){return n.visible}function _a(n,e,t){let s=le.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ne(t,o)?(a=Y(t,o),s=Lt(s,a,r.snap)):ne(o,t)&&(a=Y(o,t),s=Lt(s,A(),r.snap.getChild(a)));else if(r.children){if(ne(t,o))a=Y(t,o),s=Bs(s,a,r.children);else if(ne(o,t))if(a=Y(o,t),k(a))s=Bs(s,A(),r.children);else{const c=lt(r.children,S(a));if(c){const l=c.getChild(D(a));s=Lt(s,A(),l)}}}else throw yt("WriteRecord should have .snap or .children")}}return s}function ga(n,e,t,s,i){if(!s&&!i){const r=et(n.visibleWrites,e);if(r!=null)return r;{const o=Me(n.visibleWrites,e);if(js(o))return t;if(t==null&&!Vs(o,A()))return null;{const a=t||C.EMPTY_NODE;return pt(o,a)}}}else{const r=Me(n.visibleWrites,e);if(!i&&js(r))return t;if(!i&&t==null&&!Vs(r,A()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(ne(l.path,e)||ne(e,l.path))},a=_a(n.allWrites,o,e),c=t||C.EMPTY_NODE;return pt(a,c)}}}function md(n,e,t){let s=C.EMPTY_NODE;const i=et(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(U,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Me(n.visibleWrites,e);return t.forEachChild(U,(o,a)=>{const c=pt(Me(r,new x(o)),a);s=s.updateImmediateChild(o,c)}),Lr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Me(n.visibleWrites,e);return Lr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function yd(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,t);if(Vs(n.visibleWrites,r))return null;{const o=Me(n.visibleWrites,r);return js(o)?i.getChild(t):pt(o,i.getChild(t))}}function vd(n,e,t,s){const i=F(e,t),r=et(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Me(n.visibleWrites,i);return pt(o,s.getNode().getImmediateChild(t))}else return null}function wd(n,e){return et(n.visibleWrites,e)}function Id(n,e,t,s,i,r,o){let a;const c=Me(n.visibleWrites,e),l=et(c,A());if(l!=null)a=l;else if(t!=null)a=pt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=d.getNext();for(;m&&u.length<i;)h(m,s)!==0&&u.push(m),m=d.getNext();return u}else return[]}function Ed(){return{visibleWrites:le.empty(),allWrites:[],lastWriteId:-1}}function Ln(n,e,t,s){return ga(n.writeTree,n.treePath,e,t,s)}function wi(n,e){return md(n.writeTree,n.treePath,e)}function Mr(n,e,t,s){return yd(n.writeTree,n.treePath,e,t,s)}function Mn(n,e){return wd(n.writeTree,F(n.treePath,e))}function Cd(n,e,t,s,i,r){return Id(n.writeTree,n.treePath,e,t,s,i,r)}function Ii(n,e,t){return vd(n.writeTree,n.treePath,e,t)}function ma(n,e){return ya(F(n.treePath,e),n.writeTree)}function ya(n,e){return{treePath:n,writeTree:e}}/**
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
 */class bd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,$t(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ht(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,dt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,$t(s,e.snapshotNode,i.oldSnap));else throw yt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Sd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const va=new Sd;class Ei{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new We(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ii(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Je(this.viewCache_),r=Cd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Td(n){return{filter:n}}function kd(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Nd(n,e,t,s,i){const r=new bd;let o,a;if(t.type===ae.OVERWRITE){const l=t;l.source.fromUser?o=Hs(n,e,l.path,l.snap,s,i,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!k(l.path),o=Fn(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===ae.MERGE){const l=t;l.source.fromUser?o=Rd(n,e,l.path,l.children,s,i,r):(g(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$s(n,e,l.path,l.children,s,i,a,r))}else if(t.type===ae.ACK_USER_WRITE){const l=t;l.revert?o=Od(n,e,l.path,s,i,r):o=Pd(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===ae.LISTEN_COMPLETE)o=xd(n,e,t.path,s,r);else throw yt("Unknown operation type: "+t.type);const c=r.getChanges();return Ad(e,o,c),{viewCache:o,changes:c}}function Ad(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Dn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(ua(Dn(e)))}}function wa(n,e,t,s,i,r){const o=e.eventCache;if(Mn(s,t)!=null)return e;{let a,c;if(k(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Je(e),u=l instanceof C?l:C.EMPTY_NODE,h=wi(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Ln(s,Je(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=S(t);if(l===".priority"){g(Ue(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Mr(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=D(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Mr(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Ii(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Dt(e,a,o.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function Fn(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(k(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),m,null)}else{const m=S(t);if(!c.isCompleteForPath(t)&&Ue(t)>1)return e;const v=D(t),M=c.getNode().getImmediateChild(m).updateChild(v,s);m===".priority"?l=u.updatePriority(c.getNode(),M):l=u.updateChild(c.getNode(),m,M,v,va,null)}const h=fa(e,l,c.isFullyInitialized()||k(t),u.filtersNodes()),d=new Ei(i,h,r);return wa(n,h,t,i,d,a)}function Hs(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new Ei(i,e,r);if(k(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Dt(e,l,!0,n.filter.filtersNodes());else{const h=S(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Dt(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=D(t),m=a.getNode().getImmediateChild(h);let v;if(k(d))v=s;else{const N=u.getCompleteChild(h);N!=null?ui(d)===".priority"&&N.getChild(ia(d)).isEmpty()?v=N:v=N.updateChild(d,s):v=C.EMPTY_NODE}if(m.equals(v))c=e;else{const N=n.filter.updateChild(a.getNode(),h,v,d,u,o);c=Dt(e,N,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Fr(n,e){return n.eventCache.isCompleteForChild(e)}function Rd(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=F(t,c);Fr(e,S(u))&&(a=Hs(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=F(t,c);Fr(e,S(u))||(a=Hs(n,a,u,l,i,r,o))}),a}function Ur(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $s(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;k(t)?l=s:l=new O(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=Ur(n,m,d);c=Fn(n,c,new x(h),v,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const m=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),N=Ur(n,v,d);c=Fn(n,c,new x(h),N,i,r,o,a)}}),c}function Pd(n,e,t,s,i,r,o){if(Mn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(k(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Fn(n,e,t,c.getNode().getChild(t),i,r,a,o);if(k(t)){let l=new O(null);return c.getNode().forEachChild(rt,(u,h)=>{l=l.set(new x(u),h)}),$s(n,e,t,l,i,r,a,o)}else return e}else{let l=new O(null);return s.foreach((u,h)=>{const d=F(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),$s(n,e,t,l,i,r,a,o)}}function xd(n,e,t,s,i){const r=e.serverCache,o=fa(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return wa(n,o,t,s,va,i)}function Od(n,e,t,s,i,r){let o;if(Mn(s,t)!=null)return e;{const a=new Ei(s,e,i),c=e.eventCache.getNode();let l;if(k(t)||S(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ln(s,Je(e));else{const h=e.serverCache.getNode();g(h instanceof C,"serverChildren would be complete if leaf node"),u=wi(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=S(t);let h=Ii(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,D(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,C.EMPTY_NODE,D(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ln(s,Je(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Mn(s,A())!=null,Dt(e,l,o,n.filter.filtersNodes())}}/**
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
 */class Dd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _i(s.getIndex()),r=Xu(s);this.processor_=Td(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),u=new We(c,o.isFullyInitialized(),i.filtersNodes()),h=new We(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Zn(h,u),this.eventGenerator_=new rd(this.query_)}get query(){return this.query_}}function Ld(n){return n.viewCache_.serverCache.getNode()}function Md(n){return Dn(n.viewCache_)}function Fd(n,e){const t=Je(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function Wr(n){return n.eventRegistrations_.length===0}function Ud(n,e){n.eventRegistrations_.push(e)}function Br(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Vr(n,e,t,s){e.type===ae.MERGE&&e.source.queryId!==null&&(g(Je(n.viewCache_),"We should always have a full cache before handling merges"),g(Dn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Nd(n.processor_,i,e,t,s);return kd(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ia(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Wd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(U,(r,o)=>{s.push(dt(r,o))}),t.isFullyInitialized()&&s.push(ua(t.getNode())),Ia(n,s,t.getNode(),e)}function Ia(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return od(n.eventGenerator_,e,t,i)}/**
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
 */let Un;class Ea{constructor(){this.views=new Map}}function Bd(n){g(!Un,"__referenceConstructor has already been defined"),Un=n}function Vd(){return g(Un,"Reference.ts has not been loaded"),Un}function jd(n){return n.views.size===0}function Ci(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),Vr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Vr(o,e,t,s));return r}}function Ca(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ln(t,i?s:null),c=!1;a?c=!0:s instanceof C?(a=wi(t,s),c=!1):(a=C.EMPTY_NODE,c=!1);const l=Zn(new We(a,c,!1),new We(s,i,!1));return new Dd(e,l)}return o}function Hd(n,e,t,s,i,r){const o=Ca(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ud(o,t),Wd(o,t)}function $d(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Be(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(Br(l,t,s)),Wr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(Br(c,t,s)),Wr(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Be(n)&&r.push(new(Vd())(e._repo,e._path)),{removed:r,events:o}}function ba(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Fe(n,e){let t=null;for(const s of n.views.values())t=t||Fd(s,e);return t}function Sa(n,e){if(e._queryParams.loadsAllData())return ts(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Ta(n,e){return Sa(n,e)!=null}function Be(n){return ts(n)!=null}function ts(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wn;function Gd(n){g(!Wn,"__referenceConstructor has already been defined"),Wn=n}function zd(){return g(Wn,"Reference.ts has not been loaded"),Wn}let qd=1;class jr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=Ed(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ka(n,e,t,s,i){return hd(n.pendingWriteTree_,e,t,s,i),i?Ct(n,new Qe(mi(),e,t)):[]}function Kd(n,e,t,s){ud(n.pendingWriteTree_,e,t,s);const i=O.fromObject(t);return Ct(n,new ft(mi(),e,i))}function xe(n,e,t=!1){const s=dd(n.pendingWriteTree_,e);if(fd(n.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(A(),!0):G(s.children,o=>{r=r.set(new x(o),!0)}),Ct(n,new On(s.path,r,t))}else return[]}function nn(n,e,t){return Ct(n,new Qe(yi(),e,t))}function Yd(n,e,t){const s=O.fromObject(t);return Ct(n,new ft(yi(),e,s))}function Qd(n,e){return Ct(n,new zt(yi(),e))}function Jd(n,e,t){const s=Si(n,t);if(s){const i=Ti(s),r=i.path,o=i.queryId,a=Y(r,e),c=new zt(vi(o),a);return ki(n,r,c)}else return[]}function Bn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ta(o,e))){const c=$d(o,e,t,s);jd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,m)=>Be(m));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const m=ef(d);for(let v=0;v<m.length;++v){const N=m[v],M=N.query,q=Pa(n,N);n.listenProvider_.startListening(Mt(M),qt(n,M),q.hashFn,q.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(Mt(e),null):l.forEach(d=>{const m=n.queryToTagMap.get(ns(d));n.listenProvider_.stopListening(Mt(d),m)}))}tf(n,l)}return a}function Na(n,e,t,s){const i=Si(n,s);if(i!=null){const r=Ti(i),o=r.path,a=r.queryId,c=Y(o,e),l=new Qe(vi(a),c,t);return ki(n,o,l)}else return[]}function Xd(n,e,t,s){const i=Si(n,s);if(i){const r=Ti(i),o=r.path,a=r.queryId,c=Y(o,e),l=O.fromObject(t),u=new ft(vi(a),c,l);return ki(n,o,u)}else return[]}function Gs(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,m)=>{const v=Y(d,i);r=r||Fe(m,v),o=o||Be(m)});let a=n.syncPointTree_.get(i);a?(o=o||Be(a),r=r||Fe(a,A())):(a=new Ea,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((m,v)=>{const N=Fe(v,A());N&&(r=r.updateImmediateChild(m,N))}));const l=Ta(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=ns(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=nf();n.queryToTagMap.set(d,m),n.tagToQueryMap.set(m,d)}const u=es(n.pendingWriteTree_,i);let h=Hd(a,e,t,u,r,c);if(!l&&!o&&!s){const d=Sa(a,e);h=h.concat(sf(n,e,d))}return h}function bi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Y(o,e),l=Fe(a,c);if(l)return l});return ga(i,e,r,t,!0)}function Zd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=Y(l,t);s=s||Fe(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Fe(i,A()):(i=new Ea,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new We(s,!0,!1):null,a=es(n.pendingWriteTree_,e._path),c=Ca(i,e,a,r?o.getNode():C.EMPTY_NODE,r);return Md(c)}function Ct(n,e){return Aa(e,n.syncPointTree_,null,es(n.pendingWriteTree_,A()))}function Aa(n,e,t,s){if(k(n.path))return Ra(n,e,t,s);{const i=e.get(A());t==null&&i!=null&&(t=Fe(i,A()));let r=[];const o=S(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=ma(s,o);r=r.concat(Aa(a,c,l,u))}return i&&(r=r.concat(Ci(i,n,s,t))),r}}function Ra(n,e,t,s){const i=e.get(A());t==null&&i!=null&&(t=Fe(i,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=ma(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ra(u,a,c,l)))}),i&&(r=r.concat(Ci(i,n,s,t))),r}function Pa(n,e){const t=e.query,s=qt(n,t);return{hashFn:()=>(Ld(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Jd(n,t._path,s):Qd(n,t._path);{const r=Qh(i,t);return Bn(n,t,null,r)}}}}function qt(n,e){const t=ns(e);return n.queryToTagMap.get(t)}function ns(n){return n._path.toString()+"$"+n._queryIdentifier}function Si(n,e){return n.tagToQueryMap.get(e)}function Ti(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new x(n.substr(0,e))}}function ki(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=es(n.pendingWriteTree_,e);return Ci(s,t,i,null)}function ef(n){return n.fold((e,t,s)=>{if(t&&Be(t))return[ts(t)];{let i=[];return t&&(i=ba(t)),G(s,(r,o)=>{i=i.concat(o)}),i}})}function Mt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zd())(n._repo,n._path):n}function tf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ns(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function nf(){return qd++}function sf(n,e,t){const s=e._path,i=qt(n,e),r=Pa(n,t),o=n.listenProvider_.startListening(Mt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)g(!Be(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!k(l)&&u&&Be(u))return[ts(u).query];{let d=[];return u&&(d=d.concat(ba(u).map(m=>m.query))),G(h,(m,v)=>{d=d.concat(v)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Mt(u),qt(n,u))}}return o}/**
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
 */class Ni{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ni(t)}node(){return this.node_}}class Ai{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=F(this.path_,e);return new Ai(this.syncTree_,t)}node(){return bi(this.syncTree_,this.path_)}}const rf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Hr=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return of(n[".sv"],e,t);if(typeof n[".sv"]=="object")return af(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},of=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},af=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xa=function(n,e,t,s){return Ri(e,new Ai(t,n),s)},Oa=function(n,e,t){return Ri(n,new Ni(e),t)};function Ri(n,e,t){const s=n.getPriority().val(),i=Hr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Hr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new j(a,B(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new j(i))),o.forEachChild(U,(a,c)=>{const l=Ri(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Pi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function xi(n,e){let t=e instanceof x?e:new x(e),s=n,i=S(t);for(;i!==null;){const r=lt(s.node.children,i)||{children:{},childCount:0};s=new Pi(i,s,r),t=D(t),i=S(t)}return s}function bt(n){return n.node.value}function Da(n,e){n.node.value=e,zs(n)}function La(n){return n.node.childCount>0}function cf(n){return bt(n)===void 0&&!La(n)}function ss(n,e){G(n.node.children,(t,s)=>{e(new Pi(t,n,s))})}function Ma(n,e,t,s){t&&e(n),ss(n,i=>{Ma(i,e,!0)})}function lf(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sn(n){return new x(n.parent===null?n.name:sn(n.parent)+"/"+n.name)}function zs(n){n.parent!==null&&hf(n.parent,n.name,n)}function hf(n,e,t){const s=cf(t),i=pe(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,zs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,zs(n))}/**
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
 */const uf=/[\[\].#$\/\u0000-\u001F\u007F]/,df=/[\[\].#$\u0000-\u001F\u007F]/,Cs=10*1024*1024,Oi=function(n){return typeof n=="string"&&n.length!==0&&!uf.test(n)},Fa=function(n){return typeof n=="string"&&n.length!==0&&!df.test(n)},ff=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fa(n)},pf=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!oi(n)||n&&typeof n=="object"&&pe(n,".sv")},_f=function(n,e,t,s){is(Qn(n,"value"),e,t)},is=function(n,e,t){const s=t instanceof x?new Ru(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+He(s));if(typeof e=="function")throw new Error(n+"contains a function "+He(s)+" with contents = "+e.toString());if(oi(e))throw new Error(n+"contains "+e.toString()+" "+He(s));if(typeof e=="string"&&e.length>Cs/3&&Jn(e)>Cs)throw new Error(n+"contains a string greater than "+Cs+" utf8 bytes "+He(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(G(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Oi(o)))throw new Error(n+" contains an invalid key ("+o+") "+He(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pu(s,o),is(n,a,s),xu(s)}),i&&r)throw new Error(n+' contains ".value" child '+He(s)+" in addition to actual children.")}},gf=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=jt(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Oi(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Au);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ne(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},mf=function(n,e,t,s){const i=Qn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];G(e,(o,a)=>{const c=new x(o);if(is(i,a,F(t,c)),ui(c)===".priority"&&!pf(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),gf(i,r)},Ua=function(n,e,t,s){if(!Fa(t))throw new Error(Qn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yf=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ua(n,e,t)},Wa=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},vf=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ff(t))throw new Error(Qn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wf{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!di(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ba(n,e,t){rs(n,t),Va(n,s=>di(s,e))}function se(n,e,t){rs(n,t),Va(n,s=>ne(s,e)||ne(e,s))}function Va(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(If(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function If(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();xt&&$("event: "+t.toString()),Et(s)}}}/**
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
 */const Ef="repo_interrupt",Cf=25;class bf{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wf,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xn(),this.transactionQueueTree_=new Pi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sf(n,e,t){if(n.stats_=li(n.repoInfo_),n.forceRestClient_||eu())n.server_=new Pn(n.repoInfo_,(s,i,r,o)=>{$r(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Gr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{V(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ee(n.repoInfo_,e,(s,i,r,o)=>{$r(n,s,i,r,o)},s=>{Gr(n,s)},s=>{kf(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ru(n.repoInfo_,()=>new id(n.stats_,n.server_)),n.infoData_=new Zu,n.infoSyncTree_=new jr({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=nn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Di(n,"connected",!1),n.serverSyncTree_=new jr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);se(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Tf(n){const t=n.infoData_.getNode(new x(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function os(n){return rf({timestamp:Tf(n)})}function $r(n,e,t,s,i){n.dataUpdateCount++;const r=new x(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=Tn(t,l=>B(l));o=Xd(n.serverSyncTree_,r,c,i)}else{const c=B(t);o=Na(n.serverSyncTree_,r,c,i)}else if(s){const c=Tn(t,l=>B(l));o=Yd(n.serverSyncTree_,r,c)}else{const c=B(t);o=nn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=_t(n,r)),se(n.eventQueue_,a,o)}function Gr(n,e){Di(n,"connected",e),e===!1&&Pf(n)}function kf(n,e){G(e,(t,s)=>{Di(n,t,s)})}function Di(n,e,t){const s=new x("/.info/"+e),i=B(t);n.infoData_.updateSnapshot(s,i);const r=nn(n.infoSyncTree_,s,i);se(n.eventQueue_,s,r)}function Li(n){return n.nextWriteId_++}function Nf(n,e,t){const s=Zd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=B(i).withIndex(e._queryParams.getIndex());Gs(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=nn(n.serverSyncTree_,e._path,r);else{const a=qt(n.serverSyncTree_,e);o=Na(n.serverSyncTree_,e._path,r,a)}return se(n.eventQueue_,e._path,o),Bn(n.serverSyncTree_,e,t,null,!0),r},i=>(rn(n,"get for query "+V(e)+" failed: "+i),Promise.reject(new Error(i))))}function Af(n,e,t,s,i){rn(n,"set",{path:e.toString(),value:t,priority:s});const r=os(n),o=B(t,s),a=bi(n.serverSyncTree_,e),c=Oa(o,a,r),l=Li(n),u=ka(n.serverSyncTree_,e,c,l,!0);rs(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,m)=>{const v=d==="ok";v||Q("set at "+e+" failed: "+d);const N=xe(n.serverSyncTree_,l,!v);se(n.eventQueue_,e,N),qs(n,i,d,m)});const h=Fi(n,e);_t(n,h),se(n.eventQueue_,h,[])}function Rf(n,e,t,s){rn(n,"update",{path:e.toString(),value:t});let i=!0;const r=os(n),o={};if(G(t,(a,c)=>{i=!1,o[a]=xa(F(e,a),B(c),n.serverSyncTree_,r)}),i)$("update() called with empty data.  Don't do anything."),qs(n,s,"ok",void 0);else{const a=Li(n),c=Kd(n.serverSyncTree_,e,o,a);rs(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Q("update at "+e+" failed: "+l);const d=xe(n.serverSyncTree_,a,!h),m=d.length>0?_t(n,e):e;se(n.eventQueue_,m,d),qs(n,s,l,u)}),G(t,l=>{const u=Fi(n,F(e,l));_t(n,u)}),se(n.eventQueue_,e,[])}}function Pf(n){rn(n,"onDisconnectEvents");const e=os(n),t=xn();Ws(n.onDisconnect_,A(),(i,r)=>{const o=xa(i,r,n.serverSyncTree_,e);da(t,i,o)});let s=[];Ws(t,A(),(i,r)=>{s=s.concat(nn(n.serverSyncTree_,i,r));const o=Fi(n,i);_t(n,o)}),n.onDisconnect_=xn(),se(n.eventQueue_,A(),s)}function xf(n,e,t){let s;S(e._path)===".info"?s=Gs(n.infoSyncTree_,e,t):s=Gs(n.serverSyncTree_,e,t),Ba(n.eventQueue_,e._path,s)}function Of(n,e,t){let s;S(e._path)===".info"?s=Bn(n.infoSyncTree_,e,t):s=Bn(n.serverSyncTree_,e,t),Ba(n.eventQueue_,e._path,s)}function Df(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ef)}function rn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$(t,...e)}function qs(n,e,t,s){e&&Et(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ja(n,e,t){return bi(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Mi(n,e=n.transactionQueueTree_){if(e||as(n,e),bt(e)){const t=$a(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Lf(n,sn(e),t)}else La(e)&&ss(e,t=>{Mi(n,t)})}function Lf(n,e,t){const s=t.map(l=>l.currentWriteId),i=ja(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];g(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Y(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{rn(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(xe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();as(n,xi(n.transactionQueueTree_,e)),Mi(n,n.transactionQueueTree_),se(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Et(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Q("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}_t(n,e)}},o)}function _t(n,e){const t=Ha(n,e),s=sn(t),i=$a(n,t);return Mf(n,i,s),s}function Mf(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Y(t,c.path);let u=!1,h;if(g(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(xe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Cf)u=!0,h="maxretry",i=i.concat(xe(n.serverSyncTree_,c.currentWriteId,!0));else{const d=ja(n,c.path,o);c.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){is("transaction failed: Data returned ",m,c.path);let v=B(m);typeof m=="object"&&m!=null&&pe(m,".priority")||(v=v.updatePriority(d.getPriority()));const M=c.currentWriteId,q=os(n),K=Oa(v,d,q);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=K,c.currentWriteId=Li(n),o.splice(o.indexOf(M),1),i=i.concat(ka(n.serverSyncTree_,c.path,K,c.currentWriteId,c.applyLocally)),i=i.concat(xe(n.serverSyncTree_,M,!0))}else u=!0,h="nodata",i=i.concat(xe(n.serverSyncTree_,c.currentWriteId,!0))}se(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}as(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Et(s[a]);Mi(n,n.transactionQueueTree_)}function Ha(n,e){let t,s=n.transactionQueueTree_;for(t=S(e);t!==null&&bt(s)===void 0;)s=xi(s,t),e=D(e),t=S(e);return s}function $a(n,e){const t=[];return Ga(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ga(n,e,t){const s=bt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ss(e,i=>{Ga(n,i,t)})}function as(n,e){const t=bt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Da(e,t.length>0?t:void 0)}ss(e,s=>{as(n,s)})}function Fi(n,e){const t=sn(Ha(n,e)),s=xi(n.transactionQueueTree_,e);return lf(s,i=>{bs(n,i)}),bs(n,s),Ma(s,i=>{bs(n,i)}),t}function bs(n,e){const t=bt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Da(e,void 0):t.length=r+1,se(n.eventQueue_,sn(e),i);for(let o=0;o<s.length;o++)Et(s[o])}}/**
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
 */function Ff(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Uf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Q(`Invalid query segment '${t}' in query '${n}'`)}return e}const zr=function(n,e){const t=Wf(n),s=t.namespace;t.domain==="firebase.com"&&be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Gh();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Yo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new x(t.pathString)}},Wf=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Ff(n.substring(u,h)));const d=Uf(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const m=e.slice(0,l);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),t=e.substring(v+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Bf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+V(this.snapshot.exportVal())}}class Vf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class za{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ui{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return k(this._path)?null:ui(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=xr(this._queryParams),t=ai(e);return t==="{}"?"default":t}get _queryObject(){return xr(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Ui))return!1;const t=this._repo===e._repo,s=di(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Nu(this._path)}}class Te extends Ui{constructor(e,t){super(e,t,new gi,!1)}get parent(){const e=ia(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new x(e),s=Yt(this.ref,e);return new Kt(this._node.getChild(t),s,U)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kt(i,Yt(this.ref,s),U)))}hasChild(e){const t=new x(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ge(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?Yt(n._root,e):n._root}function Yt(n,e){return n=ee(n),S(n._path)===null?yf("child","path",e):Ua("child","path",e),new Te(n._repo,F(n._path,e))}function jf(n){return Wa("remove",n._path),Hf(n,null)}function Hf(n,e){n=ee(n),Wa("set",n._path),_f("set",e,n._path);const t=new Jt;return Af(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Rt(n,e){mf("update",e,n._path);const t=new Jt;return Rf(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function qr(n){n=ee(n);const e=new za(()=>{}),t=new cs(e);return Nf(n._repo,n,t).then(s=>new Kt(s,new Te(n._repo,n._path),n._queryParams.getIndex()))}class cs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Bf("value",this,new Kt(e.snapshotNode,new Te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Vf(this,e,t):null}matches(e){return e instanceof cs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $f(n,e,t,s,i){const r=new za(t,void 0),o=new cs(r);return xf(n._repo,n,o),()=>Of(n._repo,n,o)}function Gf(n,e,t,s){return $f(n,"value",e)}Bd(Te);Gd(Te);/**
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
 */const zf="FIREBASE_DATABASE_EMULATOR_HOST",Ks={};let qf=!1;function Kf(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=vt(r);n.repoInfo_=new Yo(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Yf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=zr(r,i),a=o.repoInfo,c;typeof process<"u"&&pr&&(c=pr[zf]),c?(r=`http://${c}?ns=${a.namespace}`,o=zr(r,i),a=o.repoInfo):o.repoInfo.secure;const l=new nu(n.name,n.options,e);vf("Invalid Firebase Database URL",o),k(o.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Jf(a,n,l,new tu(n,t));return new Xf(u,n)}function Qf(n,e){const t=Ks[e];(!t||t[n.key]!==n)&&be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Df(n),delete t[n.key]}function Jf(n,e,t,s){let i=Ks[e.name];i||(i={},Ks[e.name]=i);let r=i[n.toURLString()];return r&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new bf(n,qf,t,s),i[n.toURLString()]=r,r}class Xf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sf(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&be("Cannot call "+e+" on a deleted database.")}}function Zf(n=xo(),e){const t=ri(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ll("database");s&&ep(t,...s)}return t}function ep(n,e,t,s={}){n=ee(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&qe(s,r.repoInfo_.emulatorOptions))return;be("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new vn(vn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:hl(s.mockUserToken,n.app.options.projectId);o=new vn(a)}vt(e)&&(So(e),To("Database",!0)),Kf(r,i,s,o)}/**
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
 */function tp(n){Wh(It),ht(new Ke("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Yf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Le(_r,gr,n),Le(_r,gr,"esm2020")}Ee.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ee.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};tp();function qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const np=qa,Ka=new Xt("auth","Firebase",qa());/**
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
 */const Vn=new si("@firebase/auth");function sp(n,...e){Vn.logLevel<=P.WARN&&Vn.warn(`Auth (${It}): ${n}`,...e)}function wn(n,...e){Vn.logLevel<=P.ERROR&&Vn.error(`Auth (${It}): ${n}`,...e)}/**
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
 */function fe(n,...e){throw Bi(n,...e)}function he(n,...e){return Bi(n,...e)}function Wi(n,e,t){const s={...np(),[e]:t};return new Xt("auth","Firebase",s).create(e,{appName:n.name})}function ze(n){return Wi(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ip(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&fe(n,"argument-error"),Wi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bi(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ka.create(n,...e)}function b(n,e,...t){if(!n)throw Bi(e,...t)}function we(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wn(e),new Error(e)}function Se(n,e){n||we(e)}/**
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
 */function Ys(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function rp(){return Kr()==="http:"||Kr()==="https:"}function Kr(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function op(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rp()||pl()||"connection"in navigator)?navigator.onLine:!0}function ap(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class on{constructor(e,t){this.shortDelay=e,this.longDelay=t,Se(t>e,"Short delay should be less than long delay!"),this.isMobile=ni()||ko()}get(){return op()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vi(n,e){Se(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ya{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hp=new on(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function St(n,e,t,s,i={}){return Qa(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=wt({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:c,...r};return fl()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&vt(n.emulatorConfig.host)&&(l.credentials="include"),Ya.fetch()(await Ja(n,n.config.apiHost,t,a),l)})}async function Qa(n,e,t){n._canInitEmulator=!1;const s={...cp,...e};try{const i=new dp(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw gn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw gn(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wi(n,u,l);fe(n,u)}}catch(i){if(i instanceof Ve)throw i;fe(n,"network-request-failed",{message:String(i)})}}async function up(n,e,t,s,i={}){const r=await St(n,e,t,s,i);return"mfaPendingCredential"in r&&fe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ja(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Vi(n.config,i):`${n.config.apiScheme}://${i}`;return lp.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class dp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(he(this.auth,"network-request-failed")),hp.get())})}}function gn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=he(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function fp(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function jn(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ft(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pp(n,e=!1){const t=ee(n),s=await t.getIdToken(e),i=Hi(s);b(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ft(Ss(i.auth_time)),issuedAtTime:Ft(Ss(i.iat)),expirationTime:Ft(Ss(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ss(n){return Number(n)*1e3}function Hi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sn(t);return i?JSON.parse(i):(wn("Failed to decode base64 JWT payload"),null)}catch(i){return wn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yr(n){const e=Hi(n);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ve&&_p(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function _p({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hn(n){var h;const e=n.auth,t=await n.getIdToken(),s=await Qt(n,jn(e,{idToken:t}));b(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?Xa(i.providerUserInfo):[],o=yp(n.providerData,r),a=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Qs(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,u)}async function mp(n){const e=ee(n);await Hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yp(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Xa(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function vp(n,e){const t=await Qa(n,{},async()=>{const s=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Ja(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return n.emulatorConfig&&vt(n.emulatorConfig.host)&&(c.credentials="include"),Ya.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wp(n,e){return St(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
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
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){b(e.length!==0,"internal-error");const t=Yr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await vp(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new ot;return s&&(b(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(b(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
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
 */function Ne(n,e){b(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ce{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new gp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pp(this,e)}reload(){return mp(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ce({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Hn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(re(this.auth.app))return Promise.reject(ze(this.auth));const e=await this.getIdToken();return await Qt(this,fp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:m,providerData:v,stsTokenManager:N}=t;b(h&&N,e,"internal-error");const M=ot.fromJSON(this.name,N);b(typeof h=="string",e,"internal-error"),Ne(s,e.name),Ne(i,e.name),b(typeof d=="boolean",e,"internal-error"),b(typeof m=="boolean",e,"internal-error"),Ne(r,e.name),Ne(o,e.name),Ne(a,e.name),Ne(c,e.name),Ne(l,e.name),Ne(u,e.name);const q=new ce({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:m,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:M,createdAt:l,lastLoginAt:u});return v&&Array.isArray(v)&&(q.providerData=v.map(K=>({...K}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,s=!1){const i=new ot;i.updateFromServerResponse(t);const r=new ce({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Hn(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];b(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Xa(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ot;a.updateFromIdToken(s);const c=new ce({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Qs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Qr=new Map;function Ie(n){Se(n instanceof Function,"Expected a class definition");let e=Qr.get(n);return e?(Se(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qr.set(n,e),e)}/**
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
 */class Za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Za.type="NONE";const Jr=Za;/**
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
 */function In(n,e,t){return`firebase:${n}:${e}:${t}`}class at{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=In(this.userKey,i.apiKey,r),this.fullPersistenceKey=In("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await jn(this.auth,{idToken:e}).catch(()=>{});return t?ce._fromGetAccountInfoResponse(this.auth,t,e):null}return ce._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new at(Ie(Jr),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Ie(Jr);const o=In(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){let h;if(typeof u=="string"){const d=await jn(e,{idToken:u}).catch(()=>{});if(!d)break;h=await ce._fromGetAccountInfoResponse(e,d,u)}else h=ce._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new at(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new at(r,e,s))}}/**
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
 */function Xr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ec(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rc(e))return"Blackberry";if(oc(e))return"Webos";if(tc(e))return"Safari";if((e.includes("chrome/")||nc(e))&&!e.includes("edge/"))return"Chrome";if(ic(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ec(n=J()){return/firefox\//i.test(n)}function tc(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nc(n=J()){return/crios\//i.test(n)}function sc(n=J()){return/iemobile/i.test(n)}function ic(n=J()){return/android/i.test(n)}function rc(n=J()){return/blackberry/i.test(n)}function oc(n=J()){return/webos/i.test(n)}function $i(n=J()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ip(n=J()){var e;return $i(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ep(){return _l()&&document.documentMode===10}function ac(n=J()){return $i(n)||ic(n)||oc(n)||rc(n)||/windows phone/i.test(n)||sc(n)}/**
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
 */function cc(n,e=[]){let t;switch(n){case"Browser":t=Xr(J());break;case"Worker":t=`${Xr(J())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${It}/${s}`}/**
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
 */class Cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function bp(n,e={}){return St(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
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
 */const Sp=6;class Tp{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Sp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class kp{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zr(this),this.idTokenSubscription=new Zr(this),this.beforeStateQueue=new Cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await at.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jn(this,{idToken:e}),s=await ce._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(re(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(re(this.app))return Promise.reject(ze(this));const t=e?ee(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return re(this.app)?Promise.reject(ze(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return re(this.app)?Promise.reject(ze(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bp(this),t=new Tp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await wp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(re(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ls(n){return ee(n)}class Zr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sl(t=>this.observer=t)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Np(n){Gi=n}function Ap(n){return Gi.loadJS(n)}function Rp(){return Gi.gapiScript}function Pp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xp(n,e){const t=ri(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(qe(r,e??{}))return i;fe(i,"already-initialized")}return t.initialize({options:e})}function Op(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ie);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Dp(n,e,t){const s=ls(n);b(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=lc(e),{host:o,port:a}=Lp(e),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){b(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),b(qe(l,s.config.emulator)&&qe(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,vt(o)?(So(`${r}//${o}${c}`),To("Auth",!0)):Mp()}function lc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lp(n){const e=lc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:eo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:eo(o)}}}function eo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Mp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,t){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
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
 */async function ct(n,e){return up(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
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
 */const Fp="http://localhost";class Xe extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Xe(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ct(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:Fp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}/**
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
 */class zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class an extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ae extends an{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ae.PROVIDER_ID="facebook.com";/**
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
 */class ye extends an{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xe._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ye.credential(t,s)}catch{return null}}}ye.GOOGLE_SIGN_IN_METHOD="google.com";ye.PROVIDER_ID="google.com";/**
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
 */class Re extends an{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
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
 */class Pe extends an{constructor(){super("twitter.com")}static credential(e,t){return Xe._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Pe.credential(t,s)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
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
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await ce._fromIdTokenResponse(e,s,i),o=to(s);return new gt({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=to(s);return new gt({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function to(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $n extends Ve{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,$n.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new $n(e,t,s,i)}}function uc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$n._fromErrorAndOperation(n,r,e,s):r})}async function Up(n,e,t=!1){const s=await Qt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",s)}/**
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
 */async function Wp(n,e,t=!1){const{auth:s}=n;if(re(s.app))return Promise.reject(ze(s));const i="reauthenticate";try{const r=await Qt(n,uc(s,i,e,n),t);b(r.idToken,s,"internal-error");const o=Hi(r.idToken);b(o,s,"internal-error");const{sub:a}=o;return b(n.uid===a,s,"user-mismatch"),gt._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&fe(s,"user-mismatch"),r}}/**
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
 */async function Bp(n,e,t=!1){if(re(n.app))return Promise.reject(ze(n));const s="signIn",i=await uc(n,s,e),r=await gt._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Vp(n,e,t,s){return ee(n).onIdTokenChanged(e,t,s)}function jp(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function Hp(n,e,t,s){return ee(n).onAuthStateChanged(e,t,s)}function $p(n){return ee(n).signOut()}const Gn="__sak";/**
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
 */class dc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Gp=1e3,zp=10;class fc extends dc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Ep()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zp):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fc.type="LOCAL";const qp=fc;/**
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
 */class pc extends dc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pc.type="SESSION";const _c=pc;/**
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
 */function Kp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new hs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await Kp(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hs.receivers=[];/**
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
 */function qi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=qi("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function de(){return window}function Qp(n){de().location.href=n}/**
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
 */function gc(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Jp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Zp(){return gc()?self:null}/**
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
 */const mc="firebaseLocalStorageDb",e_=1,zn="firebaseLocalStorage",yc="fbase_key";class cn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function us(n,e){return n.transaction([zn],e?"readwrite":"readonly").objectStore(zn)}function t_(){const n=indexedDB.deleteDatabase(mc);return new cn(n).toPromise()}function Js(){const n=indexedDB.open(mc,e_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(zn,{keyPath:yc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(zn)?e(s):(s.close(),await t_(),e(await Js()))})})}async function no(n,e,t){const s=us(n,!0).put({[yc]:e,value:t});return new cn(s).toPromise()}async function n_(n,e){const t=us(n,!1).get(e),s=await new cn(t).toPromise();return s===void 0?null:s.value}function so(n,e){const t=us(n,!0).delete(e);return new cn(t).toPromise()}const s_=800,i_=3;class vc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>i_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hs._getInstance(Zp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Jp(),!this.activeServiceWorker)return;this.sender=new Yp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await no(e,Gn,"1"),await so(e,Gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>no(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>n_(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>so(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=us(i,!1).getAll();return new cn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vc.type="LOCAL";const r_=vc;new on(3e4,6e4);/**
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
 */function wc(n,e){return e?Ie(e):(b(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ki extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function o_(n){return Bp(n.auth,new Ki(n),n.bypassAuthState)}function a_(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Wp(t,new Ki(n),n.bypassAuthState)}async function c_(n){const{auth:e,user:t}=n;return b(t,e,"internal-error"),Up(t,new Ki(n),n.bypassAuthState)}/**
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
 */class Ic{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o_;case"linkViaPopup":case"linkViaRedirect":return c_;case"reauthViaPopup":case"reauthViaRedirect":return a_;default:fe(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const l_=new on(2e3,1e4);async function h_(n,e,t){if(re(n.app))return Promise.reject(he(n,"operation-not-supported-in-this-environment"));const s=ls(n);ip(n,e,zi);const i=wc(s,t);return new Ge(s,"signInViaPopup",e,i).executeNotNull()}class Ge extends Ic{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ge.currentPopupAction&&Ge.currentPopupAction.cancel(),Ge.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ge.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,l_.get())};e()}}Ge.currentPopupAction=null;/**
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
 */const u_="pendingRedirect",En=new Map;class d_ extends Ic{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const s=await f_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f_(n,e){const t=g_(e),s=__(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function p_(n,e){En.set(n._key(),e)}function __(n){return Ie(n._redirectPersistence)}function g_(n){return In(u_,n.config.apiKey,n.name)}async function m_(n,e,t=!1){if(re(n.app))return Promise.reject(ze(n));const s=ls(n),i=wc(s,e),o=await new d_(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const y_=10*60*1e3;class v_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ec(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(he(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y_&&this.cachedEventUids.clear(),this.cachedEventUids.has(io(e))}saveEventToCache(e){this.cachedEventUids.add(io(e)),this.lastProcessedEventTime=Date.now()}}function io(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ec({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ec(n);default:return!1}}/**
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
 */async function I_(n,e={}){return St(n,"GET","/v1/projects",e)}/**
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
 */const E_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C_=/^https?/;async function b_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await I_(n);for(const t of e)try{if(S_(t))return}catch{}fe(n,"unauthorized-domain")}function S_(n){const e=Ys(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!C_.test(t))return!1;if(E_.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const T_=new on(3e4,6e4);function ro(){const n=de().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function k_(n){return new Promise((e,t)=>{var i,r,o;function s(){ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ro(),t(he(n,"network-request-failed"))},timeout:T_.get()})}if((r=(i=de().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=de().gapi)!=null&&o.load)s();else{const a=Pp("iframefcb");return de()[a]=()=>{gapi.load?s():t(he(n,"network-request-failed"))},Ap(`${Rp()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Cn=null,e})}let Cn=null;function N_(n){return Cn=Cn||k_(n),Cn}/**
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
 */const A_=new on(5e3,15e3),R_="__/auth/iframe",P_="emulator/auth/iframe",x_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D_(n){const e=n.config;b(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vi(e,P_):`https://${n.config.authDomain}/${R_}`,s={apiKey:e.apiKey,appName:n.name,v:It},i=O_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${wt(s).slice(1)}`}async function L_(n){const e=await N_(n),t=de().gapi;return b(t,n,"internal-error"),e.open({where:document.body,url:D_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=he(n,"network-request-failed"),a=de().setTimeout(()=>{r(o)},A_.get());function c(){de().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const M_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},F_=500,U_=600,W_="_blank",B_="http://localhost";class oo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V_(n,e,t,s=F_,i=U_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...M_,width:s.toString(),height:i.toString(),top:r,left:o},l=J().toLowerCase();t&&(a=nc(l)?W_:t),ec(l)&&(e=e||B_,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(Ip(l)&&a!=="_self")return j_(e||"",a),new oo(null);const h=window.open(e||"",a,u);b(h,n,"popup-blocked");try{h.focus()}catch{}return new oo(h)}function j_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const H_="__/auth/handler",$_="emulator/auth/handler",G_=encodeURIComponent("fac");async function ao(n,e,t,s,i,r){b(n.config.authDomain,n,"auth-domain-config-required"),b(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:It,eventId:i};if(e instanceof zi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Rs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof an){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${G_}=${encodeURIComponent(c)}`:"";return`${z_(n)}?${wt(a).slice(1)}${l}`}function z_({config:n}){return n.emulator?Vi(n,$_):`https://${n.authDomain}/${H_}`}/**
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
 */const Ts="webStorageSupport";class q_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_c,this._completeRedirectFn=m_,this._overrideRedirectResult=p_}async _openPopup(e,t,s,i){var o;Se((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await ao(e,t,s,Ys(),i);return V_(e,r,qi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await ao(e,t,s,Ys(),i);return Qp(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Se(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await L_(e),s=new v_(e);return t.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ts,{type:Ts},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Ts];r!==void 0&&t(!!r),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=b_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ac()||tc()||$i()}}const K_=q_;var co="@firebase/auth",lo="1.12.0";/**
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
 */class Y_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Q_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J_(n){ht(new Ke("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cc(n)},l=new kp(s,i,r,c);return Op(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ht(new Ke("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(s=>new Y_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Le(co,lo,Q_(n)),Le(co,lo,"esm2020")}/**
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
 */const X_=5*60,Z_=bo("authIdTokenMaxAge")||X_;let ho=null;const eg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Z_)return;const i=t==null?void 0:t.token;ho!==i&&(ho=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tg(n=xo()){const e=ri(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xp(n,{popupRedirectResolver:K_,persistence:[r_,qp,_c]}),s=bo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=eg(r.toString());jp(t,o,()=>o(t.currentUser)),Vp(t,a=>o(a))}}const i=Eo("auth");return i&&Dp(t,`http://${i}`),t}function ng(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Np({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=he("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",ng().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J_("Browser");const sg={apiKey:"AIzaSyDEnZGjkOfZSaX5FzGR1cif2lIbFSfBmN0",authDomain:"sarange-pro.firebaseapp.com",projectId:"sarange-pro",storageBucket:"sarange-pro.firebasestorage.app",messagingSenderId:"663173287801",appId:"1:663173287801:web:79feba99d60aee6396a9a8",databaseURL:"https://sarange-pro-default-rtdb.europe-west1.firebasedatabase.app/"},Cc=Po(sg),me=Zf(Cc),Xs=tg(Cc),ig=new ye,uo=(...n)=>n.filter(Boolean).join(" "),Ut=({onClick:n,variant:e="primary",children:t,icon:s,disabled:i=!1,isLoading:r=!1,className:o="",type:a="button"})=>{const c={primary:"bg-brand-600 text-white hover:bg-brand-700 disabled:bg-brand-300 shadow-lg shadow-brand-500/25 focus-visible:ring-brand-300",whatsapp:"bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/20 focus-visible:ring-green-300",secondary:"bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 focus-visible:ring-brand-200",danger:"bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 dark:bg-red-900/20 dark:border-red-900/30 focus-visible:ring-red-200",ghost:"text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:ring-brand-200"},l=[];return r?l.push(Z.createElement(Pc,{key:"icon-loading",size:18,className:uo("animate-spin",t?"mr-2":"")})):s&&l.push(Z.createElement(s,{key:"icon",size:18,className:t?"mr-2":void 0})),l.push(t),Z.createElement("button",{type:a,onClick:n,disabled:i,className:uo("inline-flex items-center justify-center px-4 py-3 rounded-full font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-4",c[e]||c.primary,o)},l)},rg=(...n)=>n.filter(Boolean).join(" "),og=({message:n,type:e="success",onClose:t})=>{L.useEffect(()=>{const i=setTimeout(t,3e3);return()=>clearTimeout(i)},[t]);const s=e==="error"?"bg-red-500":"bg-slate-800";return Z.createElement("div",{className:rg("fixed bottom-4 right-4 text-white px-6 py-3 rounded-xl shadow-xl z-50 animate-slide-up flex items-center gap-3",s)},e==="success"&&Z.createElement(xc,{size:20,className:"text-green-400"}),Z.createElement("span",{className:"font-medium"},n))},bc=L.createContext(null),Ag=()=>L.useContext(bc),ag=100,qn=async(n=!0)=>{if(!window.tokenClient)throw new Error("Token client not initialized. Call initCalendarClient first.");return new Promise((e,t)=>{window.tokenClient.callback=s=>{if(s.error)n?(console.log("🔄 Silent refresh failed, requesting consent..."),qn(!1).then(e).catch(t)):(console.error("❌ Token refresh failed:",s.error),t(s));else{window.gapi.client.setToken(s);const i=Date.now()+(s.expires_in-ag)*1e3;sessionStorage.setItem("gapi_token_expires_at",i.toString()),console.log(`✅ Token refreshed (expires in ${Math.floor((i-Date.now())/1e3/60)}min)`),e(s)}},window.tokenClient.requestAccessToken({prompt:n?"":"consent"})})},Sc=()=>{const n=sessionStorage.getItem("gapi_token_expires_at");if(!n)return!0;const e=parseInt(n,10);return Date.now()>e},Yi=async()=>{var e,t;((t=(e=window.gapi)==null?void 0:e.client)==null?void 0:t.getToken())?Sc()?(console.log("🔄 Token expired, refreshing..."),await qn(!0)):console.log("✅ Token valid"):(console.log("🔒 No token found, requesting..."),await qn(!0))},cg=()=>{const n=sessionStorage.getItem("gapi_token_expires_at");return n?parseInt(n,10):null},lg=Object.freeze(Object.defineProperty({__proto__:null,ensureValidToken:Yi,getTokenExpiration:cg,isTokenExpired:Sc,refreshAuthToken:qn},Symbol.toStringTag,{value:"Module"})),hg="699593246334-05mr710cpof5efgbgra54mpoog2ghma7.apps.googleusercontent.com",ug="AIzaSyAFfQEdzncY0XpTfsuYikj7oVP6uLHj7PE",dg="https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.file",fg=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];let Kn,ks=!1,Ns=!1,mn=null;const Qi=()=>mn||(mn=new Promise((n,e)=>{const t=setInterval(()=>{window.gapi&&window.google&&(clearInterval(t),i(),r())},100);setTimeout(()=>{clearInterval(t),(!ks||!Ns)&&console.warn("⚠️ Scripts Google non chargés après 10s")},1e4);function s(){ks&&Ns&&(console.log("✅ Google Calendar & Drive API (GIS) : Prêt"),n())}async function i(){window.gapi.load("client",async()=>{try{await window.gapi.client.init({apiKey:ug,discoveryDocs:fg}),ks=!0,s()}catch(o){console.error("Erreur init GAPI Client",o),e(o)}})}function r(){try{Kn=window.google.accounts.oauth2.initTokenClient({client_id:hg,scope:dg,callback:""}),window.tokenClient=Kn,Ns=!0,s()}catch(o){console.error("Erreur init GIS Token Client",o),e(o)}}}),mn),pg=async n=>{try{await Qi()}catch(l){return console.error("Impossible d'initialiser Google API",l),null}try{await Yi()}catch(l){return console.warn("Auth refusée ou fermée",l),null}const e=!n.datePose&&n.status!=="POSE",t=e?"Sarange - Métrages":"Sarange - Pose",s=e?"5":"10",i=`${e?"MÉTRAGE":"POSE"} : ${n.client}`;if(!n.dateIntervention)return console.log("ℹ️ Pas de date d'intervention définie, lecture/écriture Google Calendar annulée."),null;let r;try{r=await Zs(t)}catch(l){if(l.status===401)console.log("🔄 Token expiré, renouvellement..."),await _g(),r=await Zs(t);else return console.error("Erreur Agenda",l),null}const o=new Date(n.dateIntervention),a=new Date(o.getTime()+60*60*1e3),c={summary:i,location:n.adresse||"",description:`Client: ${n.client}
Tél: ${n.telephone||""}${n.notes?`

📝 Notes :
${n.notes}`:""}

Lien GPS: https://waze.com/ul?q=${encodeURIComponent(n.adresse||"")}`,start:{dateTime:o.toISOString(),timeZone:"Europe/Paris"},end:{dateTime:a.toISOString(),timeZone:"Europe/Paris"},colorId:s,reminders:{useDefault:!1,overrides:[{method:"popup",minutes:1440},{method:"popup",minutes:120},{method:"popup",minutes:10}]}};try{let l;if(n.googleEventId)try{l=await window.gapi.client.calendar.events.update({calendarId:r,eventId:n.googleEventId,resource:c})}catch(u){if(u.status===404)l=await window.gapi.client.calendar.events.insert({calendarId:r,resource:c});else throw u}else l=await window.gapi.client.calendar.events.insert({calendarId:r,resource:c});return console.log("✅ Synchro Google OK"),l.result.id}catch(l){return l.status===401?console.error("❌ Erreur 401 sur Event (Token expiré ?)",l):console.error("❌ Erreur Sync Event",l),null}},As=async n=>{if(n.googleEventId)try{await Qi();try{await Yi()}catch{console.warn("Pas de token, suppression GCal ignorée");return}const t=!n.datePose&&n.status!=="POSE"?"Sarange - Métrages":"Sarange - Pose",s=await Zs(t);await window.gapi.client.calendar.events.delete({calendarId:s,eventId:n.googleEventId}),console.log("🗑️ Événement Google supprimé")}catch(e){console.error("Erreur suppression GCal",e)}};function _g(){return new Promise((n,e)=>{Kn.callback=t=>{t.error?e(t):(window.gapi.client.setToken(t),n(t))},Kn.requestAccessToken({prompt:""})})}async function Zs(n){const t=(await window.gapi.client.calendar.calendarList.list()).result.items.find(i=>i.summary===n);return t?t.id:(await window.gapi.client.calendar.calendars.insert({resource:{summary:n,timeZone:"Europe/Paris"}})).result.id}class gg extends Z.Component{constructor(t){super(t);Zi(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,s){console.error("Uncaught error:",t,s),this.setState({errorInfo:s})}render(){return this.state.hasError?_.jsxs("div",{className:"flex flex-col items-center justify-center p-6 h-full min-h-[50vh] text-center animate-fade-in",children:[_.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded-full mb-4",children:_.jsx(Oc,{size:40,className:"text-red-500"})}),_.jsx("h2",{className:"text-xl font-bold text-slate-800 dark:text-white mb-2",children:"Oups, une erreur est survenue !"}),_.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs",children:"L'application a rencontré un problème inattendu. Ne vous inquiétez pas, vos données sont en sécurité."}),_.jsx("div",{className:"bg-slate-100 dark:bg-slate-800 p-3 rounded text-left text-xs font-mono text-red-500 mb-6 w-full max-w-sm overflow-auto max-h-32",children:this.state.error&&this.state.error.toString()}),_.jsx(Ut,{onClick:this.handleReload,icon:Dc,className:"shadow-lg",children:"Recharger l'application"})]}):this.props.children}}const mg=({currentView:n,onNavigate:e,onClose:t})=>{const s=[{id:"dashboard",label:"Dashboard",icon:Mc},{id:"commercial",label:"Commercial",icon:Fc},{id:"metrage",label:"Bureau d'Études",icon:Uc},{id:"atelier",label:"Atelier & Fab",icon:Wc},{id:"stocks",label:"Stocks",icon:Bc},{id:"terrain",label:"Planning & Pose",icon:Vc},{id:"finances",label:"Facturation",icon:jc}];return _.jsxs("aside",{className:"w-64 bg-slate-900 text-slate-300 h-screen flex flex-col flex-shrink-0 z-50",children:[_.jsxs("div",{className:"p-6 flex items-center justify-between",children:[_.jsx("div",{className:"flex-1 max-w-[160px]",children:_.jsxs("svg",{viewBox:"0 0 350 60",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-auto",children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:"textGradDark",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[_.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),_.jsx("stop",{offset:"100%",stopColor:"#CBD5E1"})]})}),_.jsx("text",{x:"0",y:"45",fontFamily:"'Inter', sans-serif",fontWeight:"900",fontSize:"48",fill:"url(#textGradDark)",letterSpacing:"-0.05em",children:"SARANGE"}),_.jsx("circle",{cx:"232",cy:"38",r:"5",fill:"#F97316"})]})}),t&&_.jsx("button",{onClick:t,className:"md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",children:_.jsx(Lc,{size:20})})]}),_.jsx("nav",{className:"flex-1 px-4 space-y-2 overflow-y-auto",children:s.map(i=>{const r=i.icon,o=n===i.id;return _.jsxs("button",{onClick:()=>e(i.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${o?"bg-brand-600 text-white":"hover:bg-slate-800 hover:text-white"}`,children:[_.jsx(r,{size:20}),_.jsx("span",{className:"font-medium text-sm",children:i.label})]},i.id)})}),_.jsx("div",{className:"p-4 border-t border-slate-800 text-xs text-slate-500 text-center",children:"SarangePro ERP"})]})},yg=Z.lazy(()=>mt(()=>import("./MetrageModule-C-YqkNcL.js"),__vite__mapDeps([0,1,2])).then(n=>({default:n.MetrageModule}))),vg=Z.lazy(()=>mt(()=>import("./CommercialModule-BhZ6prLy.js"),__vite__mapDeps([3,1,2,4,5,6])).then(n=>({default:n.CommercialModule}))),wg=Z.lazy(()=>mt(()=>import("./ChantierDetailView-C1IGi5nB.js"),__vite__mapDeps([7,1,4,8,9,2,5,10,6,11])).then(n=>({default:n.ChantierDetailView}))),Ig=Z.lazy(()=>mt(()=>import("./SettingsView-CPYrSe2a.js"),__vite__mapDeps([12,1,5,2])).then(n=>({default:n.SettingsView}))),Eg=Z.lazy(()=>mt(()=>import("./TrashView-D8G7jZII.js"),__vite__mapDeps([13,1,5,8,2])).then(n=>({default:n.TrashView}))),yn={"contact@sarange.fr":{role:"ADMIN",name:"Direction"},"commercial@sarange.fr":{role:"COMMERCIAL",name:"Commercial"},"metreur@sarange.fr":{role:"METREUR",name:"Bureau d'Études"},"atelier@sarange.fr":{role:"ATELIER",name:"Atelier & Fab"},"terrain@sarange.fr":{role:"TERRAIN",name:"Planning & Pose"},"compta@sarange.fr":{role:"COMPTA",name:"Facturation"}},fo=({error:n})=>{const e=async()=>{try{await h_(Xs,ig)}catch(t){console.error("Login Error",t),alert("Erreur de connexion : "+t.message)}};return _.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 p-4",children:[_.jsx("img",{src:"/favicon-512.png",alt:"SarangePro",className:"w-32 h-auto mb-6"}),_.jsx("h1",{className:"text-3xl font-bold text-slate-800 dark:text-white mb-2",children:"SarangePro"}),_.jsx("p",{className:"text-slate-500 mb-8",children:"Application de Métrage Professionnelle"}),n&&_.jsxs("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6 max-w-sm text-center border border-red-200",children:[_.jsx(po,{className:"inline-block mb-1"}),_.jsx("p",{className:"font-bold",children:n}),_.jsx("button",{onClick:()=>$p(Xs),className:"text-sm underline mt-2",children:"Se déconnecter"})]}),!n&&_.jsx(Ut,{onClick:e,className:"w-full max-w-xs py-3 text-lg shadow-lg",children:"Connexion Google"}),_.jsx("p",{className:"mt-8 text-xs text-slate-400",children:"Accès restreint au personnel autorisé."})]})},Cg=({step:n,error:e,onRetry:t})=>{const[s,i]=L.useState(!1);return _.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 absolute inset-0 z-50 p-4",children:[_.jsx("img",{src:"/favicon-512.png",alt:"SarangePro",className:"w-24 h-auto mb-6 animate-pulse"}),_.jsx("h1",{className:"text-2xl font-bold text-slate-800 dark:text-white mb-2",children:"SarangePro"}),e?_.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-800 p-6 rounded-xl max-w-sm w-full text-center animate-fade-in",children:[_.jsx(po,{size:48,className:"mx-auto text-red-500 mb-4"}),_.jsx("h3",{className:"font-bold text-lg text-red-700 dark:text-red-300 mb-2",children:"Erreur de démarrage"}),_.jsx("p",{className:"text-sm text-red-600 dark:text-red-400 mb-6",children:e.message}),_.jsxs("div",{className:"space-y-3",children:[_.jsx(Ut,{onClick:t,variant:"primary",className:"w-full",children:"Réessayer"}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx(Ut,{onClick:()=>i(!s),variant:"secondary",className:"flex-1 text-xs",children:"Logs"}),_.jsx(Ut,{onClick:()=>{const r=URL.createObjectURL(W.getBlob());window.open(r)},variant:"secondary",className:"flex-1 text-xs",children:"Download"})]})]})]}):_.jsxs("div",{className:"w-64",children:[_.jsxs("div",{className:"flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide",children:[_.jsx("span",{children:"Chargement..."}),_.jsx("span",{children:n})]}),_.jsx("div",{className:"h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-brand-600 animate-pulse w-full origin-left-right"})})]}),s&&_.jsx("div",{className:"mt-8 w-full max-w-lg bg-black text-green-400 font-mono text-xs p-4 rounded h-48 overflow-auto border border-slate-700 shadow-2xl",children:W.logs.map((r,o)=>_.jsxs("div",{children:[_.jsxs("span",{className:"opacity-50",children:["[",r.ts.split("T")[1].split(".")[0],"]"]})," ",_.jsx("span",{className:r.level==="error"?"text-red-400":r.level==="warn"?"text-amber-400":"",children:r.msg})]},o))})]})},bg=()=>{const[n,e]=L.useState(null),[t,s]=L.useState(!0),r=(()=>{try{const p=localStorage.getItem("sarange_session_v1");if(p){const w=JSON.parse(p);if(Date.now()-w.lastActive<36e5&&w.view==="chantier"&&w.activeChantierId)return{view:"chantier",currentChantierId:w.activeChantierId}}const f=localStorage.getItem("sarange_last_nav_tab");if(f&&["dashboard","commercial","metrage","atelier","stocks","terrain","finances"].includes(f))return{view:f,currentChantierId:null}}catch(p){console.warn("Session Restore Fail",p)}return{view:"metrage",currentChantierId:null}})(),[o,a]=L.useState({chantiers:[],products:[],currentChantierId:r.currentChantierId}),[c,l]=L.useState({loading:!0,step:"Init",error:null}),[u,h]=L.useState(r.view),[d,m]=L.useState(!1),[v,N]=L.useState(navigator.onLine),[M,q]=L.useState(!1),[K,ue]=L.useState(null),[tt,ln]=L.useState(!1);L.useEffect(()=>{const p={view:u,activeChantierId:o.currentChantierId,lastActive:Date.now()};localStorage.setItem("sarange_session_v1",JSON.stringify(p)),["dashboard","commercial","metrage","atelier","stocks","terrain","finances"].includes(u)&&localStorage.setItem("sarange_last_nav_tab",u)},[u,o.currentChantierId]);const z=(p,f="success")=>ue({message:p,type:f});L.useEffect(()=>{const p=Hp(Xs,f=>{e(f),s(!1)});return()=>p()},[]),L.useEffect(()=>{(async()=>{try{await Qi();const{refreshAuthToken:f}=await mt(async()=>{const{refreshAuthToken:w}=await Promise.resolve().then(()=>lg);return{refreshAuthToken:w}},void 0);await f(!0).catch(w=>{console.log("Silent refresh skipped (no active session)")})}catch(f){console.error("Auth init error:",f)}})()},[]);const Ji=async()=>{try{l({loading:!0,step:"DB",error:null}),await te.init(),l(E=>({...E,step:"Données"}));const p=await te.get("sarange_root");let f=p||{chantiers:[],products:[]};if(f.chantiers=f.chantiers||[],f.products=f.products||[],navigator.onLine)try{W.info("Vérification Cloud...");const E=await qr(Yt(ge(me),"sarange_root"));if(E.exists()){let R=E.val();R.chantiers=R.chantiers?Object.values(R.chantiers):[],R.products=R.products?Object.values(R.products):[],W.info("🔄 Fusion Cloud + Local (Secure)..."),f={...p,lastWriteTime:Math.max((p==null?void 0:p.lastWriteTime)||0,R.lastWriteTime||0),chantiers:un(R.chantiers,f.chantiers),products:un(R.products,f.products)},await te.set("sarange_root",f),W.info(`Fusion terminée : ${f.chantiers.length} chantiers`)}}catch(E){W.error("Erreur check cloud",E)}const w=30*24*60*60*1e3,I=Date.now();let y=!1;if(f.chantiers&&(f.chantiers=f.chantiers.map(R=>{const ie=R.sentAt||R.updatedAt,ke=ie?new Date(ie).getTime():0,_e=I-ke>5184e6;return!R.deleted&&!R.archived&&R.sendStatus==="SENT"&&_e?(y=!0,W.info(`📂 Auto-Archive: ${R.client} (${R.id})`),{...R,archived:!0}):R}),navigator.onLine)){const R=[];for(const ie of f.chantiers){const ke=new Date(ie.updatedAt||0).getTime();ie.purged&&I-ke>w?(jf(ge(me,"sarange_root/chantiers/"+ie.id)).then(()=>W.info(`💀 GC: Deleted physically ${ie.id}`)).catch(_e=>W.error("GC Fail",_e)),y=!0):R.push(ie)}f.chantiers=R}y&&(W.info("Auto-maintenance (GC) performed"),await te.set("sarange_root",f)),y&&(W.info("Auto-maintenance (GC) performed"),await te.set("sarange_root",f)),f.currentChantierId=o.currentChantierId,a(f),W.info("App Ready"),l({loading:!1,step:"Ready",error:null})}catch(p){console.error(p),W.error("Boot Failed",p),l({loading:!0,step:"Erreur",error:p})}};L.useEffect(()=>{n&&yn[n.email]&&Ji()},[n]),L.useEffect(()=>{const p=()=>N(!0),f=()=>N(!1);return window.addEventListener("online",p),window.addEventListener("offline",f),()=>{window.removeEventListener("online",p),window.removeEventListener("offline",f)}},[]),L.useEffect(()=>{const p=ge(me,".info/connected"),f=Gf(p,w=>{const I=w.val()===!0;q(I),I?W.info("✅ Firebase Connected"):W.warn("❌ Firebase Disconnected (Offline or Blocking)")});return()=>f()},[]);const ds=L.useRef(null);L.useEffect(()=>{!n||!yn[n.email]||c.loading||(ds.current&&clearTimeout(ds.current),ds.current=setTimeout(async()=>{const p={...o,lastWriteTime:Date.now()};try{await te.set("sarange_root",p)}catch(f){W.error("AutoSave Local Fail",f)}if(navigator.onLine){const f={};o.chantiers.forEach(I=>{f["sarange_root/chantiers/"+I.id]=I}),o.products.forEach(I=>{f["sarange_root/products/"+I.id]=I}),f["sarange_root/lastWriteTime"]=Date.now();const w=$c(f);Rt(ge(me),w).then(()=>W.info("☁️ Synchro Cloud OK (Granular)")).catch(I=>console.error("Firebase Sync Fail",I))}},1e3))},[o,c.loading,n]),L.useEffect(()=>{d?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[d]);const hn=Z.useMemo(()=>({addChantier:p=>{const f={...p,id:dn(),assignation:"METRAGE",updatedAt:new Date().toISOString()};return a(w=>({...w,chantiers:[f,...w.chantiers]})),z("Dossier créé"),f},createNewLead:p=>{const f=new Date().toISOString(),w={id:dn(),client:p.client,telephone:p.telephone||"",email:p.email||"",adresse:p.adresse,source:p.source||"Autre",notes:p.notes||"",status:fn.LEAD,assignation:"COMMERCIAL",date:f,dateCreation:f,updatedAt:f};return a(I=>({...I,chantiers:[w,...I.chantiers]})),z("Nouveau Lead créé"),w},promoteLeadToSent:(p,f)=>{const w=new Date().toISOString();a(I=>({...I,chantiers:I.chantiers.map(y=>y.id===p?{...y,status:fn.SENT,...f!=null?{montantTTC:f}:{},dateEnvoi:w,updatedAt:w}:y)})),z("Lead passé en Devis Envoyé")},markForRelance:p=>{const f=new Date().toISOString();a(w=>({...w,chantiers:w.chantiers.map(I=>I.id===p?{...I,status:fn.RELANCE,dateRelance:f,updatedAt:f}:I)})),z("Dossier marqué pour Relance")},markAsSigned:p=>{const f=new Date().toISOString();a(w=>({...w,chantiers:w.chantiers.map(I=>I.id===p?{...I,status:fn.SIGNED,dateSignature:f,updatedAt:f}:I)})),z("Dossier gagné !")},updateChantier:(p,f)=>a(w=>({...w,chantiers:w.chantiers.map(I=>I.id===p?{...I,...f,updatedAt:new Date().toISOString()}:I)})),deleteChantier:p=>{a(f=>{const w=f.chantiers.find(y=>y.id===p);w&&w.googleEventId&&As(w).catch(console.error);const I={...f,chantiers:f.chantiers.map(y=>y.id===p?{...y,deleted:!0,deletedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}:y),lastWriteTime:Date.now()};if(te.set("sarange_root",I).catch(y=>console.error("Force Save Local Fail",y)),navigator.onLine&&n&&yn[n.email]){const y={};y["sarange_root/chantiers/"+p]=I.chantiers.find(E=>E.id===p),y["sarange_root/lastWriteTime"]=I.lastWriteTime,Rt(ge(me),y).catch(E=>console.error("Force Save Cloud Fail",E))}return I}),z("Dossier mis à la corbeille")},restoreChantier:p=>{a(f=>({...f,chantiers:f.chantiers.map(w=>w.id===p?{...w,deleted:!1,purged:!1,deletedAt:null,updatedAt:new Date().toISOString()}:w)})),z("Dossier restauré")},hardDeleteChantier:async p=>{const w={purged:!0,deleted:!0,updatedAt:new Date().toISOString()},I=o.chantiers.find(y=>y.id===p);I&&I.googleEventId&&As(I).catch(console.error),a(y=>({...y,chantiers:y.chantiers.map(E=>E.id===p?{...E,...w}:E)}));try{await Rt(ge(me,"sarange_root/chantiers/"+p),w);const y={...o,chantiers:o.chantiers.map(E=>E.id===p?{...E,...w}:E),lastWriteTime:Date.now()};await te.set("sarange_root",y),z("Dossier supprimé définitivement")}catch(y){console.error(y),z("Erreur suppression","error")}},emptyTrash:async()=>{const p=o.chantiers.filter(y=>y.deleted&&!y.purged);if(p.length===0||!confirm(`Supprimer définitivement ${p.length} dossiers ?`))return;const f=new Date().toISOString();a(y=>({...y,chantiers:y.chantiers.map(E=>E.deleted&&!E.purged?{...E,purged:!0,updatedAt:f}:E)}));let w=0;const I={};for(const y of p)I["sarange_root/chantiers/"+y.id]={...y,purged:!0,updatedAt:f},w++;try{await Rt(ge(me),I),z(`${w} dossiers supprimés`)}catch(y){console.error("Empty Trash Fail",y)}},selectChantier:p=>a(f=>({...f,currentChantierId:p})),saveProduct:p=>a(f=>{const w=new Date().toISOString(),I=f.products.find(y=>y.id===p.id);return{...f,products:I?f.products.map(y=>y.id===p.id?{...p,dateMaj:w,updatedAt:w}:y):[...f.products,{...p,updatedAt:w}]}}),deleteProduct:p=>a(f=>({...f,products:f.products.map(w=>w.id===p?{...w,deleted:!0,updatedAt:new Date().toISOString()}:w)})),duplicateChantier:p=>{const f=o.chantiers.find(E=>E.id===p);if(!f)return;const w=dn(),I={...f,id:w,client:f.client+" (Copie)",date:new Date().toISOString(),updatedAt:new Date().toISOString(),dateFinalisation:null,sendStatus:"DRAFT",sentAt:null,lastError:null},y=o.products.filter(E=>E.chantierId===p&&!E.deleted).map(E=>({...E,id:dn(),chantierId:w,updatedAt:new Date().toISOString()}));a(E=>({...E,chantiers:[I,...E.chantiers],products:[...E.products,...y]})),z("Dossier dupliqué")},updateChantierDate:async(p,f)=>{({...o});const w=o.chantiers.find(y=>y.id===p);if(!w)return;const I={...w,dateIntervention:f,updatedAt:new Date().toISOString()};a(y=>({...y,chantiers:y.chantiers.map(E=>E.id===p?I:E)}));try{if(!f&&w.googleEventId)As(w).catch(console.error),a(y=>({...y,chantiers:y.chantiers.map(E=>E.id===p?{...E,googleEventId:null}:E)})),te.set("sarange_root",{...o,chantiers:o.chantiers.map(y=>y.id===p?{...y,googleEventId:null}:y)}).catch(console.error);else if(f){const y=await pg(I);y&&(a(E=>({...E,chantiers:E.chantiers.map(R=>R.id===p?{...R,googleEventId:y}:R)})),te.set("sarange_root",{...o,chantiers:o.chantiers.map(E=>E.id===p?{...E,googleEventId:y}:E)}).catch(console.error))}}catch(y){console.error("Centralized GCal Sync Fail",y),z("Erreur synchro Google Calendar","error")}},importData:p=>{a(p),te.set("sarange_root",p).catch(f=>console.error(f))},forceSync:async()=>{if(!navigator.onLine){z("Impossible : Pas de connexion internet","error");return}z("Synchronisation en cours...","info");try{const p=await qr(Yt(ge(me),"sarange_root"));let f=p.exists()?p.val():{chantiers:{},products:{}};const w=f.chantiers?Object.values(f.chantiers):[],I=f.products?Object.values(f.products):[],y=un(w,o.chantiers),E=un(I,o.products),R=Math.max(f.lastWriteTime||0,o.lastWriteTime||0,Date.now()),ie={...o,chantiers:y,products:E,lastWriteTime:R};a(ie),await te.set("sarange_root",ie);const ke={};y.forEach(_e=>ke["sarange_root/chantiers/"+_e.id]=_e),E.forEach(_e=>ke["sarange_root/products/"+_e.id]=_e),ke["sarange_root/lastWriteTime"]=R,await Rt(ge(me),ke),z("Synchronisation terminée avec succès !","success"),W.info("🔄 Force Sync Complete")}catch(p){console.error("Force Sync Fail",p),z("Erreur Sync : "+p.message,"error"),W.error("Force Sync Fail",p)}}}),[o,n]);if(t)return _.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900",children:_.jsx(nr,{size:40,className:"text-brand-600"})});if(!n)return _.jsx(fo,{});if(!yn[n.email])return _.jsx(fo,{error:`Accès Refusé : Le compte ${n.email} n'est pas autorisé.`});if(c.loading)return _.jsx(Cg,{step:c.step,error:c.error,onRetry:Ji});const Tc=()=>_.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900",children:_.jsx(nr,{size:40,className:"text-brand-600"})}),Xi=!!o.currentChantierId||["settings","trash"].includes(u),kc=p=>{h(p),ln(!1)};return _.jsxs(bc.Provider,{value:{state:o,...hn,navigate:h,setReturnView:p=>a(f=>({...f,returnView:p}))},children:[_.jsx(gg,{children:_.jsx(L.Suspense,{fallback:_.jsx(Tc,{}),children:_.jsxs("div",{className:"flex bg-slate-50 dark:bg-slate-900 overflow-hidden w-full h-screen lg:h-screen supports-[height:100dvh]:h-[100dvh] relative",children:[!Xi&&_.jsxs(_.Fragment,{children:[tt&&_.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 md:hidden",onClick:()=>ln(!1)}),_.jsx("div",{className:`
                  fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
                  ${tt?"translate-x-0":"-translate-x-full md:translate-x-0"}
                `,children:_.jsx(mg,{currentView:u,onNavigate:kc,onClose:()=>ln(!1)})})]}),_.jsxs("main",{className:"flex-1 overflow-hidden relative",children:[!Xi&&_.jsx("div",{className:"md:hidden absolute top-4 left-4 z-30",children:_.jsx("button",{onClick:()=>ln(!0),className:"p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300",children:_.jsx(Hc,{size:20})})}),u==="settings"?_.jsx(Ig,{onBack:()=>h("dashboard"),state:o,onImport:hn.importData}):u==="trash"?_.jsx(Eg,{onBack:()=>h("dashboard"),state:o,actions:hn}):o.currentChantierId?_.jsx(wg,{}):["metrage","new"].includes(u)?_.jsx(yg,{onNew:()=>h("new"),onNavigate:h,viewMode:u,isDark:d,toggleDark:()=>m(!d),onOpenSettings:()=>h("settings"),onOpenTrash:()=>h("trash"),isOnline:v,firebaseConnected:M}):u==="commercial"?_.jsx(vg,{state:o,selectChantier:hn.selectChantier,onNew:()=>h("new"),isDark:d,toggleDark:()=>m(!d),onOpenSettings:()=>h("settings"),onOpenTrash:()=>h("trash"),isOnline:v,firebaseConnected:M}):["dashboard","atelier","stocks","terrain","finances"].includes(u)?_.jsx("div",{className:"flex h-full items-center justify-center p-8 bg-white dark:bg-slate-800 m-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700",children:_.jsxs("div",{className:"text-center",children:[_.jsx("h2",{className:"text-3xl font-bold text-slate-700 dark:text-slate-300 mb-4",children:"Module en construction..."}),_.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-lg",children:"Cette vue de l'ERP sera bientôt disponible."})]})}):null]})]})})}),K&&_.jsx(og,{message:K.message,type:K.type,onClose:()=>ue(null)})]})},Sg=mo(document.getElementById("root"));Sg.render(_.jsx(bg,{}));export{Ut as B,nr as S,og as T,mt as _,uo as c,As as d,Yi as e,Qi as i,_ as j,pg as m,Ag as u};
