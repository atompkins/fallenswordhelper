import{a}from"./chunk-GYLYSP4O.js";import{a as p}from"./chunk-G7OP24LL.js";import{a as u,b as d}from"./chunk-6AYIUHMJ.js";import{a as c}from"./chunk-DZUNDM2W.js";import{a as i}from"./chunk-PRVNUO5J.js";import{a as m}from"./chunk-H4RRBTG7.js";import{a as o}from"./chunk-UYUWQQUH.js";import{a as e}from"./chunk-NGIDL4MJ.js";function s(r){return p({guild_id:r,subcmd:"guild_members"})}function b(r,t){let n=t||{};d("fsh_membrList",$.extend(n,r))}function g(r){return u("fsh_membrList").then(e(b,r)),r}function M(r,t){if(!t)return;let n=a(t.map(f=>[f.username,f]));return{[r]:{lastUpdate:i,...n}}}function h(r){return s(r).then(e(M,r))}function l(r){return h(r).then(g)}var L=[(r,t)=>t,(r,t)=>m(t),(r,t)=>m(t[r]),(r,t)=>typeof t[r].lastUpdate=="number",(r,t)=>t[r].lastUpdate>i-3e5];function x(r,t,n){return n(r,t)}function _(r,t){return L.every(e(x,r,t))}function E(r,t){return _(r,t)?t:l(r)}function G(r,t){return r?l(t):u("fsh_membrList").then(e(E,t))}function j(r,t){if(t)return o.membrList=t[r],o.membrList}function F(r){let t=c();return t?G(r,t).then(e(j,t)):Promise.reject(new Error("no guild id"))}export{F as a};
//# sourceMappingURL=chunk-KDNNF3DU.js.map