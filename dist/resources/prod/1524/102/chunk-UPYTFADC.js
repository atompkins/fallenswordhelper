import{a as f}from"./chunk-IYSXGPFG.js";function o(t){return new Promise(r=>{setTimeout(r,t)})}function c(t){return t.data?(delete t.data.fshrnd,$.param(t.data)):t.url}function w(t,r,e,n){let a=`${r.status} ${r.statusText} - `;if(r.statusText===n.toString())return a+c(t);let i=`${a+e} ${n} - ${c(t)}`;return e==="parsererror"?`${i} - ${r.responseText}`:i}var u=class extends Error{constructor([r,e,n,a],...i){super(w(r,e,n,a),...i),Error.captureStackTrace&&Error.captureStackTrace(this,u),this.jqSettings=r,this.jqXhr=e,this.jqTextStatus=n,this.jqErrorThrown=a}};function x(t){return typeof t=="string"?{url:t}:t}function T(t){f(window,"beforeunload",()=>t.abort())}var S=900,l=0,d=5,s=0;async function h(){s<d-$.active&&performance.now()-l>=S?(s=d-$.active,l=performance.now()):await o(100)}async function p(){for(;s<1;)await h();s-=1}function y(t){let r=x(t);return r.beforeSend=T,$.ajax(r).fail((e,n,a)=>{e.textStatus=n,e.errorThrown=a})}function g(t,r){if(r.status!==0)throw new u([t,r,r.textStatus,r.errorThrown])}async function m(t,r=10){await p();let e=null;try{e=await y(t)}catch(n){if(r&&n.status>=500)return m(t,r-1);g(t,n)}return e}export{u as a,o as b,m as c};
//# sourceMappingURL=chunk-UPYTFADC.js.map