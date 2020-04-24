import{aP as t,aF as s,ab as e,av as n,q as a,am as r,e as c,j as i,ah as o,p as h,C as l,A as f,o as d,v as u,aj as p}from"./calfSystem-cb871cc0.js"
import"./toLowerCase-03171539.js"
import"./alpha-e77c8554.js"
import{d as m}from"./doSortParams-8049eb59.js"
import{p as g,s as y,a as b}from"./stringSort-1e057bc2.js"
function C(t){return`${t.min.toString()} - ${t.max.toString()}`}function $(t){return`<span class="fshNoWrap">${t[0]}: ${C(t[1])}</span>`}function k(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map($).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function v(n,a){return t(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${s}creatures/${r}.png" data-tipped="<img src='${s}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:e(n[a].level),attack:C(n[a].attack),defense:C(n[a].defense),armor:C(n[a].armor),damage:C(n[a].damage),hp:C(n[a].hp),enhancements:k(n[a].enhancements)})
var r}function L(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function j(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=g(t,c.sortBy,1),n=g(s,c.sortBy,1)
return e=L(e),n=L(n),y(e-n)}let w,S
function A(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",w)}function E(t){return"<tr>"+`<td class="fshCenter">${t.image}</td>`+`<td>${t.name}</td>`+`<td class="fshCenter">${t.creature_class}</td>`+`<td class="fshCenter">${t.level}</td>`+`<td class="fshCenter">${t.attack}</td>`+`<td class="fshCenter">${t.defense}</td>`+`<td class="fshCenter">${t.armor}</td>`+`<td class="fshCenter">${t.damage}</td>`+`<td class="fshCenter">${t.hp}</td>`+`<td class="fshCenter">${t.enhancements}</td></tr>`}function P(){const t=f("entityTableOutput")
S&&t&&l(S.map(E).join(""),t)}function _(t){m(t),function(t){"string"===t?S.sort(b):S.sort(j)}(function(t){return t.getAttribute("sortType")||"string"}(t)),P()}function B(t){const{target:s}=t
if("clearEntityLog"===s.id)return p("fsh_monsterLog",""),void A();(function(t){return t.classList.contains("fshLink")&&t.hasAttribute("sortkey")})(s)&&_(s)}function O(t){t?(!function(t){S=n(t).map(u(v,t))}(t),c.sortBy="level",c.sortAsc=!0,S.sort(j),S&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',w),d(w,B)),P()):A()}export default function(t){i()&&function(t){w=t||h,w&&o("fsh_monsterLog").then(O)}(t)}
//# sourceMappingURL=monstorLog-18c35bba.js.map
