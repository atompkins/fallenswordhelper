import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,av as o,D as c,z as m}from"./calfSystem-ab393688.js"
import{a as l,i as f,v as p}from"./arena-75cade9c.js"
import{i as d}from"./interceptSubmit-02037ff6.js"
import{a as u}from"./addCommas-6123a9f9.js"
import{c as v}from"./createSelect-419c7e80.js"
import{i as j}from"./insertElementAfterBegin-925be257.js"
import{i as b}from"./isSelected-b93489f2.js"
import"./allthen-7b3f20e7.js"
import"./all-be4763d3.js"
import"./closestTr-cfdf992e.js"
import"./closest-abbeba17.js"
import"./idb-4a088c10.js"
import"./intValue-e485889b.js"
import"./changeMinMax-969ea6b3.js"
import"./numberIsNaN-2764ce9c.js"
import"./assets-5392162d.js"
import"./lvlTests-1664c9e3.js"
import"./loadDataTables-d8a11775.js"
import"./currentGuildId-0cbe4e98.js"
import"./isArray-4f4e9312.js"
import"./setTipped-c42cf871.js"
import"./formToUrl-96c1fd67.js"
import"./insertElementBefore-6e80e0ff.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-c3b2a2a0.js.map
