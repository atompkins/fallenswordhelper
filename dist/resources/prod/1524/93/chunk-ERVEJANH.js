import{a}from"./chunk-OFVL4Q2L.js";import{a as x}from"./chunk-76ARFLBC.js";import{a as u}from"./chunk-ICOENCHJ.js";import{a as d}from"./chunk-3IBYGSL2.js";import{a as n}from"./chunk-ATELUZSH.js";import{a as y}from"./chunk-4463IFOY.js";import{a as f}from"./chunk-EGS4CZL3.js";import{a as g}from"./chunk-L4JCGVZD.js";import{a as k}from"./chunk-NH6FAU6Q.js";import{a as p}from"./chunk-HYLQEGZ4.js";import{a as o}from"./chunk-CEGJSIVU.js";import{Na as l,j as i,k as s,l as c}from"./chunk-UYN3LUIY.js";var v=r=>Number(n(a(r)?.cells[4])?.replaceAll(",","")),b=r=>Number(o(i,r.href)),N=r=>n(a(r)?.cells[3]),_=r=>Number(o(c,r));function E(r){return{guild_xp:v(r),id:b(r),name:n(r),rank:N(r)}}function I(r){let{stam:t,max:e}=f(s,r);return{current_stamina:Number(t),last_activity:d(r).timestamp,level:Number(o(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(e),vl:_(r)}}function R(r){return{guild_id:y(),image_version:0,xp:-1,...E(r),...I(r.dataset.tipped)}}function T(r,t,e){return{id:e,members:r.filter(m=>m.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function A(){let r=await u(),e=g(r).getElementById("pCC"),m=k(l,e).map(R);return{r:x(m,"rank").map(p(T,m)),s:!0}}export{A as a};
//# sourceMappingURL=chunk-ERVEJANH.js.map