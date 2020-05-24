import{aR as t,aH as s,ab as e,ax as n,n as a,am as r,c as i,j as o,ah as c,p as h,B as l,z as f,o as d,u,aj as p}from"./calfSystem-d96a3efd.js"
import"./toLowerCase-a0540d2c.js"
import"./alpha-2978f86d.js"
import{d as m}from"./doSortParams-15b258d9.js"
import{p as g,s as y,a as C}from"./stringSort-999874e6.js"
function b(t){return`${t.min.toString()} - ${t.max.toString()}`}function $(t){return`<span class="fshNoWrap">${t[0]}: ${b(t[1])}</span>`}function k(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map($).join("<br>"),s+"</span>"}return'<span class="fshGrey">**Missing**</span>'}function L(n,a){return t(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${s}creatures/${r}.png" data-tipped="<img src='${s}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:e(n[a].level),attack:b(n[a].attack),defense:b(n[a].defense),armor:b(n[a].armor),damage:b(n[a].damage),hp:b(n[a].hp),enhancements:k(n[a].enhancements)})
var r}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function v(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=g(t,i.sortBy,1),n=g(s,i.sortBy,1)
e=j(e),n=j(n)
return y(e-n)}let w,S
function A(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",w)}function B(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function E(){const t=f("entityTableOutput")
S&&t&&l(S.map(B).join(""),t)}function _(t){m(t)
!function(t){"string"===t?S.sort(C):S.sort(v)}(function(t){return t.getAttribute("sortType")||"string"}(t)),E()}function P(t){const{target:s}=t
if("clearEntityLog"===s.id)return p("fsh_monsterLog",""),void A();(function(t){return t.classList.contains("fshLink")&&t.hasAttribute("sortkey")})(s)&&_(s)}function x(t){t?(!function(t){S=n(t).map(u(L,t))}(t),i.sortBy="level",i.sortAsc=!0,S.sort(v),S&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',w),d(w,P)),E()):A()}export default function(t){o()&&function(t){w=t||h,w&&c("fsh_monsterLog").then(x)}(t)}
//# sourceMappingURL=monstorLog-37b9cff7.js.map