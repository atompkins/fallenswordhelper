import{b as u}from"./chunk-U2ZTUVKQ.js";import{a as f}from"./chunk-UJDUZIFN.js";import{a as p}from"./chunk-PATY7B52.js";import{a as n}from"./chunk-HM3KCJWR.js";import{a as s}from"./chunk-MJQR7DVR.js";import{b as i}from"./chunk-IMDZFEI3.js";import{a}from"./chunk-E34NE2SS.js";import{a as c}from"./chunk-PJNUKY76.js";import{m as o}from"./chunk-SHG4I62I.js";var l=r=>new RegExp(`<td>${r}:</td><td>(\\d+)</td>`);function x(r){return{id:r.src.split("/").at(-1).split(".")[0],name:s(f(r).previousElementSibling),attributes:["Attack","Defense","Armor","HP","Damage"].map((e,t)=>({id:t,value:Number(c(l(e),r.dataset.tipped))}))}}function E(r){return{r:{mercs:a('#pCC img[src*="/mercs/"]',r).map(x)},s:!0}}async function m(){return E(await p({cmd:"guild",subcmd:"mercs"}))}function g(){return n(i,m)}var b=r=>Math.ceil(r*o),w=({attributes:r})=>u(r).map(b),A=(r,e)=>r.map((t,d)=>t+e[d]);function M(r){return r?.r?.mercs?.map(w).reduce(A,[0,0,0,0,0])}export{g as a,M as b};
//# sourceMappingURL=chunk-CBSTQ7GN.js.map