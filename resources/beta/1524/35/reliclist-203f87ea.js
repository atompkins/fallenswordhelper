import{g as t}from"./guild-61d59bbe.js"
import{B as i,p as n,t as e,aD as r,at as l,bu as a}from"./calfSystem-03050396.js"
import{p as s}from"./padZ-3a7e6015.js"
import{s as d}from"./splitTime-cdea3fd9.js"
async function c(i=0,n=100){const e=await function(i,n,e){const r={subcmd:"reliclist",offset:n,limit:e}
return i&&(r.guild_id=i),t(r)}(null,i,n)
return e.r.remaining_relics?e.r.relics.concat(await c(i+e.r.relics.length,Math.min(100,e.r.remaining_relics))):e.r.relics}function o(t,i){return i.id===t}function u(t){return t.attributes&&t.attributes.find(e(o,6))}function h(t,i){if(t){const n=t.find(e(o,i))
if(n)return n.value}return""}function f(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${r}relics${l}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${n=t.guild,n?`<a href="${a}${n.id}">${n.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(e(h,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=d(t)
return`${s(i[0])}d ${s(i[1])}h ${s(i[2])}m ${s(i[3])}s`}(t.time)}</td></tr>`
var i,n}function m(t){t.sort(((t,i)=>t.min_level-i.min_level)),i(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(u).map(f).join("")}</tbody></table>`}(t),n)}function p(){i("Loading...",n),c().then(m)}export default p
//# sourceMappingURL=reliclist-203f87ea.js.map
