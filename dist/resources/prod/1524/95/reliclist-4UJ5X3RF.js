import{a as f}from"./chunk-C6L7EMHU.js";import{a as u}from"./chunk-6PQMHL45.js";import{b as a}from"./chunk-FJXTYPNU.js";import{a as o}from"./chunk-ACOFHTYC.js";import"./chunk-RVP3BZF7.js";import{a as e}from"./chunk-PK7Z5EJN.js";import"./chunk-WRPLKSBT.js";import"./chunk-S5SWZJQ4.js";import"./chunk-MEWLLVXN.js";import"./chunk-232WRRJZ.js";import{a as n}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import"./chunk-NVWIQHSW.js";import{b as s}from"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import{L as c,Y as d,r as m}from"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import"./chunk-4P22QABU.js";async function l(t=0,r=100){let i=await f(null,t,r);if(i)return i.r.remaining_relics?i.r.relics.concat(await l(t+i.r.relics.length,Math.min(100,i.r.remaining_relics))):i.r.relics}function $(t){return`<a href="${d}relics${m}view&relic_id=${t.id}">${t.name}</a>`}function g(t){return t?`<a href="${c}${t.id}">${t.name}</a>`:""}function h(t,r){return r.id===t}function y(t){return t.attributes&&t.attributes.find(n(h,6))}function k(t,r){if(t){let i=t.find(n(h,r));if(i)return i.value}return""}function v(t){return[6,0,4,5,7,8].map(n(k,t)).join("</td><td>")}function w(t){if(!t)return"";let[r,i,p,b]=u(t);return`${e(r)}d ${e(i)}h ${e(p)}m ${e(b)}s`}function x(t){return`<tr><td>${t.location.realm.min_level}</td><td>${$(t)}</td><td>${g(t.guild)}</td><td>${v(t.attributes)}</td><td>${w(t.time)}</td></tr>`}var _=`#pCC .reliclist {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.reliclist, .reliclist th, .reliclist td {
  border: 1px solid black;
}
.reliclist th, .reliclist td {
  padding: 5px;
}
.reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {
  width: 100px;
}`;function A(t){return`<style>${_}</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(y).map(x).join("")}</tbody></table>`}function G(t){t.sort((r,i)=>r.location.realm.min_level-i.location.realm.min_level),o(A(t),a())}function L(){s("betaOptIn")&&(o("Loading...",a()),l().then(G))}export{L as default};
//# sourceMappingURL=reliclist-4UJ5X3RF.js.map
