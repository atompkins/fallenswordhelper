import{a as l}from"./chunk-7XFSAEMH.js";import{a as m}from"./chunk-RXUDA5BR.js";import{a as i}from"./chunk-KSNZM6U7.js";import{a as s}from"./chunk-2UL3S6G6.js";import{a as n}from"./chunk-TWHHUG4E.js";import{a as o}from"./chunk-S5SWZJQ4.js";function a(t,e){return o({cmd:"quickbuff",subcmd:"activate",username:t,skill:e})}function r(t){let e=m(t);return e?e.id:-1}var g=({successBuff:t,successLevel:e})=>({id:r(t),level:Number(e)}),j=(t,e)=>t.filter(({name:f,successBuff:c})=>f===e.name&&c).map(g),q=({failBuff:t,failReason:e})=>({id:r(t),reason:e}),y=({blockBuff:t,blockReason:e})=>({id:r(t),reason:e}),v=(t,e)=>t.filter(({name:f,blockBuff:c})=>f===e.name&&c).map(y),N=(t,e)=>t.filter(({name:f,failBuff:c})=>f===e.name&&c).map(q).concat(v(t,e)),A=t=>i(t,"name").map(e=>({player:{name:e.name},cast:j(t,e),failed:N(t,e)}));function O(t){let[,e,f,c,b,p,d,k,x,B]=t;return{name:c||d||k,successBuff:e,successLevel:f,failBuff:b,failReason:p,blockReason:x,blockBuff:B}}function P(t){return{r:A(l(t).map(O)),s:!0}}async function u(t,e){return P(await s({cmd:"quickbuff",subcmd:"activate",targetPlayers:t.join(),skills:e}))}function Q(t,e){return n(a,u,t,e)}function R(t){return t.s&&t.r[0].casts.length===1}export{Q as a,R as b};
//# sourceMappingURL=chunk-ELLII2P3.js.map