(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[376],{GX1L:function(e,r,t){"use strict";t.d(r,"a",(function(){return T}));var n=t("ycTH"),o=t("e7SQ");const c=Object(o.a)({},{});var s=t("89j5"),a=t("rePB");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}const i=Object(o.a)({},function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},{content:""}));var d=t("9ZtG"),u=t("yEeF"),b=t("Dc1S"),p=t("SQLr"),j=t("Ff2n"),f=t("Wt1U"),O=t.n(f),_=t("givd");const l=["type","id"];function reducers_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function reducers_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?reducers_ownKeys(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):reducers_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const y=Object(o.a)({[`${_.c}`]:(e,r)=>{let t=r.payload,n=t.type,o=t.id,c=Object(j.a)(t,l);return reducers_objectSpread(reducers_objectSpread({},e),{},{entities:reducers_objectSpread(reducers_objectSpread({},e.entities),{},{[o]:{id:o,type:n,props:c}}),ids:[...e.ids,o]})},[`${_.b}`]:(e,{payload:r})=>{const t=reducers_objectSpread({},e.entities);delete t[r];const n=O()(e.ids,r);return reducers_objectSpread(reducers_objectSpread({},e),{},{entities:t,ids:n})},[`${_.a}`]:e=>{const r=reducers_objectSpread({},e.entities);delete r[e.ids[0]];const t=e.ids.slice(1);return reducers_objectSpread(reducers_objectSpread({},e),{},{entities:r,ids:t})}},{entities:{},ids:[]});var S=t("Puqe"),g=t.n(S),w=t("QVEU"),v=t.n(w),P=t("BkRI"),D=t.n(P),h=t("GsXu");function _toPropertyKey(e){var r=function _toPrimitive(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function notifications_reducers_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function notifications_reducers_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?notifications_reducers_ownKeys(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):notifications_reducers_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const m=Object(o.a)({[`${h.g}`]:e=>notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{polling:!0}),[`${h.h}`]:e=>notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{polling:!1}),[`${h.c}`]:(e,{payload:r})=>r?notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{areas:notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e.areas),{},{[r.id]:r})}):e,[`${h.b}`]:(e,{payload:r})=>{if(!r)return e;const t=e.areas,n=(t[r],Object(j.a)(t,[r].map(_toPropertyKey)));return notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{areas:n})},[`${h.a}`]:(e,{payload:r})=>notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{entities:notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e.entities),v()(r,"id"))}),[`${h.d}`]:(e,{payload:r})=>r?notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{entities:g()(e.entities,r)}):e,[`${h.e}`]:(e,{payload:r})=>{if(!r)return e;const t=D()(e.entities);return r.forEach((e=>{t[e].status=0})),notifications_reducers_objectSpread(notifications_reducers_objectSpread({},e),{},{entities:t})}},{polling:!1,entities:{},areas:{},baseUrl:""});var E=t("rkSx"),x=t("eMxR"),K=t("eI9G");function releasedContent_reducers_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function releasedContent_reducers_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?releasedContent_reducers_ownKeys(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):releasedContent_reducers_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const k=Object(o.a)({[`${K.b}`]:(e,{payload:r})=>releasedContent_reducers_objectSpread(releasedContent_reducers_objectSpread({},e),r)},{});var A=t("ANjH"),L=t("jhD/"),$=t("9te+");function sandboxes_reducers_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function sandboxes_reducers_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?sandboxes_reducers_ownKeys(Object(t),!0).forEach((function(r){Object(a.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):sandboxes_reducers_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const sandboxCreateOrFetchSuccessReducer=(e,{payload:r})=>{if(!r)return e;const t=r.id;return sandboxes_reducers_objectSpread(sandboxes_reducers_objectSpread({},e),{},{[t]:Object(L.a)(r)})},C=Object(o.a)({[`${$.b}`]:sandboxCreateOrFetchSuccessReducer,[`${$.h}`]:sandboxCreateOrFetchSuccessReducer,[`${$.k}`]:(e,{payload:r})=>{if(!r)return e;const t=r.sandboxId,n=r.newValues,o=e[t];return n&&o?sandboxes_reducers_objectSpread(sandboxes_reducers_objectSpread({},e),{},{[t]:sandboxes_reducers_objectSpread(sandboxes_reducers_objectSpread({},o),n)}):e},[`${$.e}`]:(e,{payload:r})=>{if(!r)return e;const t=sandboxes_reducers_objectSpread({},e);return delete t[r],t},[`${$.m}`]:(e,{payload:r})=>{if(!r)return e;const t=r.sandboxId,n=r.sandboxUser,o=e[t];return o&&n?sandboxes_reducers_objectSpread(sandboxes_reducers_objectSpread({},e),{},{[t]:sandboxes_reducers_objectSpread(sandboxes_reducers_objectSpread({},o),n)}):e}},{}),I=Object(A.c)({byId:C}),T={alerts:n.a,apiConfig:c,brandedBanner:s.a,butterbar:i,catalogNavLinks:d.a,contentful:u.a,currentUser:b.a,entities:(e={})=>e,features:p.a,modals:y,notifications:m,payment:E.a,proExclusive:x.a,releasedContent:k,sandbox:I}},eI9G:function(e,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"a",(function(){return fetchReleasedContent}));var n=t("E+oP"),o=t.n(n),c=t("aWKK"),s=t("zHg5"),a=t("AZlx"),i=t("yy36");var d=t("fgaj");const u=Object(c.a)("RELEASED_CONTENT_LOADED"),fetchReleasedContent=()=>async(e,r)=>{const t=r();if(!o()(Object(d.b)(t)))return;const n=Object(i.W)(t),c=Object(a.a)(r()),b=(await Object(s.a)({url:c,jwt:n,query:"\nquery releasedContent {\n  releasedContent {\n    path_ids: pathIds\n    path_slugs: pathSlugs\n    track_ids: trackIds\n    track_slugs: trackSlugs\n    beta_track_ids: betaTrackIds\n    beta_track_slugs: betaTrackSlugs\n    pro_exclusive_track_ids: proExclusiveTrackIds\n    pro_exclusive_track_slugs: proExclusiveTrackSlugs\n    certificate_denylist_track_ids: certificateDenylistTrackIds\n  }\n}\n"})).releasedContent;e(u(b))}},eMxR:function(e,r,t){"use strict";t.d(r,"a",(function(){return proExclusive}));const proExclusive=(e={})=>e},givd:function(e,r,t){"use strict";t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return d}));var n=t("rePB"),o=t("aWKK"),c=t("xDdU"),s=t.n(c);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){Object(n.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const a=Object(o.a)("MODALS/SHOW_MODAL",(e=>_objectSpread(_objectSpread({},e),{},{id:s()()}))),i=Object(o.a)("MODALS/HIDE_CURRENT_MODAL"),d=Object(o.a)("MODALS/HIDE_MODAL")},"jhD/":function(e,r,t){"use strict";t.d(r,"a",(function(){return camelCaseKeys})),t.d(r,"b",(function(){return deepCamelCaseKeys}));var n=t("b3vA"),o=t.n(n),c=t("JoEE"),s=t.n(c),a=t("Sbzg"),i=t.n(a);const camelCaseKeys=e=>s()(i.a,e),deepCamelCaseKeys=e=>{if(!e)return e;if("string"==typeof e||"number"==typeof e)return e;if(Array.isArray(e))return e.map(deepCamelCaseKeys);const r=camelCaseKeys(e);return o()(deepCamelCaseKeys,r)}},zHg5:function(e,r,t){"use strict";t.d(r,"a",(function(){return contentServiceV4Request}));var n=t("YA6q"),o=t("GL5z");const contentServiceV4Request=async({url:e="https://contentv4.staging-eks.codecademy.com/graphql",jwt:r,logAndSwallowErrors:t=!0,query:c,variables:s={}})=>{const a={Authorization:`Bearer ${r}`},i=await Object(n.a)({endpoint:e,data:{query:c,variables:s},headers:a,method:"POST"}),d=Object(n.b)({logAndSwallowErrors:t,errorMessage:"Unable to fetch data from content service v4."}),u=await d(i),b=u.errors,p=u.data;if(void 0!==p)return b&&o.a.error(`GraphQL errors: ${null==b?void 0:b.map((e=>e.message)).join("\n")}`),p;if(!t)throw new Error(`GraphQL errors: ${null==b?void 0:b.map((e=>e.message)).join("\n")}`);o.a.error(`GraphQL errors: ${null==b?void 0:b.map((e=>e.message)).join("\n")}`)}}}]);
//# sourceMappingURL=376.7c75e90989e2a400a060.chunk.js.map