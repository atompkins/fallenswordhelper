import{a as b,b as y,c as h,d as x,f as m}from"./chunk-NEOIIKPE.js";var f=[];function z(t,i){return{subscribe:A(t,i).subscribe}}function A(t,i=b){let n,s=new Set;function u(r){if(x(t,r)&&(t=r,n)){let o=!f.length;for(let e of s)e[1](),f.push(e,t);if(o){for(let e=0;e<f.length;e+=2)f[e][0](f[e+1]);f.length=0}}}function l(r){u(r(t))}function a(r,o=b){let e=[r,o];return s.add(e),s.size===1&&(n=i(u,l)||b),r(t),()=>{s.delete(e),s.size===0&&n&&(n(),n=null)}}return{set:u,update:l,subscribe:a}}function E(t,i,n){let s=!Array.isArray(t),u=s?[t]:t;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");let l=i.length<2;return z(n,(a,r)=>{let o=!1,e=[],p=0,d=b,_=()=>{if(p)return;d();let c=i(s?e[0]:e,a,r);l?a(c):d=h(c)?c:b},q=u.map((c,g)=>m(c,w=>{e[g]=w,p&=~(1<<g),o&&_()},()=>{p|=1<<g}));return o=!0,_(),function(){y(q),d(),o=!1}})}export{A as a,E as b};
//# sourceMappingURL=chunk-GY3JG5AQ.js.map
