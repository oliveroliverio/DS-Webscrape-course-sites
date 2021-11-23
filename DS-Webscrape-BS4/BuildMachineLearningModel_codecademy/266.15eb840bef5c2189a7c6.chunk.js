(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[266],{"9izG":function(e,t,n){"use strict";n.d(t,"a",(function(){return startLoggingJSErrors}));var r=n("rePB"),i=n("GL5z");const s=["Script error","Script error."];class JSErrorLogger{constructor(){Object(r.a)(this,"onError",(e=>{var t;if(!e)return;const n=null===(t=e.message)||void 0===t?void 0:t.replace(/"/g,'\\"');s.some((e=>n===e))||(this.errors[n]?this.errors[n]+=1:this.errors[n]=1,this.errors[n]>2||i.a.error(e))})),this.errors={},this.uniqueErrorCount=0,window.addEventListener("error",this.onError),window.addEventListener("unhandledrejection",(e=>this.onError(null==e?void 0:e.reason)))}}const startLoggingJSErrors=()=>{new JSErrorLogger}},AW55:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("GL5z"),i=n("eikI");const beacon=async(e,t)=>{try{var n,s;if(t.append("authentication_token",i.a.authenticationToken()),null!==(n=(s=navigator).sendBeacon)&&void 0!==n&&n.call(s,e,t))return Promise.resolve();const r={method:"POST",body:t};return"keepalive"in Request.prototype&&(r.keepalive=!0),await fetch(e,r)}catch(e){r.a.error(`Error in beacon: ${e}`)}},s="undefined"!=typeof window&&!0,StatsdClient=function(e={}){this.FLUSH_INTERVAL=1e3*(e.flushInterval||10),this.QUEUE_LIMIT=e.queueLimit||10,this.flushUrl=e.flushUrl,this._statsdQueue=[],this._beforeUnloadQueue={},this._flushTimeout=null,s&&(e.stopped||this._startIntervalFlush(),this._registerBeforeUnload())};(function(){this._preparedData=function(){const e=new FormData;return e.append("data",JSON.stringify(this._statsdQueue)),e},this._flush=function(){beacon(this.flushUrl,this._preparedData()),this._statsdQueue=[]},this._flushIfNecessary=function(){this._statsdQueue.length>0&&this._flush()},this._flushBeforeOnload=function(){for(const e in this._beforeUnloadQueue)this._beforeUnloadQueue[e]&&this._beforeUnloadQueue[e]();this._flushIfNecessary()},this._record=function(e,t,n,r){const i={name:e,payload:{measurement:t,action:n}};null!==r&&(i.payload.value=r),this._statsdQueue.push(i),setTimeout(this._flushIfOverflow.bind(this),0)},this._flushIfOverflow=function(){if(this._statsdQueue.length>=this.QUEUE_LIMIT){let e=!1;null!==this._flushTimeout&&(this._stopIntervalFlush(),e=!0),this._flush(),e&&this._startIntervalFlush()}},this._stopIntervalFlush=function(){clearTimeout(this._flushTimeout),this._flushTimeout=null},this._startIntervalFlush=function(){"complete"===document.readyState&&this._flushIfNecessary(),this._flushTimeout=setTimeout(this._startIntervalFlush.bind(this),this.FLUSH_INTERVAL)},this._registerBeforeUnload=function(){s&&(e=>{"onpagehide"in window?(window.addEventListener("pagehide",e,{capture:!0}),document.addEventListener("visibilitychange",(t=>{"hidden"===document.visibilityState&&e(t)}),{capture:!0})):(window.addEventListener("unload",e,{capture:!0}),window.addEventListener("beforeunload",e,{capture:!0}))})(this._flushBeforeOnload.bind(this))},this.increment=function(e,t){this._record(e,t,"increment",null)},this.decrement=function(e,t){this._record(e,t,"decrement",null)},this.gauge=function(e,t,n){this._record(e,t,"gauge",n)},this.timing=function(e,t,n){this._record(e,t,"timing",n)},this.set=function(e,t,n){this._record(e,t,"set",n)},this.registerUnloadAction=function(e,t){this._beforeUnloadQueue[e]=t}}).call(StatsdClient.prototype);const o=new StatsdClient({flushUrl:"/stats/v1/batch"})},GL5z:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("rePB"),i=n("4rkN"),s=n("tYyt");function sessionId(){var e,t;let n=null;if(null!==(e=window.sessionStorage)&&void 0!==e&&e.getItem){const e=window.sessionStorage.getItem("logger_session_id");null!==e&&(n=e)}return null===n&&(n="xxxxxx".replace(/x/g,(()=>(16*Math.random()|0).toString(16)))),null!==(t=window.sessionStorage)&&void 0!==t&&t.setItem&&window.sessionStorage.setItem("logger_session_id",n),n}var o=n("ODXe"),a=n("GoyQ"),c=n.n(a),u=n("MjPQ"),l=n.n(u);const errorOrMessage=e=>(e=>c()(e)&&"message"in e)(e)?`${e.message}`:`${e}`,captureErrorMessageStack=e=>{const t=e instanceof Error?[e,0]:[new Error(errorOrMessage(e)),1],n=Object(o.a)(t,2),r=n[0],i=n[1],s=l.a.parse(r),a=s[i];return{error:r,message:r.message,stack:{column:a.columnNumber,file:a.fileName,line:a.lineNumber,sources:s.map((e=>e.source)).join("\n")}}};class LoggerError extends Error{constructor(e){super(e),this.name=this.constructor.name}}class LoggerWarning extends Error{constructor(e){super(e),this.name=this.constructor.name}}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function stringify(e,t){return t.map((t=>{let n=e[t];return void 0===n&&(n=""),`${t}="${n}"`})).join(" ")}function send(e,t,n=Object.keys(t).sort(),r){const i=stringify(t,n),s=`//${window.location.host}/logs/v1/`,o=stringify({ua:window.navigator.userAgent,location:window.location.pathname,utype:CCDATA.current_user?"r":"a",uid:CCDATA.current_user?CCDATA.current_user._id:"null",backend:"container_api"},["ua","location","utype","uid","backend"]),a=document.createElement("img"),c={level:e,data:i,metadata:o,logfile:r,date:(new Date).valueOf(),session:sessionId()};a.src=`${s}?${function paramaterize(e){let t="";for(const n in e)""!=t&&(t+="&"),t+=`${n}=${encodeURIComponent(e[n])}`;return t}(c)}`}const createBasicLoggerMethod=e=>(t,n,r)=>("string"==typeof t&&(t={message:t}),["development","test"].includes(s.a.get("env"))&&console[e](`${n}.log`,t),send(e,t,r,n),!0),d=createBasicLoggerMethod("error"),h=createBasicLoggerMethod("warn"),f={info:createBasicLoggerMethod("info"),error:(e,t)=>{const n=captureErrorMessageStack(e),r=n.message,s=_objectSpread(_objectSpread({message:r},n.stack),{extraInfo:t});d(s,"javascript_errors"),i.a.addError(new LoggerError(r),s)},warn:e=>{const t=captureErrorMessageStack(e),n=t.message,r=_objectSpread({message:n},t.stack);h(r,"javascript_warnings"),i.a.addError(new LoggerWarning(n),r)}}},JqWL:function(e,t,n){"use strict";n.d(t,"a",(function(){return withEmotion}));var r=n("wx14"),i=n("Ff2n"),s=n("K6C0"),o=n("630U"),a=n("YhZ8"),c=n("q1tI"),u=n.n(c);const l=["cache"],withEmotion=(e,t)=>n=>{let c=n.cache,d=Object(i.a)(n,l);return u.a.createElement(o.c,Object(r.a)({cache:c},t),u.a.createElement(a.a,null),u.a.createElement(s.a,null,u.a.createElement(e,d)))}},Ueeo:function(e,t,n){"use strict";var r=n("ODXe"),i=n("24Ii"),s=n.n(i),o=n("GL5z"),a=n("AW55"),c=n("hFGM"),u=n("YFq9");const l={start(e){const t=window.ASSETS_VERSION;if(!t)return;let n=!0;u.a.on("active",(()=>{n=!0}));const tryRequestAssetsVersion=()=>{const r=e*(n?1:10);(async()=>{const e=(await s.a.get("/assets_version").use(c.b).set("Cache-Control","no-cache,no-store,must-revalidate,max-age=-1,private").use(c.d)).body.value;e.match("assets-v")&&(t!==e&&(a.a.increment("mandatory_assets_version.refresh","client_refresh"),window.location.assign(window.location.href)),n=!1)})().catch((e=>o.a.error(e))).finally((()=>setTimeout(tryRequestAssetsVersion,r)))};setTimeout(tryRequestAssetsVersion,e)}},d=6e4,h=(()=>{const e=window.location.search.match(/pollFrequency=(\d+)/);if(e)try{return[0,e?parseInt(e[1],10):d]}catch(e){}return[d,d]})(),f=Object(r.a)(h,2),m=f[0],g=f[1];setTimeout((()=>{l.start(g)}),m)},YFq9:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("fiWp"),i=n("DzJC"),s=n.n(i);let o,a,c,u,l=!1,d=!1,h=!1,f=0,m=null,g=new Date,v=null;function setIdle(){clearTimeout(v),function stopClock(){d=!0,clearInterval(m)}()}function visibilityChange(){document.hidden&&setIdle()}function clock(){f+=1,f>0&&f%o==0&&a(f)}function trigger(){h||(l||function startRiveted(){const e=new Date;l=!0,u(e-g),m=setInterval(clock,1e3)}(),d&&function restartClock(){d=!1,clearInterval(m),m=setInterval(clock,1e3)}(),clearTimeout(v),v=setTimeout(setIdle,1e3*c+100))}const _={init:function init(e){c=e.idleTimeout,o=e.reportInterval,a=e.eventHandler,u=e.userTimingHandler,"undefined"!=typeof document&&(document.addEventListener("keydown",trigger),document.addEventListener("click",trigger),window.addEventListener("mousemove",s()(trigger,500)),window.addEventListener("scroll",s()(trigger,500)),document.addEventListener("visibilitychange",visibilityChange))},trigger:trigger,setIdle:setIdle,on:function turnOn(){h=!1},off:function turnOff(){setIdle(),h=!0},reset:function resetRiveted(){g=new Date,l=!1,d=!1,clearInterval(m),clearTimeout(v)}};class UserActivity_UserActivityEmitter extends r.EventEmitter{}const p=new UserActivity_UserActivityEmitter;_.init({idleTimeout:60,reportInterval:30,userTimingHandler:(...e)=>p.emit("timing",...e),eventHandler:()=>{p.emit("active")}}),p.riveted=_},cdx9:function(e,t,n){"use strict";n.d(t,"a",(function(){return initializeReactBinder}));var r=n("MKeS"),i=n("q1tI"),s=n.n(i),o=n("i8i4"),a=n.n(o),c=n("GL5z");const u="data-react-class";const initializeReactBinder=async(e,t={})=>{await Object(r.b)();const n=[...document.querySelectorAll("[data-react-class]")];return Promise.all(n.map((async n=>{const r=n.getAttribute(u);let i=e[r];const o=t[r];if(o&&(i=await o()),i){const e=(()=>{try{var e,t;return JSON.parse((null===(e=document.getElementById("_INITIAL_REACT_PROPS_"))||void 0===e||null===(t=e.textContent)||void 0===t?void 0:t.trim())||"")}catch(e){return c.a.error(e),{}}})();n.innerHTML?a.a.hydrate(s.a.createElement(i,e),n):a.a.render(s.a.createElement(i,e),n)}})))}},eikI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("tYyt");const i={isAdmin(){return this._hasRole("admin")},isAdvisor(){return this._hasRole("advisor")},isCustomerService(){return this._hasRole("customer_service")},isAuthor(){return this._hasRole("author")},_hasRole(e){return(this.get("roles")||[]).indexOf(e)>=0},isAnon:()=>!r.a.has("current_user"),isPro(){return this.get("pro",!1)},id(){return this.get("_id","anon")},authenticationToken(){const e=this.isAnon()?r.a.get("anonymous_user"):r.a.get("current_user");return(null==e?void 0:e.authentication_token)||""},get(e,t){const n=(r.a.get("current_user")||{})[e];return void 0===n?t:n},hasGodMode:()=>i.isAdmin()||i.isAdvisor()||i.isAuthor(),payments:(e,t)=>r.a.get("payments",{})[e]||t}},hFGM:function(e,t,n){"use strict";n.d(t,"b",(function(){return csrf})),n.d(t,"d",(function(){return userAuth})),n.d(t,"a",(function(){return apiAuth})),n.d(t,"c",(function(){return jwtAuth}));var r=n("fw5G"),i=n.n(r),s=n("tYyt"),o=n("eikI");function csrf(e){const t=s.a.get("authenticity_token");t&&e.set("X-CSRF-Token",t)}function userAuth(e){const t=o.a.authenticationToken();if(!o.a.isAnon()&&t){const n=new i.a(e.url).addQueryParam("authentication_token",t);e.url=n.toString()}window.CCDATA.current_user&&e.set("X-Auth-Token",window.CCDATA.current_user.authentication_token)}function apiAuth(e){const t=o.a.authenticationToken();!o.a.isAnon()&&t&&(e.set("X-Auth-Token",t),e.set("X-User-Id",o.a.id()))}function jwtAuth(e){const t=o.a.get("jwt");t&&e.set("Authorization",`Bearer ${t}`)}},mRth:function(e,t,n){"use strict";n.r(t);n("lfCk"),n("t1M6"),n("Ueeo");var r=n("4rkN"),i=n("9izG");["staging","production","k8s_dev","dev"].includes(CCDATA.env)&&CCDATA.dd_service&&(r.a.init({applicationId:"cba56357-90aa-41e2-804e-edb273a29cfe",clientToken:"pub4b4c157b8033dcd97e14c779a3ca222c",service:CCDATA.dd_service,env:CCDATA.env,version:CCDATA.dd_version,sampleRate:100,trackInteractions:!0}),CCDATA.current_user&&r.a.setUser({id:CCDATA.current_user._id})),Object(i.a)(),Promise.all([n.e(221),n.e(214),n.e(377)]).then(n.bind(null,"y7H3")).then((({userSignUp:e})=>{e.track()})),console.log("👋 Hi there!\nWhile you're here, how about popping over to https://codecademy.com/about/careers?\nWe're hiring for passionate, talented engineers, and would love to hear from you! ✨\n")},tYyt:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const getCCDATA=()=>"undefined"!=typeof window&&window.CCDATA||{},r={get:(e,t)=>getCCDATA()[e]||t,has:e=>e in getCCDATA()}}}]);
//# sourceMappingURL=266.15eb840bef5c2189a7c6.chunk.js.map