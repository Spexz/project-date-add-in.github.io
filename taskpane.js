/*! For license information please see taskpane.js.LICENSE.txt */
!function(){var t={58394:function(t,e,r){"use strict";t.exports=r.p+"7303f3f310e030b9c1bc.css"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),r.b=document.baseURI||self.location.href,function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(r){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new N(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",y="suspendedYield",m="executing",g="completed",v={};function b(){}function w(){}function x(){}var E={};p(E,s,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(B([])));k&&k!==o&&a.call(k,s)&&(E=k);var I=x.prototype=b.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function T(e,r){function n(o,i,c,s){var u=d(e[o],e,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==t(p)&&a.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=h;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=P(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=d(t,e,n);if("normal"===u.type){if(o=n.done?g:y,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function P(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,i(I,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,l,"GeneratorFunction")),t.prototype=Object.create(I),t},n.awrap=function(t){return{__await:t}},j(T.prototype),p(T.prototype,u,(function(){return this})),n.AsyncIterator=T,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new T(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(I),p(I,l,"Generator"),p(I,s,(function(){return this})),p(I,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=B,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,s,"next",t)}function s(t){r(i,o,a,c,s,"throw",t)}c(void 0)}))}}var o="powerAutoMateEndpoint";function a(){return i.apply(this,arguments)}function i(){return(i=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",localStorage.getItem(o)||"");case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return s.apply(this,arguments)}function s(){return(s=n(e().mark((function t(){var r,n,o,i,c,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("projectIdDropdown"),n=document.getElementById("projectIdLoader"),t.prev=2,t.next=5,a();case 5:if(0!=(o=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:return n.style.display="block",r.disabled=!0,t.next=12,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-project-ids"})});case 12:return i=t.sent,t.next=15,new Promise((function(t){return setTimeout(t,500)}));case 15:return t.next=17,i.json();case 17:c=t.sent,r.innerHTML="",(s=document.createElement("option")).text="Select Project ID",s.value="",r.appendChild(s),c.projectIds.forEach((function(t){var e=document.createElement("option");e.value=t,e.text=t,r.appendChild(e)})),n.style.display="none",r.disabled=!1,t.next=34;break;case 28:t.prev=28,t.t0=t.catch(2),console.error("Error loading project IDs:",t.t0),n.style.display="none",r.disabled=!0,r.innerHTML="<option>Failed to load Project IDs</option>";case 34:case"end":return t.stop()}}),t,null,[[2,28]])})))).apply(this,arguments)}function u(){return l.apply(this,arguments)}function l(){return(l=n(e().mark((function t(){var r,n,o,i,c,s;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("dateTypeDropdown"),n=document.getElementById("dateTypeLoader"),t.prev=2,t.next=5,a();case 5:if(0!=(o=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:return n.style.display="block",r.disabled=!0,t.next=12,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"get-project-dates"})});case 12:return i=t.sent,t.next=15,new Promise((function(t){return setTimeout(t,500)}));case 15:return t.next=17,i.json();case 17:c=t.sent,r.innerHTML="",(s=document.createElement("option")).text="Select Date Type",s.value="",r.appendChild(s),c.projectDates.forEach((function(t){var e=document.createElement("option");e.value=t,e.text=t,r.appendChild(e)})),n.style.display="none",r.disabled=!1,t.next=34;break;case 28:t.prev=28,t.t0=t.catch(2),console.error("Error loading date types:",t.t0),n.style.display="none",r.disabled=!0,r.innerHTML="<option>Failed to load Date Types</option>";case 34:case"end":return t.stop()}}),t,null,[[2,28]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=n(e().mark((function t(){var r,n,o,i,c,s,u,l,p;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=document.getElementById("projectIdDropdown"),n=document.getElementById("dateTypeDropdown"),o=document.getElementById("dateSelector"),i=document.getElementById("submitLoader"),c=document.getElementById("submitMessage"),s=document.getElementById("submit"),r.value){t.next=11;break}return c.textContent="Please select a Project ID",c.className="message error",c.style.display="block",t.abrupt("return");case 11:if(n.value){t.next=16;break}return c.textContent="Please select a Date Type",c.className="message error",c.style.display="block",t.abrupt("return");case 16:if(o.value){t.next=21;break}return c.textContent="Please select a Date",c.className="message error",c.style.display="block",t.abrupt("return");case 21:return c.textContent="",c.style.display="none",t.prev=23,s.disabled=!0,i.style.display="block",t.next=28,a();case 28:return u=t.sent,t.next=31,fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"submit-data",projectId:r.value,dateType:n.value,date:o.value})});case 31:return l=t.sent,t.next=34,new Promise((function(t){return setTimeout(t,1e3)}));case 34:if(!l.ok){t.next=43;break}c.textContent="Data submitted successfully!",c.className="message success",c.style.display="block",r.selectedIndex=0,n.selectedIndex=0,o.value="",t.next=47;break;case 43:return t.next=45,l.json().catch((function(){return{}}));case 45:throw p=t.sent,new Error(p.message||"Submission failed");case 47:t.next=55;break;case 49:t.prev=49,t.t0=t.catch(23),console.error("Error submitting form:",t.t0),c.textContent=t.t0.message||"Error submitting data. Please try again.",c.className="message error",c.style.display="block";case 55:return t.prev=55,i.style.display="none",s.disabled=!1,t.finish(55);case 59:case"end":return t.stop()}}),t,null,[[23,49,55,59]])})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){var t,e=document.getElementById("settingsToggle"),r=document.getElementById("settingsPanel"),n=document.getElementById("endpointInput"),a=document.getElementById("saveSettings"),i=document.getElementById("endpointErrorMsg");e&&r?e.addEventListener("click",(function(){r.classList.toggle("open"),console.log("Settings toggle clicked")})):console.error("Settings toggle or panel elements not found"),a&&a.addEventListener("click",(function(){var t=n.value.trim();if(function(t){try{return new URL(t),!0}catch(t){return!1}}(t))try{localStorage.setItem(o,t),i&&(i.textContent=""),r&&r.classList.remove("open");var e=document.getElementById("submitMessage");e&&(e.textContent="Endpoint saved successfully!",e.className="message success",e.style.display="block",setTimeout((function(){e.style.display="none"}),3e3),c(),u())}catch(t){i&&(i.textContent="Unable to save settings. Check browser storage permissions."),console.error("Error saving endpoint:",t)}else i&&(i.textContent="Please enter a valid URL")})),t=localStorage.getItem(o)||"",n&&(n.value=t)})),Office.onReady((function(t){if(t.host===Office.HostType.Outlook){var e=document.getElementById("submit");e&&(e.onclick=p),c(),u()}}))}(),function(){"use strict";new URL(r(58394),r.b)}()}();
//# sourceMappingURL=taskpane.js.map