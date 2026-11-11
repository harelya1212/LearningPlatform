__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"deleteInstallations",{enumerable:!0,get:function(){return vt}}),Object.defineProperty(_e,"getId",{enumerable:!0,get:function(){return gt}}),Object.defineProperty(_e,"getInstallations",{enumerable:!0,get:function(){return St}}),Object.defineProperty(_e,"getToken",{enumerable:!0,get:function(){return wt}}),Object.defineProperty(_e,"onIdChange",{enumerable:!0,get:function(){return Ct}});var t=r(d[0]),e=r(d[1]),n=r(d[2]),o=r(d[3]);const s="@firebase/installations",u="0.6.24",c=1e4,f=`w:${u}`,p='FIS_v2',l='https://firebaseinstallations.googleapis.com/v1',w=36e5,h={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":'Firebase Installation is not registered.',"installation-not-found":'Firebase Installation not found.',"request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":'Could not process request. Application offline.',"delete-pending-registration":"Can't delete installation while there is a pending registration request."},y=new n.ErrorFactory('installations','Installations',h);function v(t){return t instanceof n.FirebaseError&&t.code.includes("request-failed")}
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
   */function C({projectId:t}){return`${l}/projects/${t}/installations`}function S(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace('s','000'))),creationTime:Date.now()};var e}async function b(t,e){const n=(await e.json()).error;return y.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function I({apiKey:t}){return new Headers({'Content-Type':'application/json',Accept:'application/json','x-goog-api-key':t})}function T(t,{refreshToken:e}){const n=I(t);return n.append('Authorization',P(e)),n}async function k(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P(t){return`${p} ${t}`}
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
   */async function j({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const o=C(t),s=I(t),u=e.getImmediate({optional:!0});if(u){const t=await u.getHeartbeatsHeader();t&&s.append('x-firebase-client',t)}const c={fid:n,authVersion:p,appId:t.appId,sdkVersion:f},l={method:'POST',headers:s,body:JSON.stringify(c)},w=await k(()=>fetch(o,l));if(w.ok){const t=await w.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:S(t.authToken)}}throw await b('Create Installation',w)}
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
   */function q(t){return new Promise(e=>{setTimeout(e,t)})}
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
const $=/^[cdef][\w-]{21}$/,E='';function D(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=_(t);return $.test(e)?e:E}catch{return E}}function _(t){var e;return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,'-').replace(/\//g,'_')).substr(0,22)}
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
   */function O(t){return`${t.appName}!${t.appId}`}
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
   */const A=new Map;function N(t,e){const n=O(t);x(n,e),M(n,e)}function F(t,e){L();const n=O(t);let o=A.get(n);o||(o=new Set,A.set(n,o)),o.add(e)}function V(t,e){const n=O(t),o=A.get(n);o&&(o.delete(e),0===o.size&&A.delete(n),B())}function x(t,e){const n=A.get(t);if(n)for(const t of n)t(e)}function M(t,e){const n=L();n&&n.postMessage({key:t,fid:e}),B()}let H=null;function L(){return!H&&'BroadcastChannel'in self&&(H=new BroadcastChannel('[Firebase] FID Change'),H.onmessage=t=>{x(t.data.key,t.data.fid)}),H}function B(){0===A.size&&H&&(H.close(),H=null)}
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
   */const K='firebase-installations-database',z=1,J='firebase-installations-store';let R=null;function U(){return R||(R=(0,o.openDB)(K,z,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(J)}})),R}async function G(t,e){const n=O(t),o=(await U()).transaction(J,'readwrite'),s=o.objectStore(J),u=await s.get(n);return await s.put(e,n),await o.done,u&&u.fid===e.fid||N(t,e.fid),e}async function Q(t){const e=O(t),n=(await U()).transaction(J,'readwrite');await n.objectStore(J).delete(e),await n.done}async function W(t,e){const n=O(t),o=(await U()).transaction(J,'readwrite'),s=o.objectStore(J),u=await s.get(n),c=e(u);return void 0===c?await s.delete(n):await s.put(c,n),await o.done,!c||u&&u.fid===c.fid||N(t,c.fid),c}
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
   */async function X(t){let e;const n=await W(t.appConfig,n=>{const o=Y(n),s=Z(t,o);return e=s.registrationPromise,s.installationEntry});return n.fid===E?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Y(t){return at(t||{fid:D(),registrationStatus:0})}function Z(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(y.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:tt(t,n)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await j(t,e);return G(t.appConfig,n)}catch(n){throw v(n)&&409===n.customData.serverCode?await Q(t.appConfig):await G(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);for(;1===e.registrationStatus;)await q(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await X(t);return n||e}return e}function nt(t){return W(t,t=>{if(!t)throw y.create("installation-not-found");return at(t)})}function at(t){return 1===(e=t).registrationStatus&&e.registrationTime+c<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
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
   */}async function it({appConfig:t,heartbeatServiceProvider:e},n){const o=rt(t,n),s=T(t,n),u=e.getImmediate({optional:!0});if(u){const t=await u.getHeartbeatsHeader();t&&s.append('x-firebase-client',t)}const c={installation:{sdkVersion:f,appId:t.appId}},p={method:'POST',headers:s,body:JSON.stringify(c)},l=await k(()=>fetch(o,p));if(l.ok){return S(await l.json())}throw await b('Generate Auth Token',l)}function rt(t,{fid:e}){return`${C(t)}/${e}/authTokens:generate`}
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
   */async function ot(t,e=!1){let n;const o=await W(t.appConfig,o=>{if(!ft(o))throw y.create("not-registered");const s=o.authToken;if(!e&&pt(s))return o;if(1===s.requestStatus)return n=st(t,e),o;{if(!navigator.onLine)throw y.create("app-offline");const e=dt(o);return n=ct(t,e),e}});return n?await n:o.authToken}async function st(t,e){let n=await ut(t.appConfig);for(;1===n.authToken.requestStatus;)await q(100),n=await ut(t.appConfig);const o=n.authToken;return 0===o.requestStatus?ot(t,e):o}function ut(t){return W(t,t=>{if(!ft(t))throw y.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+c<Date.now()?{...t,authToken:{requestStatus:0}}:t;var n;
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
   */})}async function ct(t,e){try{const n=await it(t,e),o={...e,authToken:n};return await G(t.appConfig,o),n}catch(n){if(!v(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n={...e,authToken:{requestStatus:0}};await G(t.appConfig,n)}else await Q(t.appConfig);throw n}}function ft(t){return void 0!==t&&2===t.registrationStatus}function pt(t){return 2===t.requestStatus&&!lt(t)}function lt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+w}function dt(t){return{...t,authToken:{requestStatus:1,requestTime:Date.now()}}}async function gt(t){const e=t,{installationEntry:n,registrationPromise:o}=await X(e);return o?o.catch(console.error):ot(e).catch(console.error),n.fid}
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
   */async function wt(t,e=!1){const n=t;await mt(n);return(await ot(n,e)).token}async function mt(t){const{registrationPromise:e}=await X(t);e&&await e}
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
   */async function ht(t,e){const n=yt(t,e),o={method:'DELETE',headers:T(t,e)},s=await k(()=>fetch(n,o));if(!s.ok)throw await b('Delete Installation',s)}function yt(t,{fid:e}){return`${C(t)}/${e}`}
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
   */async function vt(t){const{appConfig:e}=t,n=await W(e,t=>{if(!t||0!==t.registrationStatus)return t});if(n){if(1===n.registrationStatus)throw y.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw y.create("app-offline");await ht(e,n),await Q(e)}}}
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
   */function Ct(t,e){const{appConfig:n}=t;return F(n,e),()=>{V(n,e)}}
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
   */function St(e=(0,t.getApp)()){return(0,t._getProvider)(e,'installations').getImmediate()}
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
   */function bt(t){if(!t||!t.options)throw It('App Configuration');if(!t.name)throw It('App Name');const e=['projectId','apiKey','appId'];for(const n of e)if(!t.options[n])throw It(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function It(t){return y.create("missing-app-config-values",{valueName:t})}
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
   */const Tt='installations',kt=e=>{const n=e.getProvider('app').getImmediate();return{app:n,appConfig:bt(n),heartbeatServiceProvider:(0,t._getProvider)(n,'heartbeat'),_delete:()=>Promise.resolve()}},Pt=e=>{const n=e.getProvider('app').getImmediate(),o=(0,t._getProvider)(n,Tt).getImmediate();return{getId:()=>gt(o),getToken:t=>wt(o,t)}};(0,t._registerComponent)(new e.Component(Tt,kt,"PUBLIC")),(0,t._registerComponent)(new e.Component("installations-internal",Pt,"PRIVATE")),(0,t.registerVersion)(s,u),(0,t.registerVersion)(s,u,'esm2020')},414,[222,223,224,227]);