__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},389,[459]);
__d(function(g,r,_i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"deleteToken",{enumerable:!0,get:function(){return Ze}}),Object.defineProperty(_e,"getMessaging",{enumerable:!0,get:function(){return ze}}),Object.defineProperty(_e,"getToken",{enumerable:!0,get:function(){return Ye}}),Object.defineProperty(_e,"isSupported",{enumerable:!0,get:function(){return Le}}),Object.defineProperty(_e,"onMessage",{enumerable:!0,get:function(){return Xe}}),Object.defineProperty(_e,"onRegistered",{enumerable:!0,get:function(){return nt}}),Object.defineProperty(_e,"onUnregistered",{enumerable:!0,get:function(){return it}}),Object.defineProperty(_e,"register",{enumerable:!0,get:function(){return et}}),Object.defineProperty(_e,"unregister",{enumerable:!0,get:function(){return tt}});var e=r(d[0]),t=r(d[1]),n=r(d[2]),i=r(d[3]),o=r(d[4]);
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
const s='/firebase-messaging-sw.js',c='/firebase-cloud-messaging-push-scope',u='BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4',f='https://fcmregistrations.googleapis.com/v1',p='google.c.a.c_id',l=1e4;var w,h;
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
function b(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_')}function y(e){const t=(e+'='.repeat((4-e.length%4)%4)).replace(/\-/g,'+').replace(/_/g,'/'),n=atob(t),i=new Uint8Array(n.length);for(let e=0;e<n.length;++e)i[e]=n.charCodeAt(e);return i}
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
   */!(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(w||(w={})),(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e.FID_REGISTERED="fid-registered"})(h||(h={}));const v='fcm_token_details_db',I=5,k='fcm_token_object_Store';async function D(e){if('databases'in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(v))return null}let t=null;return(await(0,n.openDB)(v,I,{upgrade:async(n,i,o,s)=>{if(i<2)return;if(!n.objectStoreNames.contains(k))return;const c=s.objectStore(k),u=await c.index('fcmSenderId').get(e);if(await c.clear(),u)if(2===i){const e=u;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:e.createTime??Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:'string'==typeof e.vapidKey?e.vapidKey:b(e.vapidKey)}}}else if(3===i){const e=u;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:b(e.auth),p256dh:b(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:b(e.vapidKey)}}}else if(4===i){const e=u;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:b(e.auth),p256dh:b(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:b(e.vapidKey)}}}}})).close(),await(0,n.deleteDB)(v),await(0,n.deleteDB)('fcm_vapid_details_db'),await(0,n.deleteDB)('undefined'),S(t)?t:null}function S(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return'number'==typeof e.createTime&&e.createTime>0&&'string'==typeof e.token&&e.token.length>0&&'string'==typeof t.auth&&t.auth.length>0&&'string'==typeof t.p256dh&&t.p256dh.length>0&&'string'==typeof t.endpoint&&t.endpoint.length>0&&'string'==typeof t.swScope&&t.swScope.length>0&&'string'==typeof t.vapidKey&&t.vapidKey.length>0}
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
   */const T={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":'This method is available in a Window context.',"only-available-in-sw":'This method is available in a service worker context.',"permission-default":'The notification permission was not granted and dismissed instead.',"permission-blocked":'The notification permission was not granted and blocked instead.',"unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":'We are unable to register the default service worker. {$browserErrorMessage}',"token-subscribe-failed":'A problem occurred while subscribing the user to FCM: {$errorInfo}',"token-subscribe-no-token":'FCM returned no token when subscribing the user to push.',"fid-registration-failed":'A problem occurred while creating an FCM registration via FID: {$errorInfo}',"fid-unregister-failed":'A problem occurred while unregistering the FCM registration via FID: {$errorInfo}',"fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":'A problem occurred while updating the user from FCM: {$errorInfo}',"token-update-no-token":'FCM returned no token when updating the user to push.',"use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":'The input to useServiceWorker() must be a ServiceWorkerRegistration.',"invalid-bg-handler":'The input to setBackgroundMessageHandler() must be a function.',"invalid-vapid-key":'The public VAPID key must be a string.',"use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":'No onRegistered callback handler was provided or registered. Implement onRegistered() before register().'},C=new i.ErrorFactory('messaging','Messaging',T),_='firebase-messaging-database',O=2,R='firebase-messaging-store',M='firebase-messaging-fid-registration-store';let P={openDB:n.openDB,deleteDB:n.deleteDB},K=null;function j(e,t,n){switch(t){case 0:if(e.createObjectStore(R),1===n)break;case 1:2===n&&e.createObjectStore(M)}}function E(e){return{upgrade:(t,n)=>{j(t,n,e)},blocked:()=>{},blocking:(e,t,n)=>{K=null,n.target?.close()},terminated:()=>{K=null}}}function N(){if(!K){const e=P.openDB(_,O,E(2));K=e.catch(()=>P.openDB(_,1,E(1)))}return K}function A(e,t){return e.objectStoreNames.contains(t)}function H(e){if(!A(e,M))throw C.create("fid-registration-idb-schema-unavailable")}async function x(e){const t=L(e),n=await N(),i=await n.transaction(R).objectStore(R).get(t);if(i)return i;{const t=await D(e.appConfig.senderId);if(t)return await F(e,t),t}}async function F(e,t){const n=L(e),i=await N(),o=[R],s=A(i,M);s&&o.push(M);const c=i.transaction(o,'readwrite');return await c.objectStore(R).put(t,n),s&&await c.objectStore(M).delete(n),await c.done,t}async function U(e){const t=L(e),n=(await N()).transaction(R,'readwrite');await n.objectStore(R).delete(t),await n.done}async function B(e){const t=L(e),n=await N();return H(n),await n.transaction(M).objectStore(M).get(t)}async function $(e,t){const n=L(e),i=await N();H(i);const o=i.transaction([R,M],'readwrite');return await o.objectStore(M).put(t,n),await o.objectStore(R).delete(n),await o.done,t}async function W(e){const t=L(e),n=await N();H(n);const i=n.transaction(M,'readwrite');await i.objectStore(M).delete(t),await i.done}function L({appConfig:e}){return e.appId}const V="@firebase/messaging",G="0.13.3",J=3,Q=1e3;async function q(e,t){const n=await ae(e),i=se(t,e.appConfig.appName,!1),o={method:'POST',headers:n,body:JSON.stringify(i)};let s;try{const t=await fetch(re(e.appConfig),o);s=await t.json()}catch(e){throw C.create("token-subscribe-failed",{errorInfo:e?.toString()})}if(s.error){const e=s.error.message;throw C.create("token-subscribe-failed",{errorInfo:e})}if(!s.token)throw C.create("token-subscribe-no-token");return s.token}async function z(e,t){const n=await ae(e),i=se(t,e.appConfig.appName,!0),o={method:'POST',headers:n,body:JSON.stringify(i)};let s,c;try{s=await ie(()=>fetch(re(e.appConfig),o),J,Q)}catch(e){throw C.create("fid-registration-failed",{errorInfo:e?.toString()})}if(s.ok){return{responseFid:await Z(s)}}try{c=await s.json()}catch(e){throw C.create("fid-registration-failed",{errorInfo:s.statusText})}const u=c.error?.message??s.statusText;throw C.create("fid-registration-failed",{errorInfo:u})}async function Y(e,t){const n={method:'DELETE',headers:await ae(e)};let i;try{i=await fetch(`${re(e.appConfig)}/${t}`,n)}catch(e){throw C.create("fid-unregister-failed",{errorInfo:e?.toString()})}if(!i.ok)try{const e=await i.json();throw e.error?.message??i.statusText}catch(e){throw C.create("fid-unregister-failed",{errorInfo:'string'==typeof e&&e||i.statusText||e?.toString()})}}async function Z(e){const t=await e.text();if(!t.trim())throw C.create("fid-registration-failed",{errorInfo:'CreateRegistration succeeded but response body is empty'});let n;try{n=JSON.parse(t)}catch{throw C.create("fid-registration-failed",{errorInfo:'CreateRegistration succeeded but response body is not valid JSON'})}const i=n.name;if('string'!=typeof i||0===i.length)throw C.create("fid-registration-failed",{errorInfo:'CreateRegistration succeeded but response did not include a non-empty name'});return ee(i)}const X='/registrations/';function ee(e){const t=e.indexOf(X);if(-1!==t){const n=e.slice(t+X.length);if(n.length>0)return n}throw C.create("fid-registration-failed",{errorInfo:'CreateRegistration succeeded but response name is not a valid registration resource name'})}async function te(e,t){const n=await ae(e),i=se(t.subscriptionOptions,e.appConfig.appName,!1),o={method:'PATCH',headers:n,body:JSON.stringify(i)};let s;try{const n=await fetch(`${re(e.appConfig)}/${t.token}`,o);s=await n.json()}catch(e){throw C.create("token-update-failed",{errorInfo:e?.toString()})}if(s.error){const e=s.error.message;throw C.create("token-update-failed",{errorInfo:e})}if(!s.token)throw C.create("token-update-no-token");return s.token}async function ne(e,t){const n={method:'DELETE',headers:await ae(e)};try{const i=await fetch(`${re(e.appConfig)}/${t}`,n),o=await i.json();if(o.error){const e=o.error.message;throw C.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw C.create("token-unsubscribe-failed",{errorInfo:e?.toString()})}}async function ie(e,t,n){let i;for(let o=0;o<t;o++)try{return await e()}catch(e){if(i=e,o<t-1){const e=n*Math.pow(2,o);await new Promise(t=>setTimeout(t,e))}}throw i}function re({projectId:e}){return`${f}/projects/${e}/registrations`}async function ae({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({'Content-Type':'application/json',Accept:'application/json','x-goog-api-key':e.apiKey,'x-goog-firebase-installations-auth':`FIS ${n}`})}function oe(e,t){try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return new URL(e).host}catch{}try{if('undefined'!=typeof self&&self.location?.href)return new URL(e,self.location.origin).host}catch{}return'undefined'!=typeof self&&self.location?.host?self.location.host:t}function se({p256dh:e,auth:t,endpoint:n,vapidKey:i,swScope:o},s,c){const f={web:{origin:oe(o,s),endpoint:n,auth:t,p256dh:e}};return c&&(f.fcm_sdk_version=G),i!==u&&(f.web.applicationPubKey=i),f}
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
   */const ce=6048e5;async function de(e){const t=await we(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:b(t.getKey('auth')),p256dh:b(t.getKey('p256dh'))},i=await x(e.firebaseDependencies);if(i){if(he(i.subscriptionOptions,n))return Date.now()>=i.createTime+ce?le(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await ne(e.firebaseDependencies,i.token)}catch(e){console.warn(e)}return ge(e.firebaseDependencies,n)}return ge(e.firebaseDependencies,n)}async function ue(e,t){await ne(e.firebaseDependencies,t.token),await U(e.firebaseDependencies),await be(e.firebaseDependencies)}async function fe(e){const t=await B(e.firebaseDependencies).catch(()=>{}),n=t?.fid;n&&await Y(e.firebaseDependencies,n),await be(e.firebaseDependencies),n&&me(e,n)}async function pe(e){const t=await x(e.firebaseDependencies);t?await ue(e,t):await fe(e);const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function le(e,t){try{const n=await te(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await F(e.firebaseDependencies,i),n}catch(e){throw e}}async function ge(e,t){const n={token:await q(e,t),createTime:Date.now(),subscriptionOptions:t};return await F(e,n),n.token}async function we(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:y(t)})}function he(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&i&&o&&s}async function be(e){try{await W(e)}catch{}}function ye(e,t){const n=e.onRegisteredHandler;n&&('function'==typeof n?n(t):n.next(t))}function me(e,t){const n=e.onUnregisteredHandler;n&&('function'==typeof n?n(t):n.next(t))}
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
   */async function ve(e){try{e.swRegistration=await navigator.serviceWorker.register(s,{scope:c}),e.swRegistration.update().catch(()=>{}),await Ie(e.swRegistration)}catch(e){throw C.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function Ie(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${l} ms`)),l),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=e=>{'activated'===e.target?.state&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error('No incoming service worker found.')))})}
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
   */async function ke(e,t){if(t||e.swRegistration||await ve(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw C.create("invalid-sw-registration");e.swRegistration=t}}
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
   */async function De(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=u)}
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
   */const Se=3;async function Te(e,t){const n=await Ce(e.swRegistration,e.vapidKey),i={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:n.endpoint,auth:b(n.getKey('auth')),p256dh:b(n.getKey('p256dh'))},o=e.firebaseDependencies.installations;for(let n=0;n<Se;n++){const{responseFid:s}=await z(e.firebaseDependencies,i);if(s===t)return;n<2&&await o.getToken(!0)}throw C.create("fid-registration-failed",{errorInfo:'CreateRegistration response FID does not match Firebase Installation ID'})}async function Ce(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:y(t)})}
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
   */const Oe=6048e5;async function Re(e,t){if(!navigator)throw C.create("only-available-in-window");if('default'===Notification.permission&&await Notification.requestPermission(),'granted'!==Notification.permission)throw C.create("permission-blocked");if(!e.onRegisteredHandler)throw C.create("invalid-on-registered-handler");await De(e,t?.vapidKey),await ke(e,t?.serviceWorkerRegistration);const n=e._registerNotifyChain.catch(()=>{});return e._registerNotifyChain=n.then(async()=>{const t=await e.firebaseDependencies.installations.getId(),n=await B(e.firebaseDependencies),i=Date.now();(!n||n.fid!==t||i>=n.lastRegisterTime+Oe)&&(await Te(e,t),await $(e.firebaseDependencies,{fid:t,lastRegisterTime:i,vapidKey:e.vapidKey}));if(!e.onRegisteredHandler)throw C.create("invalid-on-registered-handler");ye(e,t)}),e._registerNotifyChain}
/**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Me(t,n){return(0,e.onIdChange)(n,()=>{(async()=>{if(!t.onRegisteredHandler)return;await B(t.firebaseDependencies)&&await Re(t).catch(()=>{})})()})}
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
   */function Pe(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ke(t,e),je(t,e),Ee(t,e),t}function Ke(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const s=t.notification.icon;s&&(e.notification.icon=s)}function je(e,t){t.data&&(e.data=t.data)}function Ee(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}
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
function Ne(e){if(!e||!e.options)throw Ae('App Configuration Object');if(!e.name)throw Ae('App Name');const t=['projectId','apiKey','appId','messagingSenderId'],{options:n}=e;for(const e of t)if(!n[e])throw Ae(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ae(e){return C.create("missing-app-config-values",{valueName:e})}
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
   */class He{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:'stopped'};const i=Ne(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),'scheduled'===this.logQueue.state&&clearTimeout(this.logQueue.timerId),this.logQueue={state:'stopped'},Promise.resolve()}}
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
   */async function xe(e,t){if(!navigator)throw C.create("only-available-in-window");if('default'===Notification.permission&&await Notification.requestPermission(),'granted'!==Notification.permission)throw C.create("permission-blocked");return await De(e,t?.vapidKey),await ke(e,t?.serviceWorkerRegistration),de(e)}
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
   */async function Fe(e,t,n){const i=Ue(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[p],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}function Ue(e){switch(e){case h.NOTIFICATION_CLICKED:return'notification_open';case h.PUSH_RECEIVED:return'notification_foreground';default:throw new Error}}
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
   */async function Be(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;if(e.onMessageHandler&&n.messageType===h.PUSH_RECEIVED&&('function'==typeof e.onMessageHandler?e.onMessageHandler(Pe(n)):e.onMessageHandler.next(Pe(n))),e.onRegisteredHandler&&n.messageType===h.FID_REGISTERED){const t=n.fid;'function'==typeof e.onRegisteredHandler?e.onRegisteredHandler(t):e.onRegisteredHandler.next(t)}const i=n.data;var o;'object'==typeof(o=i)&&o&&p in o&&'1'===i["google.c.a.e"]&&await Fe(e,n.messageType,i)}
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
   */const $e=e=>{const t=new He(e.getProvider('app').getImmediate(),e.getProvider('installations-internal').getImmediate(),e.getProvider('analytics-internal'));return navigator.serviceWorker.addEventListener('message',e=>Be(t,e)),t._fidChangeUnsubscribe=Me(t,e.getProvider('installations').getImmediate()),t},We=e=>{const t=e.getProvider('messaging').getImmediate();return{getToken:e=>xe(t,e),register:e=>Re(t,e)}};
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
async function Le(){try{await(0,i.validateIndexedDBOpenable)()}catch(e){return!1}return'undefined'!=typeof window&&(0,i.isIndexedDBAvailable)()&&(0,i.areCookiesEnabled)()&&'serviceWorker'in navigator&&'PushManager'in window&&'Notification'in window&&'fetch'in window&&ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification')&&PushSubscription.prototype.hasOwnProperty('getKey')}
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
   */async function Ve(e){if(!navigator)throw C.create("only-available-in-window");return e.swRegistration||await ve(e),pe(e)}
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
   */function Ge(e,t){if(!navigator)throw C.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}
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
   */function Je(e,t){return e.onRegisteredHandler=t,()=>{e.onRegisteredHandler===t&&(e.onRegisteredHandler=null)}}
/**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Qe(e,t){return e.onUnregisteredHandler=t,()=>{e.onUnregisteredHandler===t&&(e.onUnregisteredHandler=null)}}
/**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function qe(e){if(!navigator)throw C.create("only-available-in-window");const t=await B(e.firebaseDependencies).catch(()=>{}),n=t?.fid??await e.firebaseDependencies.installations.getId();await Y(e.firebaseDependencies,n);try{await W(e.firebaseDependencies)}catch{}try{await U(e.firebaseDependencies)}catch{}const i=e.onUnregisteredHandler;i&&('function'==typeof i?i(n):i.next(n))}
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
   */function ze(e=(0,o.getApp)()){return Le().then(e=>{if(!e)throw C.create("unsupported-browser")},e=>{throw C.create("indexed-db-unsupported")}),(0,o._getProvider)((0,i.getModularInstance)(e),'messaging').getImmediate()}async function Ye(e,t){return xe(e=(0,i.getModularInstance)(e),t)}function Ze(e){return Ve(e=(0,i.getModularInstance)(e))}function Xe(e,t){return Ge(e=(0,i.getModularInstance)(e),t)}async function et(e,t){return Re(e=(0,i.getModularInstance)(e),t)}async function tt(e){return qe(e=(0,i.getModularInstance)(e))}function nt(e,t){return Je(e=(0,i.getModularInstance)(e),t)}function it(e,t){return Qe(e=(0,i.getModularInstance)(e),t)}
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
   */(0,o._registerComponent)(new t.Component('messaging',$e,"PUBLIC")),(0,o._registerComponent)(new t.Component('messaging-internal',We,"PRIVATE")),(0,o.registerVersion)(V,G),(0,o.registerVersion)(V,G,'esm2020')},459,[392,221,225,222,220]);