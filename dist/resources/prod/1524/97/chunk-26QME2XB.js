import{a}from"./chunk-RIVS3SLC.js";import{a as x}from"./chunk-B5BLM7DB.js";import{a as u}from"./chunk-3DJDPVGE.js";import{a as d}from"./chunk-IOULKWNF.js";import{a as n}from"./chunk-DS5TO6ZD.js";import{a as y}from"./chunk-QVZVZ2TH.js";import{a as f}from"./chunk-Q2AMJ3AN.js";import{a as g}from"./chunk-PHWG56X4.js";import{Na as l,j as i,k as s,l as c}from"./chunk-P5UJIVHH.js";import{a as k}from"./chunk-VV2IBFUQ.js";import{a as p}from"./chunk-Y7Z3DYSJ.js";import{a as o}from"./chunk-GOZAE5SK.js";var v=r=>Number(n(a(r)?.cells[4])?.replaceAll(",","")),b=r=>Number(o(i,r.href)),N=r=>n(a(r)?.cells[3]),_=r=>Number(o(c,r));function E(r){return{guild_xp:v(r),id:b(r),name:n(r),rank:N(r)}}function I(r){let{stam:t,max:e}=f(s,r);return{current_stamina:Number(t),last_activity:d(r).timestamp,level:Number(o(/Level:.+?(?<l>\d+)/,r)),max_stamina:Number(e),vl:_(r)}}function R(r){return{guild_id:y(),image_version:0,xp:-1,...E(r),...I(r.dataset.tipped)}}function T(r,t,e){return{id:e,members:r.filter(m=>m.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function A(){let r=await u(),e=g(r).getElementById("pCC"),m=k(l,e).map(R);return{r:x(m,"rank").map(p(T,m)),s:!0}}export{A as a};
//# sourceMappingURL=chunk-26QME2XB.js.map